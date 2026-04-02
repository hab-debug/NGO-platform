import { programs, stats } from "../data/content";
import heroImage from "../assets/hero.jpg";
import missionImage from "../assets/mission.jpg";
import impactImage from "../assets/impact.jpg";

const Home = () => {
  return (
    <main className="page">
      <section className="hero section reveal" id="home">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Community Development • Humanitarian Action • Sustainable Impact</span>
            <h1>Empowering communities with dignity, opportunity, and lasting support.</h1>
            <p>
              HopeBridge is a nonprofit initiative committed to improving lives through education,
              health outreach, community development, and practical support for vulnerable
              families. We believe meaningful change begins when people are given the tools,
              resources, and care they need to thrive.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="/contact">Partner With Us</a>
              <a className="btn btn-secondary" href="/programs">View Our Work</a>
            </div>
            <div className="hero-badges">
              <span>Transparent Mission</span>
              <span>Community Focused</span>
              <span>Responsive Design</span>
            </div>
          </div>

          <div className="hero-media">
            <img src={heroImage} alt="Volunteers and community members working together" />
            <div className="floating-card">
              <strong>1,200+</strong>
              <span>People reached through outreach and support</span>
            </div>
          </div>
        </div>
      </section>

      <section className="stats section reveal delay-1" id="impact">
        <div className="container stats-grid">
          {stats.map((item) => (
            <article key={item.label} className="stat-card">
              <h2>{item.value}</h2>
              <p>{item.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about section reveal delay-2" id="about">
        <div className="container split-grid">
          <div className="section-image">
            <img src={missionImage} alt="Team planning a community outreach project" />
          </div>
          <div className="section-copy">
            <span className="section-tag">Our Mission</span>
            <h2>Serving people with purpose, compassion, and accountability.</h2>
            <p>
              Our mission is to create safe, inclusive, and supportive programs that strengthen
              communities and open doors to better opportunities. We work closely with local
              partners to deliver solutions that are practical, respectful, and sustainable.
            </p>
            <p>
              From youth empowerment to family support, every initiative is designed to restore
              hope, build confidence, and promote long-term progress.
            </p>
          </div>
        </div>
      </section>

      <section className="programs section reveal delay-3" id="programs">
        <div className="container">
          <div className="section-heading">
            <span className="section-tag">Our Programs</span>
            <h2>Focused interventions that respond to real community needs.</h2>
          </div>
          <div className="program-grid">
            {programs.map((program) => (
              <article key={program.title} className="program-card">
                <img src={program.image} alt={program.title} />
                <h3>{program.title}</h3>
                <p>{program.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="story section reveal delay-1">
        <div className="container split-grid reverse">
          <div className="section-copy">
            <span className="section-tag">Our Impact</span>
            <h2>Every project is built to deliver measurable, human-centered results.</h2>
            <p>
              We focus on outcomes that matter: children staying in school, families receiving
              timely support, and communities gaining access to resources that improve daily life.
              Our approach combines local insight, consistency, and clear reporting.
            </p>
          </div>
          <div className="section-image">
            <img src={impactImage} alt="Community members celebrating a successful initiative" />
          </div>
        </div>
      </section>

      <section className="cta section reveal delay-2" id="contact">
        <div className="container cta-box">
          <h2>Join a mission that creates real change.</h2>
          <p>
            Whether you want to donate, volunteer, or collaborate, your support helps us reach
            more people and expand the impact of every program we deliver.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="/contact">Get Involved</a>
            <a className="btn btn-secondary" href="/about">Learn More</a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;