import { useState } from "react";
import { Mail, MapPin, Phone, Send, Users, Calendar, Code } from "lucide-react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact">
      <div className="container">
        {/* Header */}
        <div className="page-header">
          <h1>Get In Touch</h1>
          <p>
            Have questions or want to join our community? We'd love to hear from
            you!
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Info */}
          <div className="contact-info">
            <div className="info-card">
              <div className="card-header">
                <div className="card-icon">
                  <Mail size={24} />
                </div>
                <h3>Email Us</h3>
              </div>
              <p>
                Drop us an email and we'll get back to you as soon as possible.
              </p>
              <a
                href="mailto:gdg.mit.chennai@gmail.com"
                className="contact-link"
              >
                gdg.mit.chennai@gmail.com
              </a>
            </div>

            <div className="info-card">
              <div className="card-header">
                <div className="card-icon">
                  <MapPin size={24} />
                </div>
                <h3>Visit Us</h3>
              </div>
              <p>Find us at the heart of MIT campus in Chennai.</p>
              <address className="address">
                Madras Institute of Technology
                <br />
                Anna University
                <br />
                Chromepet, Chennai - 600044
                <br />
                Tamil Nadu, India
              </address>
            </div>

            <div className="info-card">
              <div className="card-header">
                <div className="card-icon">
                  <Users size={24} />
                </div>
                <h3>Join Our Community</h3>
              </div>
              <p>
                Connect with fellow developers and stay updated with our events.
              </p>
              <div className="community-stats">
                <div className="stat">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Members</span>
                </div>
                <div className="stat">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Events</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-section">
            <div className="form-header">
              <h2>Send us a Message</h2>
              <p>
                Fill out the form below and we'll get back to you within 24
                hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your email address"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="membership">Membership Information</option>
                  <option value="events">Event Participation</option>
                  <option value="collaboration">
                    Collaboration Opportunity
                  </option>
                  <option value="technical">Technical Support</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="6"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>

              {submitStatus === "success" && (
                <div className="form-message success">
                  <p>
                    ✅ Message sent successfully! We'll get back to you soon.
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="form-message error">
                  <p>❌ Something went wrong. Please try again later.</p>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Additional Info */}
        <div className="additional-info">
          <div className="info-grid">
            <div className="info-item">
              <Calendar size={32} />
              <h3>Regular Meetups</h3>
              <p>
                Join our monthly tech talks and workshops every first Saturday
                of the month.
              </p>
            </div>
            <div className="info-item">
              <Code size={32} />
              <h3>Code Workshops</h3>
              <p>
                Hands-on coding sessions covering Android, Web Dev, ML, and
                Cloud technologies.
              </p>
            </div>
            <div className="info-item">
              <Users size={32} />
              <h3>Networking Events</h3>
              <p>
                Connect with industry professionals and fellow students in our
                networking sessions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
