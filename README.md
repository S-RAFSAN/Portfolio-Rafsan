# Portfolio Website - Sayduzzaman Rafsan

A modern, responsive portfolio website built with React, TypeScript, Tailwind CSS, and Vite.

## 🚀 Features

- **Modern Design**: Eye-catching gradient designs and smooth animations
- **Fully Responsive**: Works perfectly on all devices
- **Dark Theme**: Beautiful dark theme with customizable colors
- **Smooth Scrolling**: Seamless navigation between sections
- **Interactive Components**: Hover effects and animations
- **Contact Form**: Functional contact form (ready for backend integration)
- **SEO Optimized**: Meta tags and semantic HTML

## 🛠️ Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **DaisyUI** - Component library
- **Vite** - Build tool
- **Node.js** - Runtime

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio-rafsan
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

5. Preview production build:
```bash
npm run preview
```

## 🎨 Customization

### Update Your Information

Edit `src/data/portfolio.ts` to update:
- Personal information (name, title, email, etc.)
- About section content
- Skills and experience levels
- Projects portfolio
- Social media links
- Statistics and achievements

### Customize Colors

The portfolio uses DaisyUI themes. Update the theme in `tailwind.config.ts`:

```typescript
daisyui: {
  themes: [
    {
      dark: {
        "primary": "#3b82f6",    // Change primary color
        "secondary": "#8b5cf6",  // Change secondary color
        "accent": "#06b6d4",     // Change accent color
        // ... other colors
      },
    },
  ],
}
```

### Add Your Projects

Update the `projects` array in `src/data/portfolio.ts` with your actual projects:

```typescript
export const projects = [
  {
    title: 'Your Project Title',
    description: 'Project description...',
    technologies: ['React', 'TypeScript', 'Node.js'],
    image: '🛒', // Emoji or image URL
    link: 'https://your-project-demo.com',
    github: 'https://github.com/yourusername/project',
  },
  // Add more projects...
];
```

### Update Contact Information

Update contact details in `src/data/portfolio.ts`:
- Email address
- Phone number
- Location
- Social media links

## 📁 Project Structure

```
portfolio-rafsan/
├── src/
│   ├── components/       # React components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── data/            # Data files
│   │   └── portfolio.ts # Portfolio content
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── public/              # Static assets
├── index.html           # HTML template
├── tailwind.config.ts   # Tailwind configuration
├── vite.config.ts       # Vite configuration
└── package.json         # Dependencies
```

## 🎯 Sections

1. **Hero Section**: Eye-catching landing area with your name and tagline
2. **About Section**: Personal information and statistics
3. **Skills Section**: Technical skills organized by category
4. **Projects Section**: Portfolio of your work
5. **Contact Section**: Contact form and social links
6. **Footer**: Additional links and copyright

## 📝 Notes

- The contact form currently shows an alert. Integrate with your backend or a service like Formspree, EmailJS, or your own API.
- Replace placeholder project information with your actual projects.
- Update social media links with your real profiles.
- Add your own images by replacing emoji placeholders or adding image URLs.

## 🔧 Development

The project uses:
- **Vite** for fast development and building
- **TypeScript** for type safety
- **Tailwind CSS 4** for styling
- **React 19** with modern hooks

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Credits

Built with:
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)
- [Vite](https://vitejs.dev/)

---

Made with ❤️ by Sayduzzaman Rafsan
