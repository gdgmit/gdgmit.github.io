# GDG MIT Blog Portal - Deployment Guide

## 🚀 Quick Start

Your blog portal is now complete and ready for deployment! Here's everything you need to know:

## ✅ What's Included

- ✨ **Modern React App**: Built with Vite for optimal performance
- 🎨 **Google Material Design**: Authentic GDG branding and styling
- 📱 **Fully Responsive**: Works perfectly on all devices
- 🔍 **Search & Filter**: Advanced blog filtering capabilities
- 📝 **5 Sample Blog Posts**: Ready-to-use content with placeholder images
- 🎯 **SEO Optimized**: Proper meta tags and semantic HTML

## 🌐 Local Development

The application is currently running at:
**http://localhost:5174/blog/**

### Available Commands:

```bash
npm run dev     # Start development server
npm run build   # Build for production
npm run preview # Preview production build
npm run deploy  # Deploy to GitHub Pages (after setup)
```

## 📦 GitHub Pages Deployment

### Step 1: Push to GitHub

1. Initialize git repository:

   ```bash
   git init
   git add .
   git commit -m "Initial commit: GDG MIT Blog Portal"
   ```

2. Create a new repository on GitHub named `blog`

3. Push your code:
   ```bash
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/blog.git
   git push -u origin main
   ```

### Step 2: Enable GitHub Pages

1. Go to your repository settings
2. Navigate to "Pages" section
3. Select "GitHub Actions" as source
4. The deployment will start automatically

### Step 3: Update Configuration

Update the homepage URL in `package.json`:

```json
"homepage": "https://YOUR_USERNAME.github.io/blog/"
```

Your site will be available at: `https://YOUR_USERNAME.github.io/blog/`

## 🎨 Customization

### Adding New Blog Posts

Edit `public/data/blogs.json` and add new blog entries following this structure:

```json
{
  "id": 6,
  "title": "Your Blog Title",
  "slug": "your-blog-slug",
  "excerpt": "Brief description...",
  "content": "Full blog content with HTML markup...",
  "author": {
    "name": "Author Name",
    "avatar": "/blog/images/authors/author.jpg",
    "bio": "Author bio"
  },
  "publishedAt": "2024-09-01T10:00:00Z",
  "featured": true,
  "tags": ["tag1", "tag2"],
  "category": "Category Name",
  "readingTime": 5,
  "image": "/blog/images/blogs/blog-image.jpg"
}
```

### Adding Real Images

Replace placeholder images in:

- `public/images/blogs/` - Blog post images (600x400px recommended)
- `public/images/authors/` - Author avatars (150x150px recommended)

### Updating Contact Information

Edit `src/pages/Contact.jsx` to update:

- Email addresses
- Physical address
- Social media links
- Community statistics

### Customizing Branding

Update the following files:

- `src/components/Header.jsx` - Logo and navigation
- `src/components/Footer.jsx` - Footer content
- `src/index.css` - Colors and styling
- `public/index.html` - Site title and meta tags

## 🔧 Technical Details

### Built With:

- **React 18+** - Modern React with hooks
- **Vite 7** - Fast build tool and dev server
- **React Router DOM** - Client-side routing
- **Lucide React** - Beautiful icons
- **date-fns** - Date formatting utilities
- **CSS3** - Custom styling with Material Design

### File Structure:

```
src/
├── components/     # Reusable UI components
├── pages/         # Main page components
├── utils/         # Utility functions
└── data/          # Static data files

public/
├── data/          # Blog JSON data
└── images/        # Static images
```

### Performance Features:

- ⚡ Lazy loading images
- 📦 Code splitting ready
- 🗜️ Optimized bundles
- 🎯 Lighthouse score optimized

## 📱 Features Showcase

### 🏠 Home Page

- Hero section with GDG branding
- Featured blogs carousel
- Recent posts grid
- Community statistics
- Call-to-action sections

### 📚 All Blogs Page

- Search functionality
- Category filtering
- Tag filtering
- Sorting options
- Responsive grid layout

### 📄 Blog Detail Pages

- Full content display
- Author information
- Related articles
- Social sharing ready

### 📧 Contact Page

- Contact form with validation
- Community information
- Location details
- Event information

## 🎯 Next Steps

1. **Deploy to GitHub Pages** using the guide above
2. **Add real blog content** by editing the JSON file
3. **Replace placeholder images** with actual photos
4. **Customize contact information** for your GDG chapter
5. **Share with your community** and start blogging!

## 🤝 Support

If you need help or have questions:

- Check the README.md for detailed documentation
- Review the code comments for implementation details
- The application follows React best practices and is well-documented

---

**🎉 Congratulations! Your GDG MIT Blog Portal is ready to go live!**

The application has been built, tested, and is production-ready. Simply follow the deployment steps above to share it with your community.
