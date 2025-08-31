import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Calendar, Clock, User, ArrowLeft, Tag } from "lucide-react";
import { formatFullDate } from "../utils/dateUtils";
import "./BlogDetail.css";

const BlogDetail = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedBlogs, setRelatedBlogs] = useState([]);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch("/data/blogs.json");
        const blogs = await response.json();

        const foundBlog = blogs.find((b) => b.slug === slug);
        setBlog(foundBlog);

        if (foundBlog) {
          // Get related blogs from same category
          const related = blogs
            .filter(
              (b) => b.id !== foundBlog.id && b.category === foundBlog.category
            )
            .slice(0, 3);
          setRelatedBlogs(related);
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading blog...</p>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="blog-detail">
        <div className="container">
          <div className="not-found">
            <h1>Blog Post Not Found</h1>
            <p>The blog post you're looking for doesn't exist.</p>
            <Link to="/blogs" className="btn btn-primary">
              <ArrowLeft size={16} />
              Back to All Blogs
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-detail">
      <div className="container">
        {/* Back Button */}
        <Link to="/blogs" className="back-button">
          <ArrowLeft size={16} />
          Back to All Blogs
        </Link>

        {/* Blog Header */}
        <header className="blog-header">
          <div className="blog-meta">
            <span className="category-badge">{blog.category}</span>
            <div className="meta-items">
              <div className="meta-item">
                <Calendar size={14} />
                <span>{formatFullDate(blog.publishedAt)}</span>
              </div>
              <div className="meta-item">
                <Clock size={14} />
                <span>{blog.readingTime} min read</span>
              </div>
            </div>
          </div>
          <h1 className="blog-title">{blog.title}</h1>
          <p className="blog-excerpt">{blog.excerpt}</p>
        </header>

        {/* Blog Image */}
        <div className="blog-image">
          <img
            src={blog.image || "/images/placeholder-blog.jpg"}
            alt={blog.title}
          />
        </div>

        {/* Author Info */}
        <div className="author-section">
          <div className="author-info">
            <div className="author-avatar">
              <img
                src={blog.author.avatar || "/images/placeholder-avatar.jpg"}
                alt={blog.author.name}
              />
            </div>
            <div className="author-details">
              <h3>{blog.author.name}</h3>
              <p>{blog.author.bio}</p>
            </div>
          </div>
        </div>

        {/* Blog Content */}
        <article className="blog-content">
          <div
            dangerouslySetInnerHTML={{
              __html: blog.content.replace(/\n/g, "<br><br>"),
            }}
          />
        </article>

        {/* Tags */}
        <div className="tags-section">
          <h3>Tags</h3>
          <div className="tags">
            {blog.tags.map((tag) => (
              <span key={tag} className="tag">
                <Tag size={14} />
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Related Blogs */}
        {relatedBlogs.length > 0 && (
          <section className="related-section">
            <h3>Related Articles</h3>
            <div className="related-blogs">
              {relatedBlogs.map((relatedBlog) => (
                <Link
                  key={relatedBlog.id}
                  to={`/blog/${relatedBlog.slug}`}
                  className="related-blog"
                >
                  <div className="related-image">
                    <img
                      src={relatedBlog.image || "/images/placeholder-blog.jpg"}
                      alt={relatedBlog.title}
                    />
                  </div>
                  <div className="related-content">
                    <h4>{relatedBlog.title}</h4>
                    <p>{relatedBlog.excerpt.substring(0, 100)}...</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default BlogDetail;
