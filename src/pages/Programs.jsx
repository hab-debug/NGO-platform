import programHero from "../assets/program-hero.jpg";
import educationImage from "../assets/education.jpg";
import healthImage from "../assets/health.jpg";
import empowermentImage from "../assets/empowerment.jpg";

const programData = [
  {
    title: "Education Support",
    image: educationImage,
    text: "We support learning through access to school materials, mentorship, digital literacy, and academic encouragement for children and youth.",
  },
  {
    title: "Health Outreach",
    image: healthImage,
    text: "We help communities access basic health awareness, wellness support, and outreach that promotes better everyday living.",
  },
  {
    title: "Community Empowerment",
    image: empowermentImage,
    text: "We provide skills-based support and opportunities that help people grow in confidence, independence, and long-term resilience.",
  },
];

const Programs = () => {
  return (
    <main className="page">
      <section className="page-hero section reveal" id="programs">
        <div className="container split-grid">
          <div className="section-copy">
            <span className="section-tag">Programs</span>
            <h1>Practical programs built to uplift people and strengthen communities.</h1>
            <p>
              Our programs are designed to address real challenges with clear, people-centered
              solutions. Each initiative focuses on long-term value, local relevance, and visible
              community outcomes.
            </p>
          </div>
          <div className="section-image">
            <img src={programHero} alt="Community program participants and volunteers" />
          </div>
        </div>
      </section>

      <section className="section reveal delay-1">
        <div className="container">
          <div className="program-grid">
            {programData.map((item) => (
              <article key={item.title} className="program-card">
                <img src={item.image} alt={item.title} />
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta section reveal delay-2">
        <div className="container cta-box">
          <h2>Every program is built with purpose and care.</h2>
          <p>
            As the project grows, each page will remain clean, responsive, and easy to expand so
            the full website feels like a complete NGO platform.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="/contact">Support a Program</a>
            <a className="btn btn-secondary" href="/impact">View Impact</a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Programs;