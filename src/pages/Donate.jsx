import { useState } from "react";

const presetAmounts = [5000, 10000, 25000, 50000];

const causes = [
  "Education Support",
  "Health Outreach",
  "Community Empowerment",
  "Family Assistance",
];

const Donate = ({ amount, setAmount }) => {
  const [name, setName] = useState("");
  const [selectedCause, setSelectedCause] = useState(causes[0]);

  return (
    <main className="page">
      <section className="page-hero section reveal" id="donate">
        <div className="container split-grid">
          <div className="section-copy">
            <span className="section-tag">Donate</span>
            <h1>Give hope where it matters most.</h1>
            <p>
              Your support helps us provide education materials, health outreach, food support,
              and community empowerment programs for people who need them most.
            </p>
          </div>
          <div className="program-card">
            <h2>Select your donation</h2>
            <div className="donate-preset-grid" style={{ marginTop: "1rem" }}>
              {presetAmounts.map((value) => (
                <button
                  key={value}
                  type="button"
                  className={`preset-pill ${String(value) === amount ? "active" : ""}`}
                  onClick={() => setAmount(String(value))}
                >
                  ₦{value.toLocaleString()}
                </button>
              ))}
            </div>

            <label>
              Full Name
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
              />
            </label>

            <label>
              Amount (₦)
              <input
                value={Number(amount || 0).toLocaleString()}
                onChange={(e) => {
                  const raw = e.target.value.replace(/,/g, "");
                  if (/^\d*$/.test(raw)) setAmount(raw || "0");
                }}
                placeholder="Enter amount"
              />
            </label>

            <label>
              Choose Cause
              <select value={selectedCause} onChange={(e) => setSelectedCause(e.target.value)}>
                {causes.map((cause) => (
                  <option key={cause}>{cause}</option>
                ))}
              </select>
            </label>

            <a
              className="btn btn-primary"
              href="#donate-summary"
              style={{ marginTop: "1.5rem", display: "inline-flex" }}
            >
              Continue Donation
            </a>
          </div>
        </div>
      </section>

      <section className="section reveal delay-1">
        <div className="container split-grid">
          <div className="program-card" id="donate-summary">
            <h2>Donation summary</h2>
            <p><strong>Donor:</strong> {name || "Anonymous supporter"}</p>
            <p><strong>Amount:</strong> ₦{Number(amount || 0).toLocaleString()}</p>
            <p><strong>Cause:</strong> {selectedCause}</p>
            <p>
              This page is designed for presentation and portfolio use. Later, you can connect it
              to a real payment provider or donation gateway.
            </p>
            <div className="hero-actions" style={{ marginTop: "1.5rem" }}>
              <a className="btn btn-secondary" href="/impact">See Impact</a>
              <a className="btn btn-primary" href="/contact">Volunteer Instead</a>
            </div>
          </div>

          <div className="program-card">
            <h2>Why donate?</h2>
            <p>Donations support children, families, and communities through practical programs.</p>
            <p>Every contribution helps fund education, healthcare access, and local empowerment work.</p>
            <p>Your support helps us respond quickly and responsibly to real community needs.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Donate;