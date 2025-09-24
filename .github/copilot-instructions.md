# 🤖 GitHub Copilot Instructions

These are custom instructions for Copilot to improve code suggestions in this project.


## 🛠 Stack & Tools

- Framework: **Next.js 15.5.4** (App Router)
- Styling: **Tailwind CSS v4**
- Animations: **Framer Motion** (Latest)
- Icons: **React Icons**
- Loading States: **React Loading Skeleton**

---

## ✨ Coding Rules

- Use **React functional components** with arrow functions.
- Use **camelCase** for variables and functions.
- Use **PascalCase** for component names.
- Break large components into **smaller, reusable components**.
- Avoid global variables and inline styles.
- Keep each component in a **separate file**.
- Import icons only from **react-icons**, e.g.:

```js
import { FaStar } from "react-icons/fa";
```

---
## 📁 Project Structure

- All code lives inside the `app/` folder (App Router).
- Components go inside `app/components/`.
- Each section has its own folder:
  - Example: `app/components/about/` → contains all About section components.
  - Example: `app/components/common/` → contains shared/common components.
- Pages and routes stay inside `app/`.
- Hooks go inside `app/hooks/`.
- Utility/helper functions go inside `app/lib/`.

---
## 🎨 Design Reference

Use the **Website design** as the primary design reference:

- Follow the exact layout structure and UI hierarchy from the website
- Match spacing, typography, and color schemes precisely
- Implement responsive breakpoints as specified in the design
- Ensure pixel-perfect implementation of components
- https://demo.artureanec.com/themes/logico-rounded/

---

## 🌀 Animation (Framer Motion)

- Use **Framer Motion** for all animations.
- Animate entrances with `motion.div`.
- Use `AnimatePresence` for exit animations.
- Create smooth, purposeful animations that enhance UX.
- Use consistent easing and timing across the project.

### ✅ Framer Motion Import Rules (Latest):

- For **Client Components**, import like:

```js
import { motion } from "motion/react";
import { AnimatePresence } from "motion/react";
```

- For **Server Components**, import like:

```js
import * as motion from "motion/react-client";
```

---
## 📐 Layout Pattern

Always wrap page or section content like this:

```jsx
<section>
  <Container>
    {children}
  </Container>
</section>
```

---
## ⏳ Loading States

- Use **React Loading Skeleton** for loading states.
- Always create dedicated skeleton components in `app/components/common/skeletons/`.
- Skeletons should visually match the final UI structure.

---
## 🌐 Next.js Best Practices

- Use **Server Components** by default.
- Only use `"use client"` when interactivity is required.
- Use **Next.js Image component** for optimized images.
- Use `next/link` for navigation instead of `<a>`.
- Use **React Suspense** and `loading.tsx` for async components.
- Use **dynamic imports** for heavy client-side libraries (e.g., charts).

---
## ⚡ Performance Rules

- Optimize images with **Next.js Image**.
- Avoid unnecessary re-renders (memoize expensive components).
- **Lazy-load** below-the-fold components.
- Use **Tailwind classes** instead of custom CSS when possible.
- Keep bundle size small — prefer **tree-shakeable imports**.

---
## ♿ Accessibility (a11y)

- Always add **alt text** for images.
- Use **semantic HTML** (`<main>`, `<header>`, `<footer>`).
- Ensure proper **keyboard navigation** (`tabIndex`, `aria-*`).
- Use **accessible form components** (label linked to input).