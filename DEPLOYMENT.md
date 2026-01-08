# 🚀 Deployment Guide - Publish Your Portfolio for Free

## Option 1: Vercel (Recommended - Easiest) ⭐

### Prerequisites:
1. Create a GitHub account if you don't have one: https://github.com
2. Install Git if you haven't: https://git-scm.com/downloads

### Steps:

#### Step 1: Push Your Code to GitHub
1. Open terminal/command prompt in your project folder
2. Initialize git (if not already done):
   ```bash
   git init
   ```

3. Create a `.gitignore` file (if not exists) or check it includes:
   ```
   node_modules/
   dist/
   .env
   .env.local
   ```

4. Add all files and commit:
   ```bash
   git add .
   git commit -m "Initial commit - Portfolio website"
   ```

5. Create a new repository on GitHub:
   - Go to https://github.com/new
   - Name it (e.g., `portfolio-website`)
   - Click "Create repository"

6. Push your code:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git
   git branch -M main
   git push -u origin main
   ```
   Replace `YOUR_USERNAME` with your GitHub username.

#### Step 2: Deploy on Vercel
1. Go to https://vercel.com
2. Click "Sign Up" and sign in with your GitHub account
3. Click "Add New..." → "Project"
4. Import your repository (select your portfolio repo)
5. Configure:
   - **Framework Preset**: Vite
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `dist` (auto-detected)
6. Click "Deploy"
7. Wait 1-2 minutes for deployment
8. Your site will be live at: `https://your-project-name.vercel.app`

#### Step 3: Custom Domain (Optional)
- Vercel provides a free subdomain, but you can add a custom domain:
  - Go to your project settings → Domains
  - Add your custom domain

---

## Option 2: Netlify

### Steps:
1. **Push to GitHub** (same as Step 1 above)

2. **Deploy on Netlify**:
   - Go to https://www.netlify.com
   - Click "Sign up" and sign in with GitHub
   - Click "Add new site" → "Import an existing project"
   - Select your GitHub repository
   - Build settings (usually auto-detected):
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"
   - Your site will be live at: `https://random-name.netlify.app`

---

## Option 3: GitHub Pages

### Steps:
1. Install gh-pages package:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Update `package.json`:
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     },
     "homepage": "https://YOUR_USERNAME.github.io/portfolio-website"
   }
   ```

3. Update `vite.config.ts`:
   ```typescript
   export default defineConfig({
     plugins: [react()],
     base: '/portfolio-website/' // Replace with your repo name
   })
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

5. Enable GitHub Pages:
   - Go to your repo → Settings → Pages
   - Source: `gh-pages` branch
   - Your site: `https://YOUR_USERNAME.github.io/portfolio-website`

---

## Option 4: Cloudflare Pages

1. Push to GitHub (same as above)
2. Go to https://pages.cloudflare.com
3. Sign in and connect GitHub
4. Select your repository
5. Build settings:
   - Framework preset: Vite
   - Build command: `npm run build`
   - Build output directory: `dist`
6. Click "Save and Deploy"

---

## 🔧 Important Notes:

### Before Deploying:
- ✅ Update all placeholder links (GitHub, LinkedIn, Facebook) in `src/data/portfolio.ts`
- ✅ Test the build locally: `npm run build`
- ✅ Check `dist` folder is generated correctly

### After Deploying:
- Update your resume/CV with the live URL
- Share the link on social media
- Test all links and forms

### Custom Domain (Optional):
- You can buy a domain from:
  - Namecheap ($10-15/year)
  - Google Domains
  - Cloudflare Registrar
- Connect it in your hosting platform's settings

---

## 🎯 Quick Comparison:

| Platform | Ease | Free Tier | Custom Domain | Best For |
|----------|------|-----------|---------------|----------|
| **Vercel** | ⭐⭐⭐⭐⭐ | Excellent | Yes | React/Vite apps |
| **Netlify** | ⭐⭐⭐⭐ | Excellent | Yes | Static sites |
| **GitHub Pages** | ⭐⭐⭐ | Good | Yes | Simple hosting |
| **Cloudflare Pages** | ⭐⭐⭐⭐ | Excellent | Yes | Fast CDN |

**Recommendation: Use Vercel** - It's the easiest and works perfectly with Vite/React!


