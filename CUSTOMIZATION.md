# Quick Customization Guide

## 📝 Update Your Information

All your personal information is centralized in **`src/data/portfolio.ts`**. Simply edit this file to update:

### Personal Information
```typescript
export const personalInfo = {
  firstName: 'Your First Name',
  lastName: 'Your Last Name',
  title: 'Your Professional Title',
  subtitle: 'Your tagline',
  email: 'your.email@example.com',
  phone: '+1 (555) 123-4567',
  location: 'Your Location',
  // ... more fields
};
```

### About Section
Edit the `about` array to change the paragraphs in your About section:
```typescript
about: [
  "First paragraph about yourself...",
  "Second paragraph...",
  "Third paragraph...",
],
```

### Skills
Update your skills in the `skills` object:
```typescript
skills: {
  frontend: {
    title: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'React', level: 90 },
      { name: 'TypeScript', level: 85 },
      // Add more skills...
    ],
  },
  // ... backend and tools
},
```

### Projects
Update your portfolio projects:
```typescript
export const projects = [
  {
    title: 'Your Project Title',
    description: 'Project description...',
    technologies: ['React', 'Node.js'],
    image: '🛒', // Emoji or use image URL
    link: 'https://your-project-demo.com',
    github: 'https://github.com/yourusername/project',
  },
  // Add more projects...
];
```

### Social Links
Update your social media profiles:
```typescript
socialLinks: {
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourusername',
  twitter: 'https://twitter.com/yourusername',
  instagram: 'https://instagram.com/yourusername',
},
```

## 🎨 Change Colors

Edit `tailwind.config.ts` to change the color scheme:

```typescript
daisyui: {
  themes: [
    {
      dark: {
        "primary": "#3b82f6",    // Your primary color
        "secondary": "#8b5cf6",  // Your secondary color
        "accent": "#06b6d4",     // Your accent color
        // ... other colors
      },
    },
  ],
}
```

## 📸 Add Project Images

Replace emojis with actual images:

1. Place images in `public/` folder
2. Update the `image` field in projects:
```typescript
{
  image: '/project-image.jpg', // Path to image in public folder
  // ... other fields
}
```

## 📧 Set Up Contact Form

The contact form currently shows an alert. To make it functional:

1. **Option 1: Use EmailJS** (Recommended for quick setup)
   - Sign up at https://www.emailjs.com/
   - Install: `npm install @emailjs/browser`
   - Update Contact.tsx to use EmailJS

2. **Option 2: Backend Integration**
   - Create an API endpoint
   - Update the form submission in Contact.tsx

3. **Option 3: Use Formspree**
   - Sign up at https://formspree.io/
   - Update the form action URL

## 🚀 Deploy

### Deploy to Vercel (Recommended)
1. Push your code to GitHub
2. Go to https://vercel.com
3. Import your repository
4. Deploy!

### Deploy to Netlify
1. Push your code to GitHub
2. Go to https://netlify.com
3. Import your repository
4. Build command: `npm run build`
5. Publish directory: `dist`

## ✨ Tips

- Update the meta tags in `index.html` for better SEO
- Add your actual project screenshots
- Customize animations in `src/index.css`
- Test on different screen sizes
- Add Google Analytics if needed

## 📚 Need Help?

- Check the main README.md for more details
- Review the component files to understand the structure
- All components are in `src/components/`
- Styling uses Tailwind CSS classes

