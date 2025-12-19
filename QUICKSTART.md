# Quick Start Guide 🚀

## Getting Started in 3 Easy Steps

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start Development Server
```bash
npm start
```

### Step 3: View in Browser
The application will automatically open at `http://localhost:3000`

---

## What You'll See

✅ **Professional Header** - Sticky navigation with smooth scrolling
✅ **Hero Section** - Full-screen background with stunning wedding venue
✅ **About Section** - Company story with statistics counter
✅ **Wedding Packages** - Three comprehensive packages with real images
✅ **Gallery Section** - 9 professional wedding photos
✅ **Why Choose Us** - 8 compelling reasons with CTA banner
✅ **Testimonials** - 6 authentic client reviews with photos
✅ **Footer** - Complete contact information and social links

---

## Key Features of Your Website

### 🎨 Design Highlights
- **Green & Yellow Theme** - Professional wedding color palette
- **Responsive Design** - Perfect on mobile, tablet, and desktop
- **Smooth Animations** - Engaging hover effects and transitions
- **Modern Fonts** - Playfair Display for headings, Poppins for body

### 📦 Package Tiers
1. **Silver** - ₹2,50,000 (100 guests)
2. **Gold** - ₹5,00,000 (200 guests) ⭐ Most Popular
3. **Platinum** - ₹10,00,000+ (500+ guests)

### 🎯 Services Showcased
- Garden Venues with lush greenery
- Haldi & Mehndi traditional setups
- Mahila Sangeet with grand stage
- Premium catering services
- Grand entry decorations

---

## Customization Tips

### Change Colors
Edit `src/index.css` and modify CSS variables:
```css
:root {
  --primary-green: #2D5016;
  --primary-yellow: #F4D03F;
  /* ... other colors */
}
```

### Update Package Prices
Edit `src/components/Packages.js` in the `packages` array

### Modify Services
Edit `src/components/Packages.js` in the `services` array

### Change Company Name
Update "Blissful Events" in:
- `src/components/Header.js`
- `src/components/Footer.js`
- `public/index.html` (title tag)

---

## Next Steps for Full MERN Stack

When ready to add backend:
1. Create Express.js server
2. Set up MongoDB database
3. Create booking API endpoints
4. Add user authentication
5. Implement payment gateway
6. Build admin dashboard

---

## Troubleshooting

**Port already in use?**
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

**Module not found?**
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

---

## Support

Need help? Check the README.md for detailed documentation.

**Happy Wedding Planning! 💚💛**

