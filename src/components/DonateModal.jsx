import { useEffect, useState } from "react";

const presetAmounts = ["5000", "10000", "25000", "50000"];

const formatAmount = (value) => Number(value || 0).toLocaleString();

const DonateModal = ({ isOpen, onClose, amount, setAmount }) => {
  const [dontShowAgain, setDontShowAgain] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  const handleClose = () => {
    if (dontShowAgain) {
      localStorage.setItem("hideDonatePrompt", "true");
    }
    onClose();
  };

  const handleDonateNow = () => {
    if (dontShowAgain) {
      localStorage.setItem("hideDonatePrompt", "true");
    }
    onClose();
    window.location.href = "/donate";
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" role="presentation" onClick={handleClose}>
      <div
        className="modal-card donate-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="donate-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" type="button" aria-label="Close modal" onClick={handleClose}>
          ×
        </button>

        <span className="section-tag">Support the Mission</span>
        <h2 id="donate-modal-title">Your donation can change a life.</h2>

        <p className="donate-modal-text">
          Help us provide education support, health outreach, and community empowerment to
          people who need it most.
        </p>

        <div className="donate-goal">
          <div className="donate-goal-top">
            <span>Mission Support Goal</span>
            <strong>68%</strong>
          </div>
          <div className="donate-bar">
            <span className="donate-bar-fill" />
          </div>
          <small>Raised so far toward this month’s support target.</small>
        </div>

        <div className="donate-preset-grid">
          {presetAmounts.map((value) => (
            <button
              key={value}
              type="button"
              className={`preset-pill ${amount === value ? "active" : ""}`}
              onClick={() => setAmount(value)}
            >
              ₦{formatAmount(value)}
            </button>
          ))}
        </div>

        <label className="donate-amount-label">
          Donation amount
          <input
            type="text"
            value={formatAmount(amount)}
            readOnly
            className="donate-amount-input"
          />
        </label>

        <label className="dont-show-row">
          <input
            type="checkbox"
            checked={dontShowAgain}
            onChange={(e) => setDontShowAgain(e.target.checked)}
          />
          <span>Don’t show this again</span>
        </label>

        <div className="hero-actions modal-actions">
          <button className="btn btn-primary" type="button" onClick={handleDonateNow}>
            Donate Now
          </button>
          <button className="btn btn-secondary" type="button" onClick={handleClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonateModal;