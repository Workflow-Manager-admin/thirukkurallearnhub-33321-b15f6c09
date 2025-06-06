# ThirukkuralLearnHub Web App Requirements Document

## 1. Overview

ThirukkuralLearnHub is a mobile-first, responsive single-page web application (SPA) designed using React.js for users interested in learning Thirukkural, browsing chapters (Athigaarams), reading translated and explained Kurals, exploring the history of Thirukkural/Thiruvalluvar, and engaging in interactive quizzes. The application prioritizes clean, modern UI/UX, lightweight dependencies, accessibility, and efficient navigation to provide an engaging, educational experience.

---

## 2. Features

### 2.1 Home Page – Athigaaram Exploration
- Presents a selection of five clickable Athigaarams (chapters).
- On selection, displays 5–7 Kurals from the chosen chapter, each with:
  - Tamil text of Kural
  - English translation
  - Brief English explanation
- Uses card-style presentation for listed Kurals.

### 2.2 Navigation Bar
- Persistent top navigation bar visible on all screens.
- Contains links to primary pages: Home, About Thirukkural, and Quiz pages.
- Branding and logo integrated (logo-symbol and text, e.g., “KAVIA AI” as seen in initial implementation).
- Navigation bar is collapsible/compact on mobile devices.

### 2.3 About Thirukkural Page
- Dedicated informational page about Thirukkural and Thiruvalluvar.
- Concise text, optionally with supporting media/images (e.g., Thiruvalluvar's image as a faded or transparent background).

### 2.4 Quiz Page
- Interactive quiz interface for users to test their Thirukkural knowledge.
- Supports multiple-choice questions (e.g., “Select the correct meaning for this Kural”, “Match Kural with explanation”).
- Immediate feedback on answers and the option to retake or view explanations.
- Demo/sample quiz data to be used as placeholder content until real questions are added.

---

## 3. Technical Stack

- **Framework:** React JS (React v18+)
- **Languages:** JavaScript (ES6+)
- **Styling:** Pure CSS and CSS variables (no heavy UI frameworks), with CSS custom properties declared in `src/App.css`
- **Package Management & Scripts:** npm (see scripts in `package.json`)
- **Testing:** Jest and React Testing Library (included via setupTests.js and default `react-scripts test`)

---

## 4. Components & Layout

### 4.1 Major Components
- **App** — main application wrapper and routing context.
- **NavigationBar** — persistent top bar for navigation and branding.
- **HomePage** — showcases Athigaaram selection, Kural cards section.
- **AboutPage** — presents Thirukkural background and author details.
- **QuizPage** — interactive quiz component for MCQs and review.
- **Supporting Reusable Components:** Card, Button, Container, Typography (Title, Subtitle, Description)

### 4.2 Routing & Navigation
- Client-side routing using `react-router-dom` (planned/required; to be installed).
- Main routes:
  - `/` → HomePage
  - `/about` → AboutPage
  - `/quiz` → QuizPage
- Navigation bar reflects routing state and enables transitions without full reload.

### 4.3 Layout & Responsiveness
- **Mobile-first**: All layouts must be optimized for mobile screens first and enhance gracefully to tablets/desktops.
- **Center-aligned content**: Main sections are centered with max width constraints.
- **Card-style UI**: Sections (Athigaarams, Kurals, quiz questions) presented in bordered card blocks.
- **Responsive navbar**: Fixed at the top and adapts/collapses on smaller screens.

---

## 5. Theming and Styles

- **Primary Colors:**
  - Base Dark: `#00008b` (CSS variable: `--base-dark`)
  - Base Light/Accent: `#00ffff` (CSS variable: `--base-light`)
  - Text: `#ffffff` (CSS variable: `--text-color`)
  - Secondary Text: `rgba(255, 255, 255, 0.7)` (CSS variable: `--text-secondary`)
  - Border: `rgba(255, 255, 255, 0.1)` (CSS variable: `--border-color`)
- **Branding:** All pages utilize the specified color palette, as set forth in `src/App.css`.
- **Typography:** Clear, modern sans-serif stack. Large titles and readable secondary text in all sections.
- **Button Styles:** Rounded corners, base light background, hover effect.
- **Background:** All pages to use a transparent or faded image of Thiruvalluvar as a watermark-style background (design asset to be added).

---

## 6. Assets

- **Logo:** Textual logo plus graphic (as in `.logo-symbol`). Option to replace with SVG/image logo for future branding.
- **Background Images:** Faded/transparent illustration of Thiruvalluvar, used across all main content pages.
- **Placeholder Content:** Sample Athigaarams, Kurals, and quiz questions for UI demos/previews.

---

## 7. Constraints & Extensions

### 7.1 Constraints
- No heavy UI frameworks (e.g., Material UI, Bootstrap)—must rely on custom CSS as per provided styles.
- Mobile and accessibility best practices prioritized (contrast, font size, navigation touch targets).
- Demo/sample data will be used until backend or richer data is available.
- Only the features and components detailed here (based on the implementation plan) are required at this stage. Further extensions possible after delivery.

### 7.2 Planned Extensions (Non-Mandatory/Future Scope)
- Integration of real Kural/Athigaaram content from an API or dataset.
- User authentication or progress tracking.
- Advanced quiz types or user scores/ranking.
- Admin content management UI.

---

## 8. Development & Build

- **Run Locally:** (from `thirukkurallearnhub_web_app` folder)
  - Start app: `npm start`
  - Test: `npm run test`
  - Build: `npm run build`
- **Dependencies:** Defined in `package.json`.
  - Must add/install `react-router-dom` for routing once multiple pages are implemented.

---

## 9. References

- Source styles in `src/App.css`
- Primary components in `src/App.js`
- Project overview and quickstart in `thirukkurallearnhub_web_app/README.md`
- See implementation plan for further clarifications or stepwise breakdown.

---

## 10. Summary Table

| Requirement Category     | Details                                                                                 |
|-------------------------|-----------------------------------------------------------------------------------------|
| App Type                | React SPA (mobile-first, responsive)                                                    |
| Main Features           | Athigaaram browsing, Kural reading, About page, Quiz module                            |
| Navigation              | Persistent top nav bar, links to all main sections                                      |
| Theming                 | Custom brand colors, modern card layout, CSS variables in `App.css`                     |
| Technical Stack         | React, JavaScript, CSS, npm                                                             |
| Routing                 | Planned with `react-router-dom` (must be added)                                         |
| Layout                  | Card-style, centered content, responsive navbar                                         |
| Assets                  | Logo, Thiruvalluvar faded image, placeholder demo content                               |
| Constraints             | No heavy UI frameworks; purely custom styles                                            |

---
