# Quick Start & Deployment Guide

## ⚡ Quick Start

### 1. Installation & Setup (5 minutes)

```bash
# Navigate to project directory
cd d:\COP\Manipal_Jaipur

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will open at `http://localhost:5174/`

### 2. Make Changes

- Edit component files in `src/components/`
- Edit styles in component `.module.css` files
- Save and see changes instantly (HMR)

### 3. Build for Production

```bash
npm run build
```

Output will be in `dist/` folder.

---

## 🚀 Deployment

### Option 1: Deploy to Vercel (Recommended)

1. **Push to GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/manipal-clone.git
git push -u origin main
```

2. **Connect to Vercel:**
   - Go to https://vercel.com/
   - Click "Import Project"
   - Select your GitHub repository
   - Click "Deploy"

3. **Your site is live!** Share the URL provided by Vercel

### Option 2: Deploy to Netlify

1. **Build the project:**
```bash
npm run build
```

2. **Drag and drop `dist/` folder to Netlify.com**
   - Go to https://netlify.com/
   - Drag `dist` folder to the app
   - Your site goes live instantly!

### Option 3: Deploy to GitHub Pages

1. **Update vite.config.js:**
```javascript
export default {
  base: '/manipal-clone/',  // Your repo name
  // ... rest of config
}
```

2. **Deploy:**
```bash
npm run build
npm install -g gh-pages
gh-pages -d dist
```

3. **Enable GitHub Pages:**
   - Go to repo Settings
   - Pages → Source → gh-pages branch
   - Your site is live at `https://yourusername.github.io/manipal-clone/`

### Option 4: Docker Deployment

1. **Create `Dockerfile`:**
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

2. **Build and run:**
```bash
docker build -t manipal-clone .
docker run -p 3000:3000 manipal-clone
```

---

## 📋 Pre-Deployment Checklist

Before going live, verify:

- [ ] All content is correct and updated
- [ ] Images are optimized and loading properly
- [ ] Links are working correctly
- [ ] Forms are submitting (or update to your backend)
- [ ] Mobile responsiveness is perfect
- [ ] No console errors in browser DevTools
- [ ] Meta tags are updated in `index.html`
- [ ] Favicon is set
- [ ] Contact form is configured (if using backend)
- [ ] Google Analytics is added (if desired)

---

## 📱 Responsive Testing

### Test on Different Devices

```bash
# Chrome DevTools shortcuts
F12                    # Open DevTools
Ctrl + Shift + M       # Toggle device toolbar
Ctrl + 0               # Reset zoom
```

### Test Breakpoints

- **Desktop**: 1024px+ (laptop, desktop)
- **Tablet**: 768px - 1023px (iPad, tablets)
- **Mobile**: 480px - 767px (larger phones)
- **Small Mobile**: <480px (iPhone SE, etc.)

---

## 🔒 Environment Variables (if needed later)

Create `.env.local`:

```env
VITE_API_URL=https://api.example.com
VITE_APP_NAME=Manipal University
```

Use in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

---

## 📊 Performance Optimization

### Optimize Images

```bash
npm install -D imagemin
```

### Add Service Worker for PWA

```bash
npm install -D vite-plugin-pwa
```

### Monitor Bundle Size

```bash
npm install -D vite-plugin-visualizer
```

---

## 🔐 Security Best Practices

- [ ] Never commit `.env` files
- [ ] Validate all form inputs
- [ ] Use HTTPS only
- [ ] Add CSRF protection for forms
- [ ] Set proper CORS headers
- [ ] Use Content Security Policy
- [ ] Keep dependencies updated: `npm update`
- [ ] Scan vulnerabilities: `npm audit`

---

## 🐛 Debugging Tips

### Check Errors
```bash
# Open browser console (F12)
# Look for red error messages
```

### Enable Debug Mode
In any component:
```javascript
console.log('Component mounted');
```

### Monitor Network Requests
- Open DevTools → Network tab
- Reload page
- Check for failed requests

### React DevTools
```bash
# Install React DevTools browser extension
# Chrome: React Developer Tools (Chrome Store)
# Firefox: React Browser Addons (Firefox Addons)
```

---

## 📈 SEO Optimization

