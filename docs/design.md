# Design System — Growth Partners Website

**Project Name:** Growth Partnerz Website  
**Version:** v1.0  
**Prepared by:** IKBI  
**Last Updated:** 2025-07-23

---

## 1. Brand Identity

### Logo
- Full-color and mono variants.
- SVG preferred for web rendering.
- Display on light and dark backgrounds.

### Slogan
> *"Your Vision. Our Strategy."*

---

## 2. Color Palette

| Purpose            | Color                     | HEX         |
|--------------------|---------------------------|-------------|
| Brand Primary      | Electric Purple           | `#A42BF5`   |
| Accent Gradient A  | Neon Pink                 | `#F72585`   |
| Accent Gradient B  | Indigo/Blue Tint          | `#4361EE`   |
| Background Dark    | Midnight Navy             | `#0C0C1E`   |
| Background Light   | White                     | `#FFFFFF`   |
| Card Background    | Semi-transparent Glass    | `rgba(255,255,255,0.05)` |
| Text Primary       | White                     | `#FFFFFF`   |
| Text Secondary     | Light Grey                | `#CCCCCC`   |
| CTA Hover          | Bright Purple Glow        | `#D946EF`   |

---

## 3. Typography

| Use Case         | Font      | Weight   | Style     |
|------------------|-----------|----------|-----------|
| Headings         | Poppins   | 600–700  | All caps optional |
| Body Text        | Inter     | 400–500  | Clean, modern |
| CTAs / Buttons   | Poppins   | 600      | All caps |

- Font sizes are responsive using Tailwind's `text-sm`, `text-lg`, `text-xl`, `text-2xl`, `text-4xl`, etc.
- Line height and letter spacing set with Tailwind defaults, adjusted for readability on dark backgrounds.

---

## 4. Layout & Structure

### Page Width
- Max width: `1280px`
- Gutter padding: `px-6 md:px-12`

### Grid System
- Tailwind-based responsive grid (`grid-cols-1`, `grid-cols-2`, `md:grid-cols-3` etc.)
- Flex layouts for hero banners and CTA sections

### Section Spacing
- Top/bottom margin: `my-20` (adjusted per screen size)
- Use consistent `SectionWrapper` with `id` anchors for scroll nav

---

## 5. Glassmorphism Style

### Effects
- `backdrop-blur-md`
- `bg-white/5` or `bg-white/10`
- Rounded corners: `rounded-2xl`
- Inner shadows or borders: `border-white/10` optional
- Hover/active glow: `ring-1 ring-fuchsia-500/40`

### Use Cases
- Cards
- Testimonial boxes
- CTA banners
- Metric counters

---

## 6. Buttons

### Primary Button
- `bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500`
- `text-white font-semibold px-6 py-3 rounded-full`
- `transition hover:scale-105 hover:shadow-lg`

### Secondary Button
- `border border-white/20 bg-white/5`
- `text-white font-medium rounded-full px-5 py-2`

---

## 7. Components (Reusable Style Guide)

| Component        | Notes |
|------------------|-------|
| `HeroBanner`     | Full-width with gradient, large text, CTA |
| `CTASection`     | Gradient background with strong call to action |
| `TestimonialCard`| Card with quote, avatar, subtle blur |
| `ServiceCard`    | Glass card, icon, headline, short copy |
| `SectionTitle`   | Title + subtitle component with centered or left alignment |
| `IconBulletList` | Used for service features, highlights |
| `FormField`      | White text, label above, focus ring in purple |
| `AccordionItem`  | FAQ collapsible, subtle animation on expand |

---

## 8. Responsive Design

- Mobile-first layout using Tailwind breakpoints
- Sticky nav on desktop, collapsible menu on mobile
- Stacked sections on small screens (`flex-col`) and horizontal split on large screens (`flex-row`)
- All sections tested at:
  - `sm`: 375px
  - `md`: 768px
  - `lg`: 1024px
  - `xl`: 1280px+

---

## 9. Accessibility & UX Guidelines

- Contrast: All text passes WCAG AA minimum on dark backgrounds
- Interactive elements: All buttons and links keyboard accessible
- Animations: Smooth transitions, disabled for users with `prefers-reduced-motion`
- Alt text: Required for all images
- Headings: Semantic structure using `h1` → `h2` → `h3`

---

## 10. Imagery & Media

- Format: Optimized `.webp` or `.svg`
- Size: Keep hero backgrounds <300KB
- Animation: Subtle Lottie or GIF (looping, muted, non-distracting)
- Photos: Professional, diverse, inclusive (use Unsplash, Pexels as placeholders)

---

## 11. Icons

- Source: Lucide or Heroicons
- Line icons preferred
- Color: White or light grey
- Use consistent sizing: `w-6 h-6` or `w-8 h-8`

---

## 12. Theming with Tailwind

Example tailwind.config.js extensions:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#A42BF5',
          accent: '#F72585',
          background: '#0C0C1E',
        }
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
};
