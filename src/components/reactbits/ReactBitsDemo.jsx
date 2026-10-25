import React from 'react';
import { useState } from 'react';
import SplitText from './SplitText.jsx';
import BlurText from './BlurText.jsx';
import FadeContent from './FadeContent.jsx';
import SpotlightCard from './SpotlightCard.jsx';
import ClickSpark from './ClickSpark.jsx';

const Section = ({ index, name, note, children }) => (
  <section className="rb-section">
    <header className="rb-section-head">
      <span className="rb-index">{index}</span>
      <div>
        <h2 className="rb-name">{name}</h2>
        <p className="rb-note">{note}</p>
      </div>
    </header>
    <div className="rb-stage">{children}</div>
  </section>
);

export default function ReactBitsDemo() {
  const [replay, setReplay] = useState(0);

  return (
    <div className="rb-demo">
      <section className="rb-hero">
        <p className="rb-kicker">MOTION LAB <span>/</span> REACT BITS</p>
        <SplitText
          tag="h1"
          className="rb-title"
          text="Five ways to move a page."
          splitType="chars"
          delay={26}
          duration={0.9}
          effect="rise"
        />
        <BlurText
          className="rb-lede"
          text="A small playground for five React Bits effects, tuned to the quiet paper-and-ink language of Miles Notes."
          animateBy="words"
          delay={38}
          stepDuration={0.32}
          blur={8}
          distance={28}
          effect="focus"
          trigger="load"
        />
      </section>

      <Section
        index="01"
        name="Split Text"
        note="Characters arrive one by one, like a sentence finding its rhythm."
      >
        <div className="rb-split-demo">
          <SplitText
            key={replay}
            tag="p"
            className="rb-big-copy"
            text="Every letter can arrive on its own beat."
            splitType="chars"
            delay={35}
            duration={1}
            effect="wave"
            staggerFrom="start"
          />
          <button className="rb-replay" type="button" onClick={() => setReplay((value) => value + 1)}>
            REPLAY ↻
          </button>
        </div>
      </Section>

      <Section
        index="02"
        name="Blur Text"
        note="A soft-focus entrance: the words sharpen while they settle into place."
      >
        <BlurText
          className="rb-big-copy rb-blur-copy"
          text="Clarity comes into focus."
          animateBy="words"
          delay={130}
          stepDuration={0.38}
          blur={10}
          distance={34}
          effect="focus"
          trigger="view"
        />
      </Section>

      <Section
        index="03"
        name="Fade Content"
        note="Content waits just below the surface, then reveals itself as you scroll."
      >
        <FadeContent effect="focus" blur={8} duration={1.1} threshold={0.18} className="rb-fade-demo">
          <div className="rb-quote-card">
            <span className="rb-quote-mark">“</span>
            <p>Good interfaces don't shout. They let the right thing appear at the right moment.</p>
            <span className="rb-quote-by">A NOTE TO SELF / 2026</span>
          </div>
        </FadeContent>
      </Section>

      <Section
        index="04"
        name="Spotlight Card"
        note="A soft light follows the pointer and catches the edge of the card."
      >
        <div className="rb-card-grid">
          <SpotlightCard
            className="rb-spot-card"
            theme="dark"
            spotlightColor="#98b0ff"
            intensity={0.38}
            spotlightSize={280}
            borderGlow={0.85}
            grain={0.08}
          >
            <span className="rb-card-index">01 / WRITE</span>
            <h3>Make a mark.</h3>
            <p>Notes, fragments, and ideas worth keeping. Move your cursor across the card.</p>
          </SpotlightCard>
          <SpotlightCard
            className="rb-spot-card"
            theme="dark"
            spotlightColor="#f2c46d"
            intensity={0.32}
            spotlightSize={250}
            borderGlow={0.75}
            grain={0.05}
          >
            <span className="rb-card-index">02 / BUILD</span>
            <h3>Stay curious.</h3>
            <p>Small experiments become useful tools when they are given enough room to breathe.</p>
          </SpotlightCard>
        </div>
      </Section>

      <Section
        index="05"
        name="Click Spark"
        note="Every click sends a little constellation of sparks across the page."
      >
        <ClickSpark
          className="rb-spark-panel"
          sparkColor="#2348d8"
          sparkSize={18}
          sparkRadius={58}
          sparkCount={14}
          sparkWidth={2}
          duration={650}
          shape="line"
          glow={0.3}
          ring
        >
          <div className="rb-spark-inner">
            <span className="rb-card-index">CLICK ANYWHERE</span>
            <h3>Make a little spark.</h3>
            <p>A small celebration for the ordinary act of clicking through an idea.</p>
            <span className="rb-click-hint">TRY IT →</span>
          </div>
        </ClickSpark>
      </Section>

      <footer className="rb-footer">
        <span>REACT BITS / 2026</span>
        <a href="/">BACK TO MILES NOTES →</a>
      </footer>
    </div>
  );
}
