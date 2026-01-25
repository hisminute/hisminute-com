# His Minute - Site Structure Overview

## 🗺️ Visual Site Map

```
His Minute
│
├── Home (/)
│   ├── Hero Section
│   │   ├── "Take a Minute with God" headline
│   │   ├── Description text
│   │   └── CTA buttons → Start Here / Archive
│   │
│   ├── Today's Scripture
│   │   └── Featured verse in ScriptureCard
│   │
│   ├── What We Offer (3 features)
│   │   ├── Daily Devotionals 📖
│   │   ├── Prayer Guides 🙏
│   │   └── Community 💬
│   │
│   └── CTA Section
│       └── "Ready to Begin?" with action buttons
│
├── Start Here (/start-here)
│   ├── Page Header
│   ├── What is His Minute?
│   ├── Featured Scripture
│   ├── How It Works (3 steps)
│   │   ├── 1. Start with Scripture
│   │   ├── 2. Reflect and Pray
│   │   └── 3. Carry It With You
│   └── CTA buttons → Prayer / Archive
│
├── Prayer (/prayer)
│   ├── Page Header
│   ├── The Power of Prayer intro
│   ├── Featured Scripture
│   ├── How to Pray (ACTS method)
│   │   ├── Adoration
│   │   ├── Confession
│   │   ├── Thanksgiving
│   │   └── Supplication
│   └── Sample Prayer
│
├── Archive (/archive)
│   ├── Page Header
│   └── Devotional Entries (cards)
│       ├── Entry: "Walking in Faith"
│       ├── Entry: "The Power of Prayer"
│       └── Entry: "Living by Grace"
│
└── Support (/support)
    ├── Page Header
    ├── Our Mission
    ├── Why Support Us?
    ├── Support Options
    │   ├── One-Time Gift
    │   └── Monthly Partner
    ├── Other Ways to Help
    │   ├── Share with Others
    │   ├── Pray for Us
    │   └── Provide Feedback
    └── Thank You message
```

---

## 🧩 Component Hierarchy

### Layout Wrapper (All Pages)
```
RootLayout
├── SiteHeader (sticky navigation)
├── main (page content)
└── SiteFooter
```

### SiteHeader
```
SiteHeader
├── Logo/Brand Link
├── Desktop Navigation
│   ├── Home
│   ├── Start Here
│   ├── Prayer
│   ├── Archive
│   └── Support
└── Mobile Menu Button (TODO)
```

### SiteFooter
```
SiteFooter
├── About His Minute
├── Quick Links
│   ├── Start Here
│   ├── Prayer
│   └── Archive
├── Support Links
│   └── Support Us
└── Copyright Notice
```

---

## 📦 Reusable Components

### Button
**Props:** `href`, `variant`, `size`, `onClick`
**Variants:** primary, secondary, outline
**Sizes:** sm, md, lg

### PageHeader
**Props:** `title`, `description`
**Usage:** Top of every content page

### ScriptureCard
**Props:** `verse`, `reference`
**Usage:** Featured scripture displays

### CTASection
**Props:** `title`, `description`, `primaryButton`, `secondaryButton`
**Usage:** Call-to-action sections throughout site

---

## 🎨 Page Templates

### Content Page Pattern
```tsx
export default function ContentPage() {
  return (
    <div className="flex flex-col">
      <PageHeader title="..." description="..." />
      
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-12">
            {/* Content sections */}
          </div>
        </div>
      </section>
    </div>
  );
}
```

### Home Page Pattern
```tsx
export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 md:py-32">...</section>
      
      {/* Feature Section */}
      <section className="py-16 md:py-20 bg-zinc-50/50">...</section>
      
      {/* CTA Section */}
      <CTASection {...props} />
    </div>
  );
}
```

---

## 🎯 User Journeys

### First-Time Visitor
1. **Land on Home** → See hero, today's scripture, features
2. **Click "Get Started"** → Go to /start-here
3. **Learn about the platform** → Understand the approach
4. **Click "Begin with Prayer"** → Go to /prayer
5. **Read prayer guide** → Apply ACTS method
6. **Browse Archive** → Explore past devotionals

### Returning Visitor
1. **Land on Home** → Quick check of today's scripture
2. **Go to Archive** → Find specific devotional
3. **Share content** → With friends/family
4. **Consider Support** → Visit /support page

### Mobile User Journey
- Fast loading (static pages)
- Large touch targets (buttons)
- Readable text (generous spacing)
- Easy navigation (sticky header)

---

## 📱 Responsive Breakpoints

### Mobile First (default)
- Single column layouts
- Full-width buttons
- Smaller text sizes
- Vertical spacing

### Tablet (md: 768px+)
- Two column grids where appropriate
- Larger text sizes
- Horizontal button groups
- Expanded navigation

### Desktop (lg: 1024px+)
- Three column grids for features
- Maximum content width containers
- Enhanced spacing
- Full navigation visible

---

## 🔤 Typography Scale

```css
/* Headings */
h1: text-4xl md:text-5xl lg:text-6xl (36-60px)
h2: text-3xl md:text-4xl lg:text-5xl (30-48px)
h3: text-xl md:text-2xl (20-24px)

/* Body */
p: text-lg md:text-xl (18-20px)
small: text-sm md:text-base (14-16px)

/* Weight */
Bold: font-bold (700)
Semibold: font-semibold (600)
Medium: font-medium (500)
Regular: (400)
```

---

## 🎨 Color Palette

```css
/* Light Mode */
Background: #ffffff
Foreground: #171717
Zinc-50: #fafafa
Zinc-100: #f4f4f5
Zinc-200: #e4e4e7
Zinc-600: #52525b
Zinc-800: #27272a

/* Dark Mode */
Background: #0a0a0a
Foreground: #ededed
[Zinc colors inverted]
```

---

## 📐 Spacing System

```css
/* Container Padding */
px-4 sm:px-6 lg:px-8

/* Section Padding */
Small: py-12 md:py-16
Large: py-16 md:py-24
Hero: py-20 md:py-32

/* Content Width */
Narrow: max-w-2xl (672px)
Medium: max-w-3xl (768px)
Wide: max-w-4xl (896px)
Full: max-w-6xl (1152px)
```

---

## 🚦 Navigation Flow

```
Home → Start Here → Prayer → Archive
  ↓                              ↓
Support ← ← ← ← ← ← ← ← ← ← ← ←
```

All pages accessible from:
- Site Header (desktop/mobile)
- Site Footer (quick links)
- Inline CTAs and buttons

---

## 📊 Content Strategy

### Home
**Goal:** Welcome and orient new visitors
**CTA:** Get Started, Browse Archive

### Start Here
**Goal:** Explain platform and benefits
**CTA:** Begin with Prayer, Browse Archive

### Prayer
**Goal:** Teach prayer methodology
**CTA:** None (content focus)

### Archive
**Goal:** Browse past devotionals
**CTA:** Individual devotional pages (TODO)

### Support
**Goal:** Encourage financial support
**CTA:** Donate buttons (payment integration TODO)

---

**Ready to launch!** 🚀
