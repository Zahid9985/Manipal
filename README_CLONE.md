# Manipal University Online - React Clone

A complete, fully responsive React clone of the Manipal University Online admissions website. Built with modern React practices, CSS modules, and a mobile-first responsive design.

## ✨ Features

- **Responsive Design** - Perfectly optimized for desktop, tablet, and mobile devices
- **Functional Components** - Built entirely with React functional components and hooks
- **CSS Modules** - Encapsulated, scoped styling for each component
- **Modern UI** - Clean, professional design with smooth animations and transitions
- **Accessible** - Semantic HTML and ARIA labels for accessibility
- **Performance Optimized** - Lazy loading, optimized re-renders, and CSS animations

## 📁 Project Structure

```
src/
├── components/
│   ├── navbar/              # Navigation bar with mobile menu
│   │   ├── Navbar.jsx
│   │   └── Navbar.module.css
│   ├── hero/                # Hero carousel banner
│   │   ├── HeroBanner.jsx
│   │   └── HeroBanner.module.css
│   ├── ranking/             # Rankings & Accreditation section
│   │   ├── RankingAccreditation.jsx
│   │   └── RankingAccreditation.module.css
│   ├── programs/            # Programs section with carousel
│   │   ├── ProgramsSection.jsx
│   │   ├── ProgramCard.jsx
│   │   ├── ProgramsSection.module.css
│   │   └── ProgramCard.module.css
│   ├── whyChoose/           # Why Choose Us section
│   │   ├── WhyChooseSection.jsx
│   │   └── WhyChooseSection.module.css
│   ├── companies/           # Companies carousel
│   │   ├── CompaniesSection.jsx
│   │   └── CompaniesSection.module.css
│   ├── admission/           # Admission Process section
│   │   ├── AdmissionSection.jsx
│   │   └── AdmissionSection.module.css
│   ├── faq/                 # FAQ section with accordion
│   │   ├── FAQSection.jsx
│   │   ├── FAQItem.jsx
│   │   ├── FAQSection.module.css
│   │   └── FAQItem.module.css
│   ├── contact/             # Contact form section
│   │   ├── ContactSection.jsx
│   │   └── ContactSection.module.css
│   └── footer/              # Footer section
│       ├── Footer.jsx
│       └── Footer.module.css
├── styles/
│   ├── global.css           # Global styles and reset
│   └── variables.css        # CSS custom properties (variables)
├── App.jsx                  # Main App component
├── index.css               # Root CSS imports
└── main.jsx                # React DOM entry point
```

## 🎯 Components Overview

### Navbar
- Sticky navigation with responsive hamburger menu
- Smooth transitions and hover effects
- Mobile-friendly dropdown menu

### Hero Banner
- Auto-rotating carousel (5-second interval)
- Manual navigation with previous/next buttons
- Dot indicators for slide navigation
- Animated text entrance effects

### Ranking & Accreditation
- Grid layout showcasing 6 major accreditations
- NAAC A+, UGC, AICTE, WES, NIRF, QS Ranking
- Hover lift animations
- Responsive grid layout

### Programs Section
- Filterable program cards (All, Bachelors, Masters)
- Displays program duration, fees, and approvals
- Interactive tab filters
- Responsive grid with auto-fit columns

### Why Choose Section
- 4 feature cards with icons
- Certificate showcase section
- Animated entrance effects
- Gradient backgrounds and hover effects

### Companies Section
- Carousel of hiring partner logos
- Interactive grayscale to color transition on hover
- Responsive grid layout

### Admission Process
- 3-step sequential process visualization
- Numbered cards with arrows (desktop only)
- Mobile-responsive layout

### FAQ Section
- Expandable accordion items
- Smooth height animations
- 5 pre-populated FAQ items
- Color change on expansion

### Contact Form
- Email form with validation
- Consent checkbox for GDPR/legal compliance
- WhatsApp contact option
- Success message feedback

