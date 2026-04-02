import { useState } from "react";
import impactHero from "../assets/impact-hero.jpg";

const impactData = [
  { label: "Communities reached", value: "120+" },
  { label: "Lives supported", value: "8,000+" },
  { label: "Active projects", value: "45+" },
  { label: "Local partners", value: "15+" },
];

const stories = [
  {
    title: "Education that changes futures",
    text: "We help children access learning resources, mentorship, and encouragement that support long-term growth.",
  },
  {
    title: "Health support close to home",
    text: "Our outreach creates awareness and practical care that makes everyday life safer and healthier.",
  },
  {
    title: "Empowerment through opportunity",
    text: "We build initiatives that help people gain confidence, skills, and pathways to stability.",
  },
];

const Impact = () => {
  const [active, setActive] = useState(0);

  return (
    <main className="page">
      <section className="page-hero section reveal" id="impact">
        <div className="container split-grid">
          <div className="section-copy">
            <span className="section-tag">Impact</span>
            <h1>Real outcomes powered by people, partnerships, and purpose.</h1>
            <p>
              Our impact is measured not only by numbers, but by the confidence, stability, and
              opportunity that people gain through our programs. We focus on results that are
              practical, visible, and meaningful.
            </p>
          </div>
          <div className="section-image">
            <img src={impactHero} alt="Community members and volunteers celebrating progress" />
          </div>
        </div>
      </section>

      <section className="section reveal delay-1">
        <div className="container stats-grid">
          {impactData.map((item) => (
            <article key={item.label} className="stat-card">
              <h2>{item.value}</h2>
              <p>{item.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section reveal delay-2">
        <div className="container split-grid">
          <div className="section-copy">
            <span className="section-tag">Interactive Story</span>
            <h2>Select an impact focus.</h2>
            <div className="hero-badges" style={{ marginTop: "1.2rem" }}>
              {stories.map((story, index) => (
                <button
                  key={story.title}
                  type="button"
                  className="impact-chip"
                  onClick={() => setActive(index)}
                  style={{
                    border: "1px solid rgba(255,255,255,.12)",
                    background: active === index ? "rgba(79,140,255,.18)" : "transparent",
                    color: "#eaf1ff",
                    padding: "0.75rem 1rem",
                    borderRadius: "999px",
                    cursor: "pointer",
                  }}
                >
                  {story.title}
                </button>
              ))}
            </div>
            <div className="program-card" style={{ marginTop: "1.5rem" }}>
              <h3>{stories[active].title}</h3>
              <p>{stories[active].text}</p>
            </div>
          </div>
          <div className="section-image">
            <img src={impactHero} alt="A visible community impact showcase" />
          </div>
        </div>
      </section>

      <section className="cta section reveal delay-3">
        <div className="container cta-box">
          <h2>Impact becomes powerful when it is clear and shareable.</h2>
          <p>
            This page adds interaction without losing professionalism, making the project more
            impressive for portfolio use and social media presentation.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="/contact">Support Our Work</a>
            <a className="btn btn-secondary" href="/about">Meet the Team</a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Impact;