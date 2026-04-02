import { useState } from "react";
import contactHero from "../assets/contact-hero.jpg";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm(initialForm);
  };

  return (
    <main className="page">
      <section className="page-hero section reveal" id="contact">
        <div className="container split-grid">
          <div className="section-copy">
            <span className="section-tag">Contact</span>
            <h1>Let’s connect and create something meaningful together.</h1>
            <p>
              Whether you want to volunteer, partner, donate, or simply learn more about our work,
              we would love to hear from you. Reach out and let’s build impact together.
            </p>
          </div>
          <div className="section-image">
            <img src={contactHero} alt="Community support team ready to connect" />
          </div>
        </div>
      </section>

      <section className="section reveal delay-1">
        <div className="container split-grid">
          <form className="program-card contact-form" onSubmit={handleSubmit}>
            <h2>Send us a message</h2>
            <label>
              Full Name
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your full name"
                required
              />
            </label>
            <label>
              Email Address
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your email address"
                required
              />
            </label>
            <label>
              Subject
              <input
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="How can we help?"
                required
              />
            </label>
            <label>
              Message
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="6"
                placeholder="Write your message here"
                required
              />
            </label>
            <button className="btn btn-primary" type="submit">Submit Message</button>
            {submitted && (
              <p style={{ marginTop: "1rem", color: "#7dffcb" }}>
                Thank you. Your message is ready to be sent.
              </p>
            )}
          </form>

          <div className="program-card">
            <h2>Contact Details</h2>
            <p><strong>Email:</strong> hello@hopebridge.org</p>
            <p><strong>Phone:</strong> +234 800 000 0000</p>
            <p><strong>Location:</strong> Nigeria</p>
            <p>
              We are open to partnerships, volunteer support, outreach collaborations, and mission-driven conversations.
            </p>
            <div className="hero-actions" style={{ marginTop: "1.5rem" }}>
              <a className="btn btn-secondary" href="/programs">Explore Programs</a>
              <a className="btn btn-primary" href="/impact">See Impact</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;