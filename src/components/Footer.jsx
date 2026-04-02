import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-brand">HopeBridge</div>
          <p>
            A modern NGO platform focused on education, health, empowerment, and sustainable
            community impact.
          </p>
        </div>

        <div>
          <h3>Quick Links</h3>
          <ul>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/programs">Programs</NavLink></li>
            <li><NavLink to="/impact">Impact</NavLink></li>
            <li><NavLink to="/donate">Donate</NavLink></li>
          </ul>
        </div>

        <div>
          <h3>Contact</h3>
          <ul>
            <li>Email: hello@hopebridge.org</li>
            <li>Phone: +234 800 000 0000</li>
            <li>Location: Nigeria</li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© 2026 HopeBridge. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;