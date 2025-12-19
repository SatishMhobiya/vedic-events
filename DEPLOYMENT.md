# 🚀 Deployment Guide - Blissful Events Website

## Quick Deployment Options

### Option 1: Vercel (Recommended - Easiest)

1. **Install Vercel CLI**
```bash
npm install -g vercel
```

2. **Login to Vercel**
```bash
vercel login
```

3. **Deploy**
```bash
cd /Users/manal/Desktop/eventPlanner/project
vercel
```

4. **Follow prompts**:
   - Set up and deploy? Yes
   - Which scope? Your account
   - Link to existing project? No
   - Project name? wedding-planner
   - Directory? ./
   - Override settings? No

5. **Production Deployment**
```bash
vercel --prod
```

Your site will be live at: `https://wedding-planner-[random].vercel.app`

---

### Option 2: Netlify

1. **Install Netlify CLI**
```bash
npm install -g netlify-cli
```

2. **Build the project**
```bash
npm run build
```

3. **Deploy**
```bash
netlify deploy
```

4. **Production deployment**
```bash
netlify deploy --prod
```

**OR use Netlify Drop:**
- Go to https://app.netlify.com/drop
- Drag and drop the `build` folder
- Instant deployment!

---

### Option 3: GitHub Pages

1. **Install gh-pages**
```bash
npm install --save-dev gh-pages
```

2. **Add to package.json**
```json
{
  "homepage": "https://yourusername.github.io/wedding-planner",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

3. **Deploy**
```bash
npm run deploy
```

---

### Option 4: Firebase Hosting

1. **Install Firebase CLI**
```bash
npm install -g firebase-tools
```

2. **Login**
```bash
firebase login
```

3. **Initialize**
```bash
firebase init hosting
```

4. **Build**
```bash
npm run build
```

5. **Deploy**
```bash
firebase deploy
```

---

## Pre-Deployment Checklist

### ✅ Before Deploying

- [ ] Test locally: `npm start`
- [ ] Build successfully: `npm run build`
- [ ] Check all images load properly
- [ ] Test responsive design on mobile
- [ ] Verify all links work
- [ ] Check all CTAs are functional
- [ ] Test navigation smooth scrolling
- [ ] Verify mobile menu works
- [ ] Check all sections display correctly
- [ ] Test on different browsers

### 🔧 Configuration

1. **Update Contact Information**
   - Edit `src/components/Footer.js`
   - Update phone, email, address

2. **Update Social Media Links**
   - Edit `src/components/Footer.js`
   - Add real social media URLs

3. **Update Meta Tags**
   - Edit `public/index.html`
   - Update title, description, keywords

4. **Add Favicon**
   - Add `favicon.ico` to `public/` folder
   - Update reference in `public/index.html`

---

## Environment Variables (Future)

When adding backend, create `.env` file:

```env
REACT_APP_API_URL=https://your-api-url.com
REACT_APP_RAZORPAY_KEY=your_razorpay_key
REACT_APP_GOOGLE_ANALYTICS=your_ga_id
```

---

## Performance Optimization

### Before Production:

1. **Optimize Images**
```bash
# Install image optimizer
npm install --save-dev imagemin imagemin-webp
```

2. **Enable Compression**
   - Vercel/Netlify do this automatically
   - For custom server, use gzip

3. **Add Analytics**
   - Google Analytics
   - Facebook Pixel
   - Hotjar for heatmaps

4. **SEO Optimization**
   - Add meta descriptions
   - Add Open Graph tags
   - Create sitemap.xml
   - Add robots.txt

---

## Custom Domain Setup

### For Vercel:

1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

### For Netlify:

1. Go to Domain Settings
2. Add custom domain
3. Update DNS:
   ```
   Type: A
   Name: @
   Value: 75.2.60.5
   
   Type: CNAME
   Name: www
   Value: your-site.netlify.app
   ```

---

## SSL Certificate

All modern hosting platforms (Vercel, Netlify, Firebase) provide **FREE SSL certificates** automatically!

Your site will be served over HTTPS by default.

---

## Monitoring & Analytics

### Add Google Analytics

1. Get tracking ID from Google Analytics
2. Add to `public/index.html`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

### Performance Monitoring

- **Google PageSpeed Insights**: https://pagespeed.web.dev/
- **GTmetrix**: https://gtmetrix.com/
- **WebPageTest**: https://www.webpagetest.org/

---

## Continuous Deployment

### GitHub Integration

1. Push code to GitHub
2. Connect repository to Vercel/Netlify
3. Automatic deployments on every push!

```bash
git init
git add .
git commit -m "Initial commit - Wedding Planner Website"
git branch -M main
git remote add origin https://github.com/yourusername/wedding-planner.git
git push -u origin main
```

---

## Troubleshooting

### Build Fails

```bash
# Clear cache and rebuild
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Images Not Loading