### Footer
- Multi-column layout with quick links
- Social media links
- Company information
- Legal links (Privacy, Terms, Cookies)

## 🛠️ Technology Stack

- **React 18** - UI library with hooks
- **Vite** - Fast build tool and dev server
- **CSS Modules** - Scoped styling
- **CSS Custom Properties** - Design tokens and theming

## 📱 Responsive Breakpoints

- **Desktop** - 1024px and above
- **Tablet** - 768px to 1023px
- **Mobile** - Below 768px
- **Small Mobile** - Below 480px

## 🎨 Design System

### Colors
- **Primary**: #1e3a8a (Dark Blue) / #3b82f6 (Light Blue)
- **Secondary**: #0f172a
- **Accent**: #f59e0b (Amber)
- **Text**: #1f2937 (Dark) / #6b7280 (Light)

### Typography
- **Font Family**: System fonts with fallbacks
- **Heading Font**: Segoe UI, Roboto
- **Sizes**: xs (0.75rem) to 5xl (3rem)

### Spacing Scale
- xs: 0.25rem
- sm: 0.5rem
- md: 1rem
- lg: 1.5rem
- xl: 2rem
- 2xl: 3rem
- 3xl: 4rem
- 4xl: 6rem

## 🚀 Getting Started

### Installation

1. Navigate to project directory:
```bash
cd d:\COP\Manipal_Jaipur
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open in browser:
```
http://localhost:5174/
```

### Building for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 💻 Customization Guide

### Changing Colors

Edit `src/styles/variables.css` to change the color scheme:

```css
:root {
  --primary-color: #1e3a8a;
  --primary-light: #3b82f6;
  --accent-color: #f59e0b;
  /* ... other variables */
}
```

### Modifying Content

Each component has sample data. To change it:

1. **Programs**: Edit array in `ProgramsSection.jsx`
2. **Features**: Edit array in `WhyChooseSection.jsx`
3. **FAQs**: Edit array in `FAQSection.jsx`
4. **Companies**: Edit array in `CompaniesSection.jsx`

### Adding More Slides to Hero

Edit the `slides` array in `HeroBanner.jsx`:

```jsx
const slides = [
  {
    title: 'Your Title',
    description: 'Your description',
    cta: 'Button 1',
    ctaSecondary: 'Button 2'
  },
  // Add more slides...
];
```

### Using Real Images

Replace emoji placeholders with actual images:

```jsx
// Instead of:
<div className={styles['program-image']}>📚</div>

// Use:
<img src="/path/to/image.jpg" alt="description" />
```

## 📝 Key Features Implemented

✅ Sticky navbar with mobile hamburger menu
✅ Auto-rotating hero carousel with manual controls
✅ Ranking badges with hover animations
✅ Filterable programs section
✅ Feature cards with animations
✅ Company logos carousel
✅ 3-step admission process
✅ Expandable FAQ accordion
✅ Contact form with validation
✅ Multi-column responsive footer
✅ Fully responsive design (3 breakpoints)
✅ Smooth animations and transitions
✅ CSS modules for isolated styling
✅ Accessibility features (ARIA labels)

## 🔧 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 📄 License

This is a clone project for educational purposes. All designs and content are based on the Manipal University Online website.

## 🤝 Contributing

To customize or extend this project:

1. Create new components in `src/components/`
2. Follow the naming convention: `ComponentName.jsx` + `ComponentName.module.css`
3. Import and use CSS modules for scoped styling
4. Keep responsive design in mind

## 📧 Support

For issues or questions about customization:
- Review the component structure
- Check CSS modules in each component folder
- Refer to the variables.css for design tokens
- Test on multiple device sizes

## 🎓 Learning Resources

This project demonstrates:
- React functional components and hooks
- CSS Modules for component styling
- Responsive design with CSS Grid and Flexbox
- State management with useState
- Event handling and animations
- Component composition and reusability
- Accessibility best practices
