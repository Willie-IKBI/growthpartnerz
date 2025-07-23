# 📋 TASKS — Growth Partnerz Website

**Project:** Growth Partnerz Website  
**Owner:** IKBI  
**Start Date:** 2025-07-23  
**Target Completion:** TBD  

---

## 🧠 1. PLANNING & SETUP

- [x] Finalize `prd.md`
- [x] Define full `site-map.md`
- [x] Define `component-inventory.md`
- [x] Create `design.md`
- [ ] Define tech stack and deployment plan
- [ ] Set up GitHub repository
- [ ] Create project board (e.g., GitHub Projects, Notion, Trello)
- [ ] Add Kanban statuses: Backlog / In Progress / Review / Done

---

## 🎨 2. DESIGN SYSTEM & THEME

- [x] Define brand colors and typography
- [x] Confirm layout grid system
- [x] Document glassmorphism styles
- [x] Specify component behavior (hover, states, breakpoints)
- [x] Generate tailwind.config.js theme extension
- [ ] Export style tokens (if using Figma tokens plugin)
- [ ] Finalize reusable component patterns

---

## ⚙️ 3. PROJECT SCAFFOLDING

- [x] Initialize Node.js project (npm init)
- [x] Create recommended folder structure
- [x] Install Tailwind CSS
- [ ] Install ShadCN or custom UI library
- [ ] Setup Prettier + ESLint + Git hooks
- [ ] Add base routing for pages
- [ ] Set up global layout and `PageWrapper`
- [x] Configure `tailwind.config.js` and global `theme.css` (globals.css)
- [x] Add postcss.config.js (manual creation due to npx error)
- [ ] Add placeholder assets (logo, favicons, OG image)

---

## 🧩 4. COMPONENT DEVELOPMENT

### Global
- [ ] HeaderNav (responsive)
- [ ] Footer (with links, socials)
- [ ] PageWrapper
- [ ] SectionWrapper
- [ ] SectionTitle
- [ ] CTASection
- [ ] ButtonPrimary / ButtonSecondary

### Shared
- [ ] CardGlass
- [ ] TestimonialCard
- [ ] ServiceCard
- [ ] Accordion (FAQ)
- [ ] FormField
- [ ] Modal / Toast

---

## 🏗️ 5. PAGE DEVELOPMENT

- [ ] `/` Home
- [ ] `/about` Who We Are
- [ ] `/services` What We Do
- [ ] `/cases` Case Studies
- [ ] `/portfolio` Portfolio
- [ ] `/blog` Blog Index
- [ ] `/blog/:slug` Blog Post
- [ ] `/faq`
- [ ] `/contact`
- [ ] `/privacy-policy`
- [ ] `/terms`
- [ ] `/404`
- [ ] `/thank-you`

### Services (Child Pages)
- [ ] `/services/ecommerce`
- [ ] `/services/website-development`
- [ ] `/services/mobile-app-development`
- [ ] `/services/web-app-development`

---

## 🔌 6. INTEGRATIONS

- [ ] Add SEO meta support (Next SEO / head)
- [ ] Setup contact form endpoint (Formspree, Vercel API route, or Resend)
- [ ] (Optional) Setup CMS (Sanity or Markdown)
- [ ] (Optional) Add analytics (Plausible or GA)
- [ ] (Optional) Add live chat (Crisp or Tawk.to)
- [ ] (Optional) Newsletter integration (ConvertKit or Mailchimp)

---

## 📱 7. RESPONSIVENESS & ACCESSIBILITY

- [ ] Test mobile responsiveness
- [ ] Fix layout issues at sm/md/lg breakpoints
- [ ] Verify color contrast & keyboard navigation
- [ ] Add alt text to all images
- [ ] Add focus states to all interactive elements

---

## 🚀 8. DEPLOYMENT

- [ ] Push to GitHub main branch
- [ ] Connect GitHub to Vercel
- [ ] Set up production deployment on Vercel
- [ ] Configure domain (growthpartners.co.za or similar)
- [ ] Add `robots.txt`, `sitemap.xml`, and `OG` tags
- [ ] Run full QA pass
- [ ] Launch site
- [ ] Notify client & deliver documentation

---

## 🧾 9. DOCUMENTATION & HANDOFF

- [ ] Write README.md for repo
- [ ] Finalize PRD, Design, and Tasks docs
- [ ] Document how to update content
- [ ] Optional: Create video walkthrough
- [ ] Collect client sign-off

