import { useState, useEffect } from "react";
import { Search, Filter, X } from "lucide-react";
import BlogCard from "../components/BlogCard";
import "./AllBlogs.css";

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [sortBy, setSortBy] = useState("newest");

  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("/blog/data/blogs.json");
        const data = await response.json();

        setBlogs(data);
        setFilteredBlogs(data);

        // Extract unique categories and tags
        const uniqueCategories = [
          ...new Set(data.map((blog) => blog.category)),
        ];
        const uniqueTags = [...new Set(data.flatMap((blog) => blog.tags))];

        setCategories(uniqueCategories);
        setTags(uniqueTags);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  useEffect(() => {
    let filtered = [...blogs];

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(
        (blog) =>
          blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
          blog.author.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory) {
      filtered = filtered.filter((blog) => blog.category === selectedCategory);
    }

    // Tag filter
    if (selectedTag) {
      filtered = filtered.filter((blog) => blog.tags.includes(selectedTag));
    }

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return new Date(b.publishedAt) - new Date(a.publishedAt);
        case "oldest":
          return new Date(a.publishedAt) - new Date(b.publishedAt);
        case "title":
          return a.title.localeCompare(b.title);
        case "readingTime":
          return a.readingTime - b.readingTime;
        default:
          return 0;
      }
    });

    setFilteredBlogs(filtered);
  }, [blogs, searchQuery, selectedCategory, selectedTag, sortBy]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("");
    setSelectedTag("");
    setSortBy("newest");
  };

  const hasActiveFilters =
    searchQuery || selectedCategory || selectedTag || sortBy !== "newest";

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading blogs...</p>
      </div>
    );
  }

  return (
    <div className="all-blogs">
      <div className="container">
        {/* Header */}
        <div className="page-header">
          <h1>All Blog Posts</h1>
          <p>
            Explore our complete collection of articles, tutorials, and insights
          </p>
        </div>

        {/* Filters */}
        <div className="filters-section">
          <div className="search-bar">
            <Search size={20} />
            <input
              type="text"
              placeholder="Search blogs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="filters">
            <div className="filter-group">
              <label>Category:</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="">All Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label>Tag:</label>
              <select
                value={selectedTag}
                onChange={(e) => setSelectedTag(e.target.value)}
              >
                <option value="">All Tags</option>
                {tags.map((tag) => (
                  <option key={tag} value={tag}>
                    {tag}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label>Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="title">Title A-Z</option>
                <option value="readingTime">Reading Time</option>
              </select>
            </div>

            {hasActiveFilters && (
              <button className="clear-filters" onClick={clearFilters}>
                <X size={16} />
                Clear Filters
              </button>
            )}
          </div>
        </div>

        {/* Results */}
        <div className="results-section">
          <div className="results-header">
            <p className="results-count">
              {filteredBlogs.length}{" "}
              {filteredBlogs.length === 1 ? "post" : "posts"} found
            </p>
          </div>

          {filteredBlogs.length > 0 ? (
            <div className="blogs-grid">
              {filteredBlogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
          ) : (
            <div className="no-results">
              <Filter size={48} />
              <h3>No posts found</h3>
              <p>Try adjusting your search criteria or clearing the filters.</p>
              <button className="btn btn-primary" onClick={clearFilters}>
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;
