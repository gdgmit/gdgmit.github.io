import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Users, BookOpen, Calendar } from "lucide-react";
import BlogCard from "../components/BlogCard";
import "./Home.css";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [featuredBlogs, setFeaturedBlogs] = useState([]);
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("/blog/data/blogs.json");
        const data = await response.json();

        setBlogs(data);
        setFeaturedBlogs(data.filter((blog) => blog.featured).slice(0, 3));
        setRecentBlogs(
          data
            .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
            .slice(0, 6)
        );
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading blogs...</p>
      </div>
    );
  }

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Welcome to <span className="highlight">GDG MIT</span> Blog
                Portal
              </h1>
              <p className="hero-description">
                Discover cutting-edge technology insights, tutorials, and
                innovations from Google Developer Groups at Madras Institute of
                Technology. Stay updated with the latest in Android, Web
                Development, Machine Learning, and Cloud Computing.
              </p>
              <div className="hero-actions">
                <Link to="/blogs" className="btn btn-primary">
                  Explore All Blogs
                  <ArrowRight size={16} />
                </Link>
                <Link to="/contact" className="btn btn-secondary">
                  Join Our Community
                </Link>
              </div>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-icon">
                  <BookOpen size={24} />
                </div>
                <div className="stat-content">
                  <span className="stat-number">{blogs.length}+</span>
                  <span className="stat-label">Blog Posts</span>
                </div>
              </div>
              <div className="stat">
                <div className="stat-icon">
                  <Users size={24} />
                </div>
                <div className="stat-content">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Active Members</span>
                </div>
              </div>
              <div className="stat">
                <div className="stat-icon">
                  <Calendar size={24} />
                </div>
                <div className="stat-content">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Events Hosted</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Blogs Section */}
      {featuredBlogs.length > 0 && (
        <section className="featured-section">
          <div className="container">
            <div className="section-header">
              <h2>Featured Articles</h2>
              <p>Handpicked content from our community experts</p>
            </div>
            <div className="featured-grid">
              {featuredBlogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} featured />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Recent Blogs Section */}
      <section className="recent-section">
        <div className="container">
          <div className="section-header">
            <h2>Recent Posts</h2>
            <p>Latest insights and tutorials from our developer community</p>
            <Link to="/blogs" className="section-action">
              View All Posts
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className="blogs-grid">
            {recentBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Join the GDG MIT Community</h2>
            <p>
              Connect with like-minded developers, attend workshops, and stay
              updated with the latest technology trends. Be part of our growing
              community!
            </p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary">
                Get In Touch
              </Link>
              <a
                href="mailto:gdg.mit.chennai@gmail.com"
                className="btn btn-secondary"
              >
                Subscribe to Newsletter
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
