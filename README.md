# Blissful Events - Professional Wedding Planner Website

A stunning, professional wedding planner website built with React.js featuring a beautiful green and yellow theme palette with real wedding images and comprehensive features.

## 🌟 Key Features

### **Complete Wedding Planning Platform**
- 🎨 **Beautiful Modern UI** - Professional design inspired by top event management websites
- 📸 **Real High-Quality Images** - Powered by Unsplash API for authentic wedding photography
- 💚💛 **Green & Yellow Theme** - Elegant color palette perfect for wedding celebrations
- 📱 **Fully Responsive** - Perfect experience on mobile, tablet, and desktop
- ✨ **Smooth Animations** - Engaging hover effects and transitions throughout

### **Comprehensive Sections**

#### 1. **Hero Section**
- Full-screen background with stunning wedding venue image
- Compelling call-to-action buttons
- Key statistics display (500+ weddings, 4.9/5 rating)
- Smooth parallax scrolling effect

#### 2. **About Section**
- Company story and values
- Professional team showcase
- Key features and benefits
- Live statistics counter
- High-quality imagery

#### 3. **Wedding Packages** (3 Tiers)
- **Silver Package** - ₹2,50,000 (Up to 100 guests)
- **Gold Package** - ₹5,00,000 (Up to 200 guests) ⭐ Most Popular
- **Platinum Package** - ₹10,00,000+ (500+ guests)

Each package includes:
- Professional package images
- Detailed feature lists
- Guest capacity information
- Visual icons and highlights

#### 4. **Gallery Section**
- 9 high-quality wedding images
- Categories: Venue, Traditional, Entertainment, Food, Decoration
- Image overlay effects
- Professional wedding photography showcase

#### 5. **Services Overview**
- 🏡 Garden Venues - Beautiful outdoor settings
- 🎨 Haldi & Mehndi - Traditional ceremony setups
- 🎵 Mahila Sangeet - Grand stage with entertainment
- 🍽️ Catering Services - Multi-cuisine gourmet menu
- 🚪 Grand Entry - Spectacular entrance decorations

#### 6. **Why Choose Us Section**
- 8 compelling reasons with icons
- Professional highlights
- Industry awards and recognition
- Call-to-action banner
- Download brochure option

#### 7. **Testimonials Section**
- 6 authentic client reviews
- 5-star ratings
- Client photos
- Event details and dates
- Professional testimonial cards

#### 8. **Professional Footer**
- Complete contact information
- Quick navigation links
- Social media integration
- Newsletter signup
- Business hours

## 🎯 Services Showcased

### Wedding Planning Services:
1. **Garden Venues** - Lush outdoor settings with scenic beauty
2. **Haldi & Mehndi Setup** - Traditional vibrant decorations
3. **Mahila Sangeet** - Grand stage with professional lighting & sound
4. **Catering Services** - International & Indian cuisine options
5. **Grand Entry** - Spectacular entrance decorations
6. **Photography & Videography** - Professional coverage
7. **Event Coordination** - Full-day management team
8. **Destination Weddings** - Complete planning and coordination

## 🛠️ Technology Stack

- **React.js 18.2** - Modern frontend framework
- **React Icons 4.12** - Comprehensive icon library
- **CSS3** - Custom styling with gradients and animations
- **Google Fonts** - Playfair Display (headings) & Poppins (body)
- **Unsplash API** - High-quality wedding photography

## 📦 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Quick Start

