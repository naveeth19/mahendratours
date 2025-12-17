# Mahendra Travels Website

A premium, responsive website for Mahendra Travels built with HTML, CSS, and JavaScript.

## Features

- ✨ **Modern Design**: Clean, premium design with glassmorphism effects
- 📱 **Fully Responsive**: Mobile-first approach, works on all devices
- 🎨 **Smooth Animations**: Scroll-triggered animations and transitions
- 🚀 **Fast Performance**: Optimized for speed and SEO
- 🎯 **User-Friendly**: Intuitive navigation and clear call-to-actions

## Project Structure

```
test/
├── index.html          # Main HTML file
├── styles.css          # All styles and design system
├── script.js           # JavaScript for animations and interactivity
├── assets/             # Images and other assets
│   ├── logo-mahendra-travels.png
│   ├── hero-urbania.png
│   ├── fleet-urbania-9.png
│   ├── fleet-urbania-13.png
│   ├── fleet-volvo.png
│   ├── fleet-bus.png
│   └── urbania-feature.png
└── README.md           # This file
```

## Design System

### Colors
- **Primary Gradient**: #0072FF → #00C4B3 → #11C26F
- **Accent**: #95E6A8
- **Text Primary**: #0B1530
- **Text Secondary**: #3C475F

### Typography
- **Font Family**: Inter (Google Fonts)
- **Scale**: Large headings, comfortable body text

### Animations
- Smooth scroll behavior
- Fade-in and slide-up animations
- Parallax effects
- Hover interactions

## Setup Instructions

1. **Add Images**: Place your images in the `assets/` folder:
   - `logo-mahendra-travels.png` - Company logo
   - `hero-urbania.png` - Hero section image
   - `fleet-urbania-9.png` - 9 seater Urbania image
   - `fleet-urbania-13.png` - 13 seater Urbania image
   - `fleet-volvo.png` - Volvo bus image
   - `fleet-bus.png` - Standard bus image
   - `urbania-feature.png` - Urbania features image

2. **Open the Website**: Simply open `index.html` in your web browser, or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (http-server)
   npx http-server
   ```

3. **Customize**: 
   - Update contact information in the contact section
   - Modify colors in `styles.css` (CSS variables at the top)
   - Add/remove fleet items in `index.html`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid, Flexbox, and custom properties
- **JavaScript (ES6+)**: Vanilla JS for animations and interactions
- **Bootstrap 5.3**: For responsive grid and components
- **Font Awesome 6.4**: For icons
- **Google Fonts**: Inter font family

## Features Breakdown

### Navigation
- Sticky navigation bar with glassmorphism effect
- Smooth scroll to sections
- Active link highlighting
- Mobile-responsive hamburger menu

### Hero Section
- Full-screen gradient background
- Animated text and CTAs
- Floating vehicle image with parallax
- Responsive layout

### About Section
- Two-column layout
- Icon grid with hover effects
- Glassmorphism cards

### Fleet Section
- Scroll-triggered animations
- Hover effects on cards
- Responsive grid layout
- Image placeholders with fallbacks

### Contact Section
- Contact form with validation
- Contact information display
- Glassmorphism styling

## Customization

### Changing Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-blue: #0072FF;
    --primary-teal: #00C4B3;
    --primary-green: #11C26F;
    /* ... */
}
```

### Adding New Fleet Items
Copy the fleet item structure in `index.html` and modify:
```html
<div class="col-lg-6 fleet-item" data-animation="slide-left">
    <div class="fleet-card glassmorphism-panel">
        <!-- Your content -->
    </div>
</div>
```

### Modifying Animations
Adjust animation timings in `script.js` or CSS transition durations in `styles.css`.

## Notes

- All images use placeholder URLs as fallbacks if local images are not found
- Form submission is currently simulated (you'll need to connect to a backend)
- All animations are optimized for performance
- The website is SEO-friendly with proper meta tags

## License

This project is created for Mahendra Travels.

---

**Explore. Discover. Journey.** 🚗

