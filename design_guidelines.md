# Design Guidelines: Aadarsh Pathre's Futuristic Developer Portfolio

## Design Approach: Cyberpunk-Inspired Glassmorphism

**Selected Approach:** Custom futuristic aesthetic combining glassmorphism with neon accents, inspired by cyberpunk UI design and modern developer portfolios (Vercel, Linear aesthetic foundations with bold neon overlays).

**Core Philosophy:** Create a visually striking, performance-focused portfolio that demonstrates technical prowess through its design while maintaining professional credibility.

---

## Color System

### Dark Theme (Primary)
**Background Layers:**
- Base: `220 15% 8%` (deep blue-black)
- Surface: `220 15% 12%` with glassmorphism overlay
- Elevated: `220 15% 16%` with enhanced glass effect

**Neon Accent Palette:**
- Primary Cyan: `180 100% 50%` (electric cyan - main CTA, links)
- Secondary Purple: `270 80% 60%` (vibrant purple - highlights)
- Tertiary Pink: `320 85% 65%` (neon pink - accents)
- Success Green: `150 75% 55%` (tech badges, success states)

**Gradients:**
- Hero gradient: `from-cyan-500/20 via-purple-500/20 to-pink-500/20`
- Card glow: `from-cyan-500/10 to-purple-500/10`
- Text highlight: `from-cyan-400 to-purple-400`

**Glassmorphism Properties:**
- Background: `bg-white/5` or `bg-black/20`
- Backdrop blur: `backdrop-blur-xl` (24px)
- Border: `border border-white/10`
- Shadow: Neon glow `shadow-[0_0_30px_rgba(34,211,238,0.15)]`

---

## Typography

**Font Families:**
- Primary (UI): Geist Sans (Google Fonts alternative: Inter)
- Monospace: JetBrains Mono (for code, technical details)

**Scale:**
- Hero Title: `text-6xl md:text-7xl lg:text-8xl` (72-96px), gradient text
- Section Headings: `text-4xl md:text-5xl` (48-60px), neon underline glow
- Subsection: `text-2xl md:text-3xl` (32-40px)
- Body: `text-base md:text-lg` (16-18px)
- Small: `text-sm` (14px) for metadata, timestamps

**Treatments:**
- Neon text: Gradient fill with subtle text-shadow glow
- Glowing underlines: Pseudo-element with gradient + blur
- Monospace for: tech stack tags, project metrics, code references

---

## Layout System

**Spacing Primitives:** Tailwind units of 4, 8, 12, 16, 20, 24, 32
- Component padding: `p-4` to `p-8`
- Section spacing: `py-20 md:py-32`
- Grid gaps: `gap-8` to `gap-12`

**Container Strategy:**
- Max width: `max-w-7xl mx-auto px-6 md:px-8`
- Full bleed sections: glassmorphism cards break container edges
- Asymmetric layouts: Stagger project cards, alternate timeline sides

**Grid Patterns:**
- Projects: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Tech stack: `grid-cols-2 md:grid-cols-4 lg:grid-cols-6`
- Timeline: Single column with left/right alternating design

---

## Component Library

### Navigation
**Glassmorphism Navbar:**
- Fixed top, glass background `bg-black/20 backdrop-blur-xl`
- Gradient glow logo with cyan-purple fill
- Nav links with cyan hover glow effect
- Theme toggle (dark/light) with smooth transition
- Smooth scroll behavior to sections

### Hero Section
**Full viewport immersive entry:**
- Large hero image: Abstract tech/AI-themed background (circuit boards, neural networks, holographic interface)
- Glassmorphic overlay card containing:
  - Gradient text name `text-8xl` with neon glow
  - Animated role titles: "AI Engineer • Full-Stack Developer • ML Innovator"
  - Brief tagline with typing animation effect
  - Dual CTA buttons: "View Projects" (solid cyan) + "Download Resume" (outline with blur backdrop)
- Floating particles/grid animation in background
- Scroll indicator with pulsing glow