- Check Unsplash URLs are accessible
- Verify image paths are correct
- Check CORS settings

### Routing Issues

Add `_redirects` file in `public/` folder:
```
/*    /index.html   200
```

---

## Cost Estimate

### Free Tier Options:
- **Vercel**: Free for personal projects
- **Netlify**: 100GB bandwidth/month free
- **GitHub Pages**: Free for public repos
- **Firebase**: 10GB storage, 360MB/day free

### Paid Hosting (if needed):
- **Vercel Pro**: $20/month
- **Netlify Pro**: $19/month
- **AWS Amplify**: Pay as you go (~$5-20/month)

---

## Post-Deployment Tasks

### ✅ After Deployment:

1. **Test Live Site**
   - [ ] All pages load correctly
   - [ ] Images display properly
   - [ ] Mobile responsive works
   - [ ] Forms submit (when added)
   - [ ] Navigation works

2. **SEO Setup**
   - [ ] Submit sitemap to Google Search Console
   - [ ] Verify site ownership
   - [ ] Add to Bing Webmaster Tools
   - [ ] Set up Google My Business

3. **Marketing**
   - [ ] Share on social media
   - [ ] Update business cards
   - [ ] Email existing clients
   - [ ] Add to wedding directories

4. **Monitoring**
   - [ ] Set up uptime monitoring
   - [ ] Configure error tracking
   - [ ] Enable analytics
   - [ ] Set up email alerts

---

## Support & Maintenance

### Regular Updates:

1. **Weekly**: Check analytics, respond to inquiries
2. **Monthly**: Update testimonials, add new photos
3. **Quarterly**: Review pricing, update packages
4. **Yearly**: Refresh design, update content

### Backup Strategy:

- Code is backed up on GitHub
- Images on Unsplash are always available
- Database backup (when backend is added)

---

## Next Steps (Backend Integration)

When ready to add booking functionality:

1. Set up Node.js + Express backend
2. Configure MongoDB database
3. Add authentication (JWT)
4. Implement payment gateway (Razorpay)
5. Create admin dashboard
6. Add email notifications
7. Build booking management system

---

## Quick Commands Reference

```bash
# Development
npm start                  # Start dev server
npm run build             # Build for production
npm test                  # Run tests

# Deployment
vercel                    # Deploy to Vercel
netlify deploy           # Deploy to Netlify
npm run deploy           # Deploy to GitHub Pages

# Maintenance
npm update               # Update dependencies
npm audit fix            # Fix security issues
```

---

## Resources

- **React Documentation**: https://react.dev/
- **Vercel Docs**: https://vercel.com/docs
- **Netlify Docs**: https://docs.netlify.com/
- **Web.dev**: https://web.dev/ (Performance tips)
- **Unsplash**: https://unsplash.com/ (Free images)

---

**Your website is ready to go live! 🎉**

Choose your preferred hosting platform and deploy in minutes!

Need help? Contact the development team.

