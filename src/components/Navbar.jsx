import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { navLinks } from "../data/content";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) setMenuOpen(false);
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Primary navigation">
        <NavLink to="/" className="brand" onClick={closeMenu}>
          <span className="brand-mark">HB</span>
          <span className="brand-text">
            <strong>HopeBridge</strong>
            <small>NGO Platform</small>
          </span>
        </NavLink>

        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-wrapper ${menuOpen ? "open" : ""}`} id="primary-navigation">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.label}>
                <NavLink
                  to={link.href}
                  onClick={closeMenu}
                  className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <NavLink to="/donate" className="nav-cta secondary" onClick={closeMenu}>
              Donate
            </NavLink>
            <NavLink to="/contact" className="nav-cta primary" onClick={closeMenu}>
              Contact Us
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;