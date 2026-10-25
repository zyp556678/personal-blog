/* Lightweight site micro-interactions: Click Spark.
 * Kept dependency-free so the static pages stay light.
 */

const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

if (!reduceMotion && !window.location.pathname.startsWith('/lab/')) {
  const canvas = document.createElement('canvas');
  canvas.setAttribute('aria-hidden', 'true');
  canvas.style.cssText =
    'position:fixed;inset:0;z-index:9998;width:100%;height:100%;pointer-events:none';
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  const sparks = [];
  let raf = 0;
  let width = 0;
  let height = 0;

  const resize = () => {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  };

  const accent = () =>
    getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#2348d8';

  const draw = (now) => {
    ctx.clearRect(0, 0, width, height);
    for (let i = sparks.length - 1; i >= 0; i -= 1) {
      const spark = sparks[i];
      const progress = (now - spark.started) / spark.life;
      if (progress >= 1) {
        sparks.splice(i, 1);
        continue;
      }
      const ease = 1 - Math.pow(1 - progress, 3);
      const distance = spark.radius * ease;
      const length = spark.length * Math.pow(1 - progress, 1.6);
      const x = spark.x + Math.cos(spark.angle) * distance;
      const y = spark.y + Math.sin(spark.angle) * distance;
      const x2 = spark.x + Math.cos(spark.angle) * (distance + length);
      const y2 = spark.y + Math.sin(spark.angle) * (distance + length);

      ctx.globalAlpha = 1 - Math.pow(progress, 2);
      ctx.strokeStyle = spark.color;
      ctx.lineWidth = 1.5;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    }
    ctx.globalAlpha = 1;

    if (sparks.length > 0) {
      raf = requestAnimationFrame(draw);
    } else {
      raf = 0;
    }
  };

  const sparkAt = (x, y) => {
    const color = accent();
    const count = 9;
    const base = Math.random() * Math.PI * 2;

    for (let i = 0; i < count; i += 1) {
      sparks.push({
        x,
        y,
        angle: base + (i / count) * Math.PI * 2 + (Math.random() - 0.5) * 0.26,
        radius: 28 + Math.random() * 20,
        length: 7 + Math.random() * 8,
        life: 380 + Math.random() * 150,
        started: performance.now(),
        color,
      });
    }

    if (!raf) raf = requestAnimationFrame(draw);
  };

  document.addEventListener(
    'pointerdown',
    (event) => {
      if (event.pointerType === 'mouse' && event.button !== 0) return;
      sparkAt(event.clientX, event.clientY);
    },
    { passive: true }
  );

  window.addEventListener('resize', resize, { passive: true });
  resize();
}
