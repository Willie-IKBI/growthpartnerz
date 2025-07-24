# 🛠️ TECH STACK — Growth Partnerz Website

## 🌐 FRONTEND

- **Framework:**
  - Next.js (React-based)
    - SSR & SSG for SEO and speed
    - Built-in routing, middleware, image optimization
- **Language:**
  - TypeScript — Strong typing, autocompletion, scalable codebase
- **Styling:**
  - Tailwind CSS — Utility-first CSS framework
    - Custom Theme Extension (see: tailwind.config.js)
    - Glassmorphism Design — with backdrop-blur, bg-opacity, gradients
  - Optional: ShadCN UI — for consistent, styled components
- **Font Stack:**
  - Poppins for headings
  - Inter for body text (via Google Fonts or self-hosted)
- **Animations:**
  - Framer Motion — Smooth page transitions and UI animations

---

## 📦 CMS / CONTENT MANAGEMENT

| Option      | Use Case                        | Recommended           |
|-------------|----------------------------------|-----------------------|
| Markdown    | Static blog, FAQ, case studies  | ✅ Initial MVP        |
| Sanity.io   | Headless CMS for client edits   | ✅ Optional           |
| Contentlayer| Structured MDX + type safety    | Optional (if using MDX)|

---

## ✉️ FORMS & INTEGRATIONS

- **Form Handling:**
  - Formspree or custom Vercel Serverless Function
- **Emailing (optional):**
  - Resend or EmailJS

---

## 📈 SEO & ANALYTICS

- **SEO Meta Handling:**
  - next/head or next-seo
- **Analytics:**
  - Plausible — privacy-friendly
  - or Google Analytics (if needed)

---

## 💬 OPTIONAL ENHANCEMENTS

| Feature            | Tool/Service              |
|--------------------|--------------------------|
| Live Chat          | Crisp, Tawk.to           |
| Newsletter Signup  | ConvertKit, Mailchimp    |
| Blog Comments      | Giscus, Disqus           |
| Search             | Algolia, Fuse.js         |
| Lottie Animations  | LottieFiles              |

---

## 🔐 SECURITY & PERFORMANCE

- HTTPS via Vercel
- SEO-friendly routing with clean slugs
- CSP headers via middleware
- reCAPTCHA (if spam protection needed)

---

## 🚀 DEPLOYMENT

- Vercel — Best-in-class for Next.js
  - Auto-preview URLs for every push
  - GitHub integration
  - Fast global CDN with image optimization
  - Custom Domain (e.g., growthpartners.co.za)

---

## ⚙️ DEV TOOLING

- GitHub — version control and issue tracking
- Prettier + ESLint — code style and linting
- Husky + Lint-Staged — pre-commit hooks
- Figma — Design source of truth
- Notion / Trello — Task tracking 