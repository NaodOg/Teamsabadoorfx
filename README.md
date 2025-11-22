# Sabador FX

Professional event planning and premium concert equipment rental services with SFX machines, laser systems, and glow gear.

## Features

- Responsive design with mobile-first approach
- Interactive navigation with smooth animations
- Product catalog with multiple categories (SFX Machines, Wristband & Access, GlowGear)
- Booking system with Google Form integration
- Modern UI with gradient effects and animated elements

## Technology Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion (for animations)
- shadcn/ui components
- Lucide React icons

## Project Structure

```
src/
├── app/              # Next.js app router pages
├── components/       # Reusable React components
├── components/ui/    # UI components (buttons, navigation, etc.)
└── lib/              # Utility functions
```

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

## Environment Variables

This project uses the following environment variables (in `.env.local`):

```
# Add any environment variables your project needs
```

## Deployment

This project is optimized for deployment on Vercel:
1. Connect your GitHub repository to Vercel
2. Import your project
3. Vercel will automatically detect the Next.js configuration and build the project

## Key Functionality

- Homepage with animated hero section and booking modal
- Products page with categorized equipment display
- Responsive footer with contact information and social links
- Mobile navigation with hamburger menu
- Contact and about pages

## Custom Components

- Animated hero sections with image marquee
- Product grids with hover effects
- Modal system for booking forms
- Responsive navigation system

## Development Notes

- All styling is done with Tailwind CSS utility classes
- Animations are implemented with Framer Motion
- Component architecture follows best practices for reusability
- Responsive design ensures compatibility across all devices