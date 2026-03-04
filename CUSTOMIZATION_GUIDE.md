# Customization Guide - Manipal University React Clone

This guide shows you how to customize every aspect of the Manipal University website clone.

## 📝 Table of Contents

1. [Changing Colors](#changing-colors)
2. [Modifying Content](#modifying-content)
3. [Adding/Removing Sections](#addingremoving-sections)
4. [Customizing Components](#customizing-components)
5. [Working with Images](#working-with-images)
6. [Advanced Customization](#advanced-customization)

---

## 🎨 Changing Colors

### Using CSS Variables

All colors are stored in `src/styles/variables.css`. Update them globally:

```css
:root {
  /* Colors */
  --primary-color: #1e3a8a;      /* Dark blue - headings, borders */
  --primary-light: #3b82f6;      /* Light blue - buttons, links */
  --primary-dark: #1e40af;       /* Darker blue - hover states */
  --secondary-color: #0f172a;    /* Very dark - footer background */
  --accent-color: #f59e0b;       /* Amber - CTA buttons */
  --success-color: #10b981;      /* Green - success messages */
  --error-color: #ef4444;        /* Red - error messages */
  
  --text-primary: #1f2937;       /* Dark text */
  --text-secondary: #6b7280;     /* Medium text */
  --text-light: #9ca3af;         /* Light text */
  --text-white: #ffffff;         /* White text */
  
  --bg-primary: #ffffff;         /* White background */
  --bg-secondary: #f9fafb;       /* Light gray */
  --bg-tertiary: #f3f4f6;        /* Medium gray */
  --border-color: #e5e7eb;       /* Borders */
}
```

### Example: Change Primary Color from Blue to Red

1. Open `src/styles/variables.css`
2. Find the color variables section
3. Change:
```css
--primary-color: #a4161a;      /* Red */
--primary-light: #dc2626;      /* Light red */
--primary-dark: #7f1d1d;       /* Dark red */
```

All linked colors will automatically update throughout the site!

---

## 📄 Modifying Content

### 1. Change Navbar Links

**File**: `src/components/navbar/Navbar.jsx`

```jsx
<ul className={`${styles['navbar-menu']} ${isMenuOpen ? styles.open : ''}`}>
  <li className={styles['navbar-menu-item']}>
    <a href="#programs" className={styles['navbar-menu-link']}>
      Programs  {/* Change this text */}
    </a>
  </li>
  {/* Add or remove menu items */}
</ul>
```

### 2. Update Hero Banner Slides

**File**: `src/components/hero/HeroBanner.jsx`

```jsx
const slides = [
  {
    title: 'Your New Title Here',
    description: 'Your new description here',
    cta: 'Button 1 Text',
    ctaSecondary: 'Button 2 Text'
  },
  {
    title: 'Second Slide',
    description: 'Description for slide 2',
    cta: 'CTA Text',
    ctaSecondary: 'Secondary CTA'
  },
  // Add more slides as needed
];
```

### 3. Update Programs List

**File**: `src/components/programs/ProgramsSection.jsx`

```jsx
const programs = [
  {
    id: 1,
    title: 'Master of Business Administration',
    duration: '2 Years',
    fee: 'INR 1,75,000',
    approved: 'UGC, NIRF, AICTE',
    icon: '💼',
    category: 'masters'
  },
  // Add more programs or modify existing ones
];
```

**Available categories**: `'bachelors'` or `'masters'`

### 4. Update Why Choose Features

**File**: `src/components/whyChoose/WhyChooseSection.jsx`

```jsx
const features = [
  {
    title: 'Feature Title',
    description: 'Feature description text',
    icon: '🎓'
  },
  // Add/modify features
];
```

### 5. Update Companies List

**File**: `src/components/companies/CompaniesSection.jsx`

```jsx
const companies = [
  { name: 'Google', icon: 'G' },
  { name: 'Amazon', icon: 'A' },
  // Add more companies
];
```

### 6. Update FAQ Items

**File**: `src/components/faq/FAQSection.jsx`

```jsx
const faqData = [
  {
    question: 'Your question here?',
    answer: 'Your detailed answer here.'
  },
  {
    question: 'Another question?',
    answer: 'Another answer.'
  },
  // Add more FAQ items
];
```

### 7. Update Footer Links

**File**: `src/components/footer/Footer.jsx`

```jsx
<div className={styles['footer-section']}>
  <h3>Quick Links</h3>
  <ul>
    <li><a href="#programs">Your Link 1</a></li>
    <li><a href="#other">Your Link 2</a></li>
    {/* Add/modify footer links */}
  </ul>
</div>
```

---

## ➕ Adding/Removing Sections

### Add a New Section

1. **Create component folder:**
```bash
mkdir src/components/yourSection
```

2. **Create component files:**
- `YourSection.jsx` (React component)
- `YourSection.module.css` (Styles)

3. **Import in App.jsx:**
```jsx
import YourSection from './components/yourSection/YourSection';

function App() {
  return (
    <>
      <Navbar />
      <HeroBanner />
      {/* ... other components */}
      <YourSection />  {/* Add your component */}
      <Footer />
    </>
  );
}
```

### Remove a Section

1. Delete the component folder from `src/components/`
2. Remove the import from `App.jsx`
3. Remove the component from the return JSX

---

## 🎯 Customizing Components

### Change Button Text

Search for the button text in any component and replace:

```jsx
<button className={styles['btn-primary']}>
  Apply Now  {/* Change this */}
</button>
```

### Modify Component Styling

Edit the corresponding `.module.css` file:

```css
.button-name {
  background-color: var(--primary-light);
  padding: var(--spacing-md) var(--spacing-lg);
  /* Customize as needed */
}
```

### Change Animation Speed

Update the timing in variables or component CSS:

```css
--transition-fast: 150ms;   /* 100-200ms */
--transition-base: 200ms;   /* 200-300ms */
--transition-slow: 300ms;   /* 300-500ms */
```

### Modify Grid/Layout

In component CSS, adjust grid properties:

```css
.grid {
  grid-template-columns: repeat(4, 1fr);  /* 4 columns */
  gap: var(--spacing-2xl);
}

@media (max-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);  /* 2 columns on tablet */
  }
}
```

---

## 🖼️ Working with Images

### Replace Emoji with Real Images

1. **Add images to `public/` folder:**
```
public/
├── images/
│   ├── program-mba.jpg
│   ├── company-logo-1.png
│   └── ...
```

2. **Update component to use images:**

```jsx
// Instead of:
<div className={styles['program-image']}>💼</div>

// Use:
<img 
  src="/images/program-mba.jpg" 
  alt="MBA Program" 
  className={styles['program-image']} 
/>
```

3. **Update CSS if needed:**
```css
.program-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

### Add Banner Images

For the hero carousel:

```jsx
// In HeroBanner.jsx, update slides with image URLs:
const slides = [
  {
    title: 'Title',
    description: 'Description',
    image: '/images/banner-1.jpg',  // Add image path
    cta: 'Apply',
    ctaSecondary: 'Learn'
  }
];

// In the JSX, add image:
<div className={styles['carousel-slide']}>
  <img src={slide.image} alt="Banner" />
  <div className={styles['carousel-content']}>
    {/* content */}
  </div>
</div>
```

---

## 🚀 Advanced Customization

### Add External Links to Buttons

```jsx
<a href="https://example.com" className={styles['button']}>
  Click Here
</a>
```

### Style Buttons Differently

Create new CSS classes in component.module.css:

```css
.btn-success {
  background-color: var(--success-color);
}

.btn-outline {
  background-color: transparent;
  border: 2px solid var(--primary-light);
  color: var(--primary-light);
}
```

### Add Icons Using Icon Library

1. Install icon library:
```bash
npm install react-icons
```

2. Use in components:
```jsx
import { FaGraduationCap } from 'react-icons/fa';

// In component:
<FaGraduationCap size={40} color="#3b82f6" />
```

### Integrate with API

Replace hardcoded data with API calls:

```jsx
import { useState, useEffect } from 'react';

export default function Component() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/programs')
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      {data.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}
```

### Add Form Submission

Update the contact form to submit data:

```jsx
const handleSubmit = async (e) => {
  e.preventDefault();
  
  await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });
  
  setSubmitted(true);
};
```

### Create New Pages with React Router

1. Install React Router:
```bash
npm install react-router-dom
```

2. Update App.jsx:
```jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Programs from './pages/Programs';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<Programs />} />
      </Routes>
      <Footer />
    </Router>
  );
}
```

---

## 🔍 Common Customization Tasks

### Task 1: Change University Name

1. Update `Navbar.jsx`:
```jsx
<span>Your University Name</span>
```

2. Update `Footer.jsx`:
```jsx
<span>Your University Name</span>
```

3. Update meta tags in `index.html`

### Task 2: Add Dark Mode

1. Add CSS:
```css
html.dark-mode {
  --primary-color: #60a5fa;
  --bg-primary: #1f2937;
  --text-primary: #f3f4f6;
}
```

2. Add toggle in Navbar

### Task 3: Change Logo

Replace the "M" icon with your logo:

```jsx
// In Navbar.jsx and Footer.jsx
<div className={styles['logo-icon']}>
  <img src="/logo.png" alt="Logo" width="35" height="35" />
</div>
```

### Task 4: Add Multiple Languages

Use i18n library:

```bash
npm install i18next react-i18next
```

Then wrap your app and use translation keys.

---

## 📚 Best Practices

✅ **DO:**
- Use CSS variables for theming
- Keep component logic separate from styling
- Test responsive design on mobile devices
- Use semantic HTML
- Add proper alt text to images

❌ **DON'T:**
- Use hard-coded colors (use variables)
- Add inline styles (use CSS modules)
- Skip responsive design testing
- Remove accessibility features
- Use multiple color schemes

---

## 🆘 Troubleshooting

### Section not showing?
- Check import in `App.jsx`
- Verify component is added to return statement
- Check for JavaScript errors in console

### Styling not applied?
- Verify CSS module is imported
- Check class name spelling
- Ensure media queries are correct
- Clear browser cache

### Images not loading?
- Check file path starts with `/`
- Verify file exists in `public/` folder
- Check file name case sensitivity
- Use correct image format

---

## 💡 Tips

1. Use the browser DevTools to inspect elements
2. Test on multiple devices using device emulation
3. Keep variables organized in variables.css
4. Comment your code for clarity
5. Use consistent naming conventions
6. Test form submission before deploying

---

**Happy Customizing!** 🎉