### Update meta tags in `index.html`:

```html
<meta name="description" content="Join Manipal University's top-ranked online programs...">
<meta name="keywords" content="online degree, MBA, engineering, etc">
<meta property="og:title" content="Online Manipal University">
<meta property="og:description" content="Your university description">
<meta property="og:image" content="https://yoursite.com/og-image.png">
<meta property="og:url" content="https://yoursite.com">
```

### Add sitemap

Create `public/sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yoursite.com/</loc>
    <lastmod>2024-01-01</lastmod>
    <changefreq>weekly</changefreq>
  </url>
</urlset>
```

### Add robots.txt

Create `public/robots.txt`:

```
User-agent: *
Allow: /
Sitemap: https://yoursite.com/sitemap.xml
```

---

## 📊 Analytics Setup

### Add Google Analytics

```jsx
// In main.jsx or App.jsx
import ReactGA from "react-ga4";

ReactGA.initialize("GA_MEASUREMENT_ID");
ReactGA.send({ hitType: "pageview", page: window.location.pathname });
```

---

## 🎯 Common Issues & Solutions

### Issue: Port 5173 already in use

**Solution:**
```bash
npm run dev -- --port 3000
```

### Issue: Module not found error

**Solution:**
```bash
npm install
npm run dev
```

### Issue: Images not showing

**Solution:**
- Check path starts with `/`
- Verify file exists in `public/` folder
- Clear browser cache (Ctrl+Shift+Delete)

### Issue: Styles not applying

**Solution:**
- Check CSS module import
- Clear cache: `npm run build && npm run preview`
- Verify class names match exactly

---

## 💻 Development Workflow

### 1. Daily Development
```bash
npm run dev              # Start dev server
# Make changes
# Test in browser
```

### 2. Before Commit
```bash
npm run build           # Test production build
npm run preview         # Preview build locally
```

### 3. Before Deployment
```bash
npm run build           # Build for production
# Run tests (if any)
# Deploy to your hosting
```

---

## 📞 Support & Resources

### Official Documentation
- [React Docs](https://react.dev)
- [Vite Docs](https://vitejs.dev)
- [CSS Modules](https://github.com/css-modules/css-modules)

### Deployment Platforms
- [Vercel](https://vercel.com) - Recommended
- [Netlify](https://netlify.com)
- [GitHub Pages](https://pages.github.com)
- [Firebase](https://firebase.google.com)
- [AWS Amplify](https://aws.amazon.com/amplify/)

### Learning Resources
- [Frontend Masters](https://frontendmasters.com)
- [egghead.io](https://egghead.io)
- [Web.dev](https://web.dev)

---

## 📝 Version Management

### Update Dependencies Safely

```bash
# Check for updates
npm outdated

# Update all to latest
npm update

# Update specific package
npm install package@latest

# Check for security issues
npm audit
npm audit fix
```

---

## 🚀 Performance Metrics

After deployment, check:

- **Lighthouse Score** - Aim for 90+
- **Core Web Vitals**:
  - LCP (Largest Contentful Paint) < 2.5s
  - FID (First Input Delay) < 100ms
  - CLS (Cumulative Layout Shift) < 0.1

Check with:
- [Google PageSpeed Insights](https://pagespeed.web.dev)
- Chrome DevTools → Lighthouse
- [WebPageTest](https://webpagetest.org)

---

## 🎉 You're Ready!

Your Manipal University website clone is:

✅ Complete and functional
✅ Fully responsive
✅ Ready to customize
✅ Ready to deploy
✅ Production-ready

**Next Steps:**
1. Customize content for your needs
2. Add images and branding
3. Test thoroughly on different devices
4. Deploy to your chosen platform
5. Set up analytics and monitoring

---

## 📧 Need Help?

Check in this order:
1. [CUSTOMIZATION_GUIDE.md](./CUSTOMIZATION_GUIDE.md) - For customization help
2. [README_CLONE.md](./README_CLONE.md) - For project structure
3. [COMPLETION_CHECKLIST.md](./COMPLETION_CHECKLIST.md) - For feature details
4. Official documentation links above
5. Browser console for error messages

---

**Happy Deploying!** 🚀

Last Updated: February 27, 2026
