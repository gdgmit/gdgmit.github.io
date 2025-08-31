import { Mail, MapPin, Globe, Github, Twitter, Linkedin } from "lucide-react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* About Section */}
          <div className="footer-section">
            <div className="footer-logo">
              <div className="gdg-colors">
                <span className="color-blue"></span>
                <span className="color-red"></span>
                <span className="color-yellow"></span>
                <span className="color-green"></span>
              </div>
              <div className="footer-logo-text">
                <span className="logo-primary">GDG MIT</span>
                <span className="logo-secondary">Anna University Chennai</span>
              </div>
            </div>
            <p className="footer-description">
              Google Developer Groups On Campus at Madras Institute of
              Technology. Empowering students with cutting-edge technology and
              innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/blogs">All Blogs</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3>Contact</h3>
            <div className="contact-info">
              <div className="contact-item">
                <MapPin size={16} />
                <span>MIT Campus, Anna University, Chennai</span>
              </div>
              <div className="contact-item">
                <Mail size={16} />
                <span>gdg.mit.chennai@gmail.com</span>
              </div>
              <div className="contact-item">
                <Globe size={16} />
                <span>gdg.mit.edu</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a href="#" aria-label="Twitter" className="social-link">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="social-link">
                <Linkedin size={20} />
              </a>
              <a href="#" aria-label="GitHub" className="social-link">
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>
            &copy; {currentYear} Google Developer Groups MIT. All rights
            reserved.
          </p>
          <p>Made with ❤️ by GDG MIT Team</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
