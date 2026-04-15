# Site & Sight Design System

## Brand Identity
**Site & Sight** — A friendly, approachable creative studio offering web design, data pipelines & integrations, web integrations, SEO & content marketing (including blog writing), and email marketing automations.

## Tone of Voice
Friendly and approachable — warm, direct, no agency jargon. Write like a talented colleague talking to a client, not a corporate brochure. Use "we" and "you" throughout.

## Color Palette

### Primary Colors
- **Primary Orange**: `#FF5500` — energy, creativity, CTAs
  - Hover state: `#e64d00`
- **Accent Indigo**: `#4F46E5` — pipelines, integrations, technical depth
  - Hover state: `#4338CA`

### Background Colors
- **Dark Background**: `#0F0F0F`
- **Light Background**: `#FAFAFA`

### Text Colors
- **Dark Mode Text**: `#F0F0F0`
- **Light Mode Text**: `#111111`

### Service Color Logic
- **Orange (#FF5500)**: Web Design & Development, SEO & Content Marketing, Email Marketing Automations
- **Indigo (#4F46E5)**: Data Pipelines & Web Integrations, Automations and AI implementation

## Typography
- **Primary Font**: Inter (already configured via Google Fonts)
- **Secondary Font**: League Spartan (already configured via Google Fonts)

## Border Radius
- **Default**: `8px` (rounded-lg)
- **Cards**: `16px` (rounded-xl)
- **Hero Elements**: `24px` (rounded-3xl)

## Spacing System
- **Generous spacing**: `py-24` / `py-32` between sections
- Follow existing Tailwind spacing scale for consistency

## Component Guidelines

### Cards
- Dark mode: slightly elevated background `#1C1C1C`
- Light mode: white background with subtle shadow
- Hover effects with lift animation

### Buttons
- **Primary CTA**: Orange background with white text
- **Secondary/Ghost**: Outlined or transparent with colored border
- Consistent padding and hover states

### Animations
- Use Framer Motion for consistency with existing codebase
- Scroll-triggered fade-in and stagger animations
- Subtle hover effects on interactive elements

## Services Priority Order
1. Web Design & Development (Orange)
2. Automations and AI implementation (Indigo)
3. Data Pipelines & Web Integrations (Indigo)
4. SEO & Email and Content Marketing (Orange)

## Dark/Light Mode
- Maintain existing dark/light mode implementation
- Ensure all new components are theme-aware
- Use conditional classes: `theme === 'dark' ? '...' : '...'`