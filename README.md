# GDG MIT Blog Portal

A modern, responsive blog management portal built for Google Developer Groups On Campus - MIT (Madras Institute of Technology, Anna University Chennai). This client-side application showcases cutting-edge technology insights, tutorials, and innovations from the developer community.

## 🌟 Features

- **Home Page**: Hero section with featured blogs and recent posts
- **Featured Blogs**: Handpicked content from community experts
- **All Blogs Page**: Complete blog collection with search and filtering
- **Contact Page**: Community engagement and contact information
- **Responsive Design**: Optimized for all devices
- **Google Material Design**: Clean, modern UI following Google's design principles
- **Client-Side Only**: No backend required, perfect for GitHub Pages deployment

## 🚀 Tech Stack

- **Framework**: React.js 18+ with Vite
- **Routing**: React Router DOM
- **Icons**: Lucide React (Google-style icons)
- **Styling**: CSS with Google Material Design principles
- **Date Handling**: date-fns
- **Deployment**: GitHub Pages

## 📦 Installation & Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/gdg-mit-blog.git
   cd gdg-mit-blog
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.jsx      # Navigation header
│   ├── Footer.jsx      # Site footer
│   └── BlogCard.jsx    # Blog post card component
├── pages/              # Page components
│   ├── Home.jsx        # Home page with hero and featured blogs
│   ├── AllBlogs.jsx    # All blogs with search and filtering
│   └── Contact.jsx     # Contact and community info
├── utils/              # Utility functions
│   └── dateUtils.js    # Date formatting utilities
├── App.jsx             # Main app component with routing
└── main.jsx           # Application entry point

public/
├── data/
│   └── blogs.json      # Blog post data
└── images/             # Static images and assets
```

## 🎨 Design System

The application follows Google Material Design principles with:

- **Typography**: Google Sans for headings, Roboto for body text
- **Colors**: Google brand colors (Blue, Red, Yellow, Green)
- **Components**: Material Design inspired cards, buttons, and forms
- **Spacing**: Consistent spacing system using CSS custom properties
- **Shadows**: Layered shadows for depth and hierarchy

## 📝 Content Management

Blog content is managed through JSON files in the `public/data/` directory:

- `blogs.json` - Contains all blog post data including metadata, content, and author information

To add new blog posts, simply update the JSON file with the new blog data following the existing structure.

## 🚀 Deployment

This project is configured for automatic deployment to GitHub Pages:

1. Push your changes to the `main` branch
2. GitHub Actions will automatically build and deploy the site
3. Visit your GitHub Pages URL to see the live site

### Manual Deployment

```bash
npm run build
# Deploy the dist/ folder to your hosting service
```

## 🎯 Key Features

### 🏠 Home Page

- Hero section with call-to-action
- Featured blogs showcase
- Recent posts grid
- Community statistics
- Join community section

### 📚 All Blogs Page

- Search functionality
- Category filtering
- Tag filtering
- Sort options (newest, oldest, title, reading time)
- Responsive grid layout

### 📧 Contact Page

- Contact form with validation
- Community information
- Location details
- Social media links
- Event information

### 📱 Responsive Design

- Mobile-first approach
- Tablet and desktop optimized
- Touch-friendly interface
- Optimized images and loading

## 🤝 Contributing

We welcome contributions from the community! Please feel free to:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 👥 About GDG MIT

Google Developer Groups On Campus at Madras Institute of Technology is a community of developers passionate about Google's developer technologies. We organize workshops, tech talks, and networking events to help students and professionals stay updated with the latest in technology.

- **Location**: MIT Campus, Anna University, Chennai
- **Email**: gdg.mit.chennai@gmail.com
- **Members**: 500+ active developers
- **Events**: 50+ workshops and meetups

---

Made with ❤️ by the GDG MIT Team+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