1. **Navigate to project directory:**
```bash
cd /Users/manal/Desktop/eventPlanner/project
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start development server:**
```bash
npm start
```

4. **Open in browser:**
```
http://localhost:3000
```

## 📁 Project Structure

```
project/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js          # Navigation & Logo
│   │   ├── Hero.js            # Landing section
│   │   ├── About.js           # Company info & stats
│   │   ├── Packages.js        # Wedding packages
│   │   ├── Gallery.js         # Photo gallery
│   │   ├── WhyChooseUs.js     # Benefits section
│   │   ├── Testimonials.js    # Client reviews
│   │   └── Footer.js          # Contact & links
│   ├── App.js                 # Main component
│   ├── App.css                # Global styles
│   ├── index.js               # Entry point
│   └── index.css              # CSS variables
├── package.json
├── README.md
└── QUICKSTART.md
```

## 🎨 Color Palette

```css
--primary-green: #2D5016    /* Deep forest green */
--light-green: #4A7C2C      /* Fresh meadow green */
--soft-green: #6B9E4D       /* Sage green */
--pale-green: #E8F5E1       /* Mint cream */
--primary-yellow: #F4D03F   /* Golden yellow */
--soft-yellow: #F9E79F      /* Butter yellow */
--pale-yellow: #FEF9E7      /* Cream */
```

## 📊 Wedding Packages Breakdown

### Silver Package - ₹2,50,000
Perfect for intimate celebrations
- 100 guests capacity
- Garden venue setup
- Basic traditional ceremonies
- 3-course vegetarian catering
- 3 hours coordination

### Gold Package - ₹5,00,000 ⭐ MOST POPULAR
Complete wedding experience
- 200 guests capacity
- Premium venue with landscaping
- Full traditional ceremony setups
- 5-course multi-cuisine catering
- Professional photography (8 hours)
- Live music and entertainment
- Full-day coordination

### Platinum Package - ₹10,00,000+
Ultimate luxury wedding
- 500+ guests capacity
- Luxury resort/destination venue
- Designer theme-based setups
- 7-course gourmet catering
- Cinematic photo & video coverage
- Celebrity performances
- Complete event management team
- Destination wedding coordination
- Pre-wedding photoshoot included

## 🚀 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder ready for deployment.

## 📱 Responsive Design

- **Mobile**: < 576px - Single column, stacked layout
- **Tablet**: 576px - 968px - 2 column grid
- **Desktop**: > 968px - Full multi-column layout
- **Large Desktop**: > 1200px - Maximum width container

## ✨ Key Design Features

1. **Professional Typography** - Playfair Display for elegance, Poppins for readability
2. **Smooth Animations** - CSS transitions and hover effects
3. **Image Optimization** - Lazy loading for better performance
4. **Gradient Backgrounds** - Modern green-yellow gradient themes
5. **Card-Based Layout** - Clean, organized content sections
6. **Icon Integration** - React Icons for visual enhancement
7. **Box Shadows** - Depth and dimension throughout
8. **Sticky Navigation** - Always accessible menu

## 🔧 Customization Guide

### Change Colors
Edit `src/index.css`:
```css
:root {
  --primary-green: #YourColor;
  --primary-yellow: #YourColor;
}
```

### Update Package Details
Edit `src/components/Packages.js`:
- Modify the `packages` array
- Change prices, features, or images

### Change Company Name
Update in:
- `src/components/Header.js`
- `src/components/Footer.js`
- `public/index.html`

### Add More Gallery Images
Edit `src/components/Gallery.js`:
- Add items to `galleryItems` array
- Use Unsplash URLs or your own images

### Modify Testimonials
Edit `src/components/Testimonials.js`:
- Update the `testimonials` array with real client reviews

## 🌐 Image Sources

All images are sourced from [Unsplash](https://unsplash.com), a free high-quality stock photography platform:
- Wedding venues
- Traditional ceremonies (Haldi, Mehndi)
- Sangeet performances
- Catering displays
- Floral arrangements
- Couple photography

## 🎯 Future Enhancements (Backend Integration)

### Phase 2 - MERN Stack Backend:
- [ ] Node.js + Express.js API server
- [ ] MongoDB database integration
- [ ] User authentication system
- [ ] Online booking functionality
- [ ] Payment gateway (Razorpay/Stripe)
- [ ] Admin dashboard
- [ ] Real-time availability checker
- [ ] Email notifications
- [ ] Customer management system
- [ ] Invoice generation
- [ ] Blog/CMS integration

### Phase 3 - Advanced Features:
- [ ] Virtual venue tours (360°)
- [ ] AI-powered package recommendations
- [ ] Live chat support
- [ ] Multi-language support
- [ ] Progressive Web App (PWA)
- [ ] Mobile app development

## 📈 Performance Optimization

- Image lazy loading implemented
- CSS optimized for production
- Component-based architecture
- Minimal external dependencies
- Fast page load times

## 🤝 Contributing

This is a client project. For modifications or improvements, please contact the development team.

## 📄 License

Copyright © 2025 Blissful Events. All rights reserved.

---

## 🎉 Project Stats

- **Total Components**: 8 major sections
- **Total CSS Files**: 8 styled components
- **Package Options**: 3 comprehensive tiers
- **Gallery Images**: 9 professional photos
- **Testimonials**: 6 client reviews
- **Service Categories**: 5 main services
- **Color Scheme**: Green & Yellow theme

---

**Built with ❤️ for creating unforgettable wedding memories**

*Need help? Contact: info@blissfulevents.com | +91 98765 43210*
