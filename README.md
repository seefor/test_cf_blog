# Modern SEO-Optimized Blog

A lightning-fast, SEO-optimized blog built with Astro and deployed on Cloudflare Pages. Features modern web development practices, excellent performance scores, and a seamless content management workflow.

## 🚀 Features

- **Lightning Fast**: Built with Astro for optimal performance
- **SEO Optimized**: Complete meta tags, structured data, and sitemap generation
- **Modern Design**: Responsive, accessible, and beautiful UI with dark/light mode
- **Developer Experience**: TypeScript, Tailwind CSS, and hot reloading
- **Content Management**: Markdown-based posts with frontmatter
- **Search & Filter**: Client-side search and tag filtering
- **RSS Feed**: Automatic RSS feed generation
- **Performance**: Lighthouse scores 90+ across all metrics
- **Deployment**: Automated CI/CD with GitHub Actions to Cloudflare Pages

## 📊 Performance Goals

- **Lighthouse Performance**: 90+
- **First Contentful Paint**: <1.5s
- **Largest Contentful Paint**: <2.5s
- **Cumulative Layout Shift**: <0.1
- **Time to Interactive**: <3s

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Deployment**: [Cloudflare Pages](https://pages.cloudflare.com/)
- **CI/CD**: GitHub Actions
- **Performance**: Lighthouse CI
- **Content**: Markdown with frontmatter

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git
- GitHub account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/seefor/cf_blog.git
   cd cf_blog
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up GitHub Discussions for comments**
   - Go to your repository Settings → Features
   - Enable "Discussions" ✅
   - Install Giscus app: https://github.com/apps/giscus
   - Configure at https://giscus.app and update `src/components/Comments.astro`

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:4321`

### Build for Production

```bash
npm run build
npm run preview
```

## 📝 Content Management

### Adding a New Blog Post

1. **Create a new Markdown file** in `src/content/blog/`
   ```bash
   touch src/content/blog/my-new-post.md
   ```

2. **Add frontmatter and content**
   ```markdown
   ---
   title: 'Your Post Title'
   description: 'A brief description of your post'
   pubDate: 2024-01-15
   author: 'Your Name'
   tags: ['tag1', 'tag2', 'tag3']
   featured: false
   draft: false
   image: '/blog/post-image.jpg'
   ---

   Your post content goes here...
   ```

3. **Commit and push**
   ```bash
   git add .
   git commit -m "Add new blog post: Your Post Title"
   git push
   ```

### Frontmatter Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | ✅ | Post title |
| `description` | string | ✅ | Meta description |
| `pubDate` | date | ✅ | Publication date |
| `author` | string | ✅ | Author name |
| `tags` | array | ❌ | Post tags |
| `featured` | boolean | ❌ | Featured post flag |
| `draft` | boolean | ❌ | Draft status |
| `image` | string | ❌ | Social share image |
| `updatedDate` | date | ❌ | Last updated date |

## 🚀 Deployment

### Method 1: Direct Cloudflare Pages (Recommended)

1. **Push to GitHub**: Commit and push your code to GitHub
2. **Connect to Cloudflare Pages**:
   - Go to [Cloudflare Pages](https://pages.cloudflare.com/)
   - Click "Create a project" → "Connect to Git"
   - Select your repository
3. **Configure build settings**:
   - Framework preset: `Astro`
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Root directory: `/` (leave empty)
4. **Deploy**: Click "Save and Deploy"

### Method 2: GitHub Actions (Advanced)

1. **Get Cloudflare credentials**:
   - API Token: Cloudflare Dashboard → My Profile → API Tokens → Create Token
   - Account ID: Cloudflare Dashboard → Right sidebar

2. **Add GitHub repository secrets**:
   - `CLOUDFLARE_API_TOKEN`: Your API token
   - `CLOUDFLARE_ACCOUNT_ID`: Your account ID
   - `LHCI_GITHUB_APP_TOKEN`: Lighthouse CI token (optional)

3. **Update workflow**: Edit `.github/workflows/deploy.yml` and change `projectName: your-blog` to your actual project name

4. **Push to main branch** to trigger deployment

### Environment Variables (Optional)

Add these in Cloudflare Pages → Settings → Environment variables:
```
NODE_VERSION=18
ASTRO_TELEMETRY_DISABLED=1
```

### Custom Domain Setup

1. **Add domain**: Cloudflare Pages → Custom domains → Set up a custom domain
2. **Update site URL**: Edit `astro.config.mjs`:
   ```javascript
   export default defineConfig({
     site: 'https://yourdomain.com',
     // ... other config
   });
   ```
3. **Update DNS**: Follow Cloudflare's DNS instructions

### Comments Setup

Comments are powered by GitHub Discussions and are required for full functionality:

1. **Enable GitHub Discussions**: Repository Settings → Features → Discussions ✅
2. **Install Giscus**: Visit https://github.com/apps/giscus and install for your repository
3. **Configure**: Go to https://giscus.app and get your configuration values
4. **Update**: Edit `src/components/Comments.astro` with your actual values:
   ```javascript
   const REPO = "your-username/your-repo";
   const REPO_ID = "your-repo-id";
   const CATEGORY = "General";
   const CATEGORY_ID = "your-category-id";
   ```

## 🎨 Customization

### Branding

1. **Update site information** in:
   - `src/layouts/Layout.astro`
   - `src/components/Header.astro`
   - `src/components/Footer.astro`
   - `astro.config.mjs`

2. **Replace favicon** in `public/favicon.svg`

3. **Customize colors**: The blog uses a centralized color system for easy theming:
   - **Quick changes**: Edit `src/config/theme.js` to modify all colors at once
   - **Advanced**: Edit `src/styles/colors.css` for fine-grained control
   - **Semantic classes**: Use `bg-primary`, `text-secondary`, `border-DEFAULT` instead of hardcoded Tailwind colors
   - Colors automatically adapt for light/dark modes

### Adding New Pages

1. **Create a new `.astro` file** in `src/pages/`
2. **Use the Layout component**:
   ```astro
   ---
   import Layout from '../layouts/Layout.astro';
   import Header from '../components/Header.astro';
   import Footer from '../components/Footer.astro';
   ---

   <Layout title="Page Title" description="Page description">
     <Header />
     <main>
       <!-- Your content -->
     </main>
     <Footer />
   </Layout>
   ```

## 📈 SEO Features

### Automatic SEO Optimization

- ✅ Meta tags (title, description, Open Graph, Twitter Cards)
- ✅ Structured data (JSON-LD schema markup)
- ✅ Canonical URLs
- ✅ XML sitemap generation
- ✅ RSS feed
- ✅ Robots.txt
- ✅ Performance optimization
- ✅ Mobile responsiveness
- ✅ Accessibility compliance

### Manual SEO Optimization

1. **Optimize images**: Use WebP format and include alt text
2. **Write good meta descriptions**: Keep under 160 characters
3. **Use proper heading hierarchy**: H1 → H2 → H3
4. **Internal linking**: Link to related posts
5. **External links**: Use `rel="noopener noreferrer"`

## 🔧 Development

### Project Structure

```
cf_blog/
├── src/
│   ├── components/          # Reusable components
│   ├── content/
│   │   └── blog/           # Blog posts (Markdown)
│   ├── layouts/            # Page layouts
│   └── pages/              # Routes and pages
├── public/                 # Static assets
├── .github/
│   └── workflows/          # GitHub Actions
└── package.json
```

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run astro        # Run Astro CLI commands
```

### Adding Dependencies

```bash
# Add a new dependency
npm install package-name

# Add a dev dependency
npm install -D package-name
```

## 🐛 Troubleshooting

### Common Issues

1. **Build fails**: Check Node.js version (requires 18+)
2. **Images not loading**: Ensure images are in `public/` directory
3. **Styles not applying**: Check Tailwind CSS configuration
4. **404 on deployment**: Verify build output directory is `dist`

### Performance Issues

1. **Run Lighthouse audit**: `npm run build && npm run preview`
2. **Check bundle size**: Use browser dev tools
3. **Optimize images**: Use modern formats (WebP, AVIF)
4. **Review Core Web Vitals**: Monitor real user metrics

## 📚 Resources

- [Astro Documentation](https://docs.astro.build/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Web.dev Performance Guide](https://web.dev/performance/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Astro](https://astro.build/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Deployed on [Cloudflare Pages](https://pages.cloudflare.com/)
- Icons from [Heroicons](https://heroicons.com/)

---

**Ready to start blogging?** 🚀

1. Customize the branding and content
2. Add your first blog post
3. Deploy to Cloudflare Pages
4. Share your amazing content with the world!

For questions or support, please [open an issue](https://github.com/your-username/your-repo/issues) or [contact us](/contact).
