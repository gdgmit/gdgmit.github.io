import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { formatDate } from "../utils/dateUtils";
import "./BlogCard.css";

const BlogCard = ({ blog, featured = false }) => {
  return (
    <article className={`blog-card ${featured ? "featured" : ""}`}>
      <Link to={`/blog/${blog.slug}`} className="blog-card-link">
        {/* Blog Image */}
        <div className="blog-image">
          <img
            src={blog.image || "/blog/images/placeholder-blog.jpg"}
            alt={blog.title}
            loading="lazy"
          />
          {featured && <span className="featured-badge">Featured</span>}
          <div className="category-badge">{blog.category}</div>
        </div>

        {/* Blog Content */}
        <div className="blog-content">
          <div className="blog-meta">
            <div className="meta-item">
              <Calendar size={14} />
              <span>{formatDate(blog.publishedAt)}</span>
            </div>
            <div className="meta-item">
              <Clock size={14} />
              <span>{blog.readingTime} min read</span>
            </div>
          </div>

          <h3 className="blog-title">{blog.title}</h3>
          <p className="blog-excerpt">{blog.excerpt}</p>

          <div className="blog-footer">
            <div className="author-info">
              <div className="author-avatar">
                <img
                  src={
                    blog.author.avatar || "/blog/images/placeholder-avatar.jpg"
                  }
                  alt={blog.author.name}
                />
              </div>
              <div className="author-details">
                <span className="author-name">{blog.author.name}</span>
                <span className="author-bio">{blog.author.bio}</span>
              </div>
            </div>

            <div className="read-more">
              <span>Read More</span>
              <ArrowRight size={16} />
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default BlogCard;
