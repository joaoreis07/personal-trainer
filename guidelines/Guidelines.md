# Personal Trainer Premium Landing Page - Design Guidelines

## Aesthetic Stance
**Swiss + High-Performance Fitness** — Clean, professional, precision-focused design with bold energy. Dark backgrounds with strategic orange accents create premium appeal and conversion focus.

## Typography
- **Display**: System sans-serif stack (Inter fallback) — clean, modern, professional
- **Body**: Same system stack for cohesion
- **Hierarchy**: Bold display headings, medium weights for subheads, regular for body

## Color Palette

### Core Colors
- **Background**: `#0a0a0a` (deep black)
- **Surface**: `#1a1a1a` (dark gray panels)
- **Primary Action**: `#FF6B35` (vibrant orange — CTAs, accents)
- **Text Primary**: `#f5f5f5` (off-white)
- **Text Secondary**: `#a0a0a0` (medium gray)
- **Border**: `rgba(255, 255, 255, 0.1)` (subtle dividers)

### Usage
- Orange reserved for CTAs, hover states, and conversion elements
- Dark backgrounds throughout for premium feel
- High contrast for readability and accessibility

## Layout Principles
- **Grid**: CSS Grid for section layout, Flexbox for component internals
- **Spacing**: Generous whitespace, consistent vertical rhythm
- **Responsive**: Mobile-first, breakpoint at 1024px
- **Sections**: Full-width sections with contained content (max-width: 1280px)

## Visual Elements
- **Borders**: Hairline rules at 1px, low opacity
- **Radius**: Moderate (0.5rem) for cards and buttons
- **Shadows**: Subtle elevation for cards
- **Images**: High-quality fitness photos, dark overlays when over images
- **Icons**: Lucide React icons in orange or white

## Animation & Interaction
- **Motion**: Smooth scroll-triggered fade-ins using Motion
- **Transitions**: 200-300ms ease for hovers
- **Hover States**: Orange glow on CTAs, subtle scale on cards
- **Focus**: Orange ring at 2px

## Conversion Elements
- **Primary CTA**: Large orange button "Falar no WhatsApp"
- **Secondary CTA**: Outlined orange button "Agendar Avaliação"
- **Social Proof**: Stats, testimonials, before/after prominently displayed
- **Trust Signals**: Certifications, experience, client count

## Accessibility
- **Contrast**: AA compliant (4.5:1 minimum for body text)
- **Interactive**: 3:1 minimum contrast, clear focus states
- **Alt Text**: Descriptive for all images
