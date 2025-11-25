import { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleLinkClick() {
    setMenuOpen(false);
  }

  return (
    <header>
      <div className="top-bar">
        <span>California • +123 456 7890</span>
        <div className="top-buttons">
          <button>Login</button>
          <button>Sign Up</button>
        </div>
      </div>

      <nav className="navbar">
        <div className="nav-left">
          <div className="logo-circle"></div>
          <span className="brand">sea</span>
        </div>

        <button
          className={`menu-icon${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <ul
          id="primary-navigation"
          className={`nav-links${menuOpen ? " active" : ""}`}
        >
          <li>
            <Link to="/" onClick={handleLinkClick}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" onClick={handleLinkClick}>
              Products
            </Link>
          </li>
          <li>
            <Link to="/about-us" onClick={handleLinkClick}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/trending" onClick={handleLinkClick}>
              Trending
            </Link>
          </li>
          <li>
            <Link to="/deals" onClick={handleLinkClick}>
              Deals
            </Link>
          </li>
          <li>
            <Link to="/contact-us" onClick={handleLinkClick}>
              Contact Us
            </Link>
          </li>
        </ul>

        <button className="sign-in">Sign In</button>
      </nav>
    </header>
  );
}

