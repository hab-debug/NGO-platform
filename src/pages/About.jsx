import aboutImage from "../assets/about.jpg";
import teamImage from "../assets/team.jpg";

const values = [
  {
    title: "Compassion First",
    text: "We lead with empathy and design every initiative around the real needs of the people we serve.",
  },
  {
    title: "Community Partnership",
    text: "We work with local voices, organizations, and volunteers to build trust and lasting impact.",
  },
  {
    title: "Transparent Action",
    text: "We believe in accountability, clear communication, and measurable outcomes that people can see.",
  },
];

const milestones = [
  { year: "2018", title: "Founded", text: "Started as a small volunteer-led initiative focused on community care." },
  { year: "2021", title: "Expanded Reach", text: "Grew into education, health, and family support programs across multiple communities." },
  { year: "2026", title: "Sustainable Growth", text: "Continuing to scale through partnerships, innovation, and stronger local engagement." },
];

const About = () => {
  return (
    <main className="page">
      <section className="page-hero section reveal" id="about">
        <div className="container split-grid">
          <div className="section-copy">
            <span className="section-tag">About Us</span>
            <h1>We exist to create meaningful change for people and communities.</h1>
            <p>
              HopeBridge is a nonprofit organization dedicated to building stronger communities
              through education, health support, empowerment, and practical humanitarian action.
              Our work is rooted in dignity, inclusion, and long-term sustainability.
            </p>
          </div>
          <div className="section-image">
            <img src={aboutImage} alt="NGO team members discussing community support plans" />
          </div>
        </div>
      </section>

      <section className="section reveal delay-1">
        <div className="container">
          <div className="section-heading">
            <span className="section-tag">What Drives Us</span>
            <h2>A mission shaped by real people and real needs.</h2>
          </div>
          <div className="program-grid">
            {values.map((item) => (
              <article key={item.title} className="program-card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section reveal delay-2">
        <div className="container split-grid reverse">
          <div className="section-copy">
            <span className="section-tag">Our Story</span>
            <h2>From local concern to structured, scalable impact.</h2>
            <p>
              What began as a small effort to support vulnerable families has grown into a focused
              NGO platform with clear programs, strong partnerships, and a commitment to practical
              results. We continue to improve how we serve by listening, adapting, and building with
              the communities around us.
            </p>
            <p>
              Every project we launch is designed to be accessible, useful, and sustainable so that
              the impact lasts beyond the moment of delivery.
            </p>
          </div>
          <div className="section-image">
            <img src={teamImage} alt="Team of volunteers working on a community project" />
          </div>
        </div>
      </section>

      <section className="section reveal delay-3">
        <div className="container">
          <div className="section-heading">
            <span className="section-tag">Timeline</span>
            <h2>Key moments in our journey.</h2>
          </div>
          <div className="stats-grid">
            {milestones.map((item) => (
              <article key={item.year} className="stat-card">
                <h2>{item.year}</h2>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta section reveal delay-1">
        <div className="container cta-box">
          <h2>We are building more than a website — we are building trust.</h2>
          <p>
            The goal is to present a modern, credible NGO platform that looks professional,
            responds beautifully on every screen, and communicates real value at first glance.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="/contact">Partner With Us</a>
            <a className="btn btn-secondary" href="/programs">See Programs</a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;