### About Section
**Profile & Education Cards:**
- Side-by-side layout: Profile photo (left) + Bio content (right)
- Photo frame: Neon border glow rotating gradient
- Education cards: Glass cards with institution logos, gradient borders
- Tech Stack Grid: Icon badges with tooltips, hover glow effects

### Experience Timeline
**Vertical alternating glassmorphic cards:**
- Left-right alternating positioning
- Glass cards with company logos in glowing circles
- Date badges with gradient backgrounds
- Achievement bullets with cyan markers
- Connect cards with glowing vertical line

### Projects Showcase
**Masonry-style grid layout:**
- Project cards: Glass containers with hover lift + glow
- Each card contains:
  - Project thumbnail image with gradient overlay
  - Title with gradient text
  - Tech stack badges (pill-shaped, glass effect)
  - Brief description
  - "View Details" link with arrow icon
- Featured projects get larger card size

### Achievements Section
**Trophy-style layout:**
- Glass cards in 2-column grid
- Icon badges with neon glow (trophy, certificate icons)
- Achievement title with gradient text
- Subtle pulse animation on hover

### Contact Section
**Form in glassmorphic container:**
- Input fields: Glass background, cyan focus glow border
- Placeholder text with reduced opacity
- Submit button: Gradient fill with glow effect
- Social links: Icon buttons with hover scale + glow
- Email/LinkedIn/GitHub icons with neon hover states

### AI Chat Assistant (ChatBubble)
**Floating glassmorphic bubble:**
- Bottom-right corner, gradient border pulse
- Chat icon with notification dot
- Expandable chat window: Glass container, backdrop blur
- Message bubbles: User (cyan) vs AI (purple) differentiation
- Powered by Gemini badge

### Interactive Elements
**Oneko Cat:**
- Pixel art cat following cursor
- Subtle neon outline glow effect

**Back to Top:**
- Glass circle button, bottom-right
- Arrow icon with gradient fill
- Appears on scroll with fade-in

### Footer
**Glass panel at bottom:**
- Three columns: Navigation, Social, Copyright
- Social icons with cyan hover glow
- Subtle gradient top border
- Quick links to all sections

---

## Animations

**Sparingly Applied:**
- Hero text: Gradient shift animation (3s loop)
- Card hover: Lift (translateY -8px) + enhanced glow
- Scroll reveals: Fade-up entrance (intersection observer)
- Typing effect: Role titles in hero
- Particle system: Slow-moving background elements
- NO scroll-triggered parallax or heavy animations

---

## Image Strategy

### Images Required:
1. **Hero Background:** Full-width abstract tech/AI visualization (neural network, holographic UI, or circuit board aesthetic) with dark tones
2. **Project Thumbnails:** Screenshots/mockups for each of 4 featured projects (DIP RAG, Diabetic Retinopathy, Movinglines, CRQUBO)
3. **Company Logos:** i3systems.ai, drone project emblem
4. **Tech Stack Icons:** Python, PyTorch, React, Next.js, AWS, etc. (use icon libraries)
5. **Profile Photo:** Professional headshot with transparent/gradient background

**Placement:**
- Hero: Full-viewport background image with glassmorphic overlay
- Projects: Card thumbnail images with gradient overlays
- About: Profile photo in glowing frame
- Experience: Company logo circles

---

## Responsive Strategy

**Mobile-First Breakpoints:**
- Base: Single column, reduced spacing (`py-12` vs `py-20`)
- md (768px): 2-column grids, larger text scales
- lg (1024px): 3-column grids, full spacing, enhanced effects
- Glass effects: Slightly reduced blur on mobile for performance

**Touch Optimizations:**
- Larger tap targets (min 44px)
- No hover-dependent interactions
- Simplified glassmorphism on mobile (less blur layers)

---

## Accessibility

- Dark mode primary, light mode available via toggle
- Consistent form input styling in both themes
- Sufficient contrast ratios: Neon text on dark meets WCAG AA
- Focus indicators: Cyan glow ring on interactive elements
- Semantic HTML structure for screen readers
- Alt text for all images
- Keyboard navigation support throughout