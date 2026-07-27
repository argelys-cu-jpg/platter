# Platter Content Architecture

Platter is a food intelligence publication for home cooks who cook, order, reheat, plan, and improvise. The site is an editorial property first, with reviews and tools as repeatable service formats.

> **Doc status:** Reconciled against the live site (readplatter.com). The main drift corrected: Recipes was Phase 2 in the original plan, but the recipes *landing* shipped and now sits in primary nav, so it moves to Phase 1. Recipe *detail* pages stay Phase 2. See **Build Status** for what's shipped vs. specified.

## Build Status

**Shipped (live):**
`/`, `/reviews/`, `/guides/`, `/stories/`, `/recipes/`, `/newsletter/`, `/about/`, `/editorial-standards/`, `/batch/`

**Specified, not yet built (placeholder links currently point to the parent section):**
`/reviews/cookunity/`, `/guides/best-meal-delivery-services/`, `/stories/glp-1s-changed-appetite/`, `/stories/the-second-dinner-decision/`, `/stories/what-chefs-know-about-reheating/`, `/stories/the-freezer-is-a-tool/`

## Locked Decisions

### 1. Editorial Posture
Platter should read as an independent, reader-first publication. The editorial voice is useful, opinionated, service-driven, and culturally aware without feeling like brand copy.

Review and ranking pages should explain how decisions are made in plain language: taste, delivery, reheating, menu range, price clarity, and the job a service does in a real week.

### 2. Editorial Standards
`/editorial-standards/` ships in phase 1 (shipped). It should cover:
- The testing and scoring methodology.
- How commerce links are handled.
- How recommendations remain useful and specific.
- How corrections or updates are routed.

The standards page is a reader-facing methodology page.

### 3. Outbound Handoff
Outbound service CTAs use one reusable component pattern and one shared tracking configuration.

## Phase 1 Routes

**Shipped:**
- `/`
- `/reviews/`
- `/guides/`
- `/stories/`
- `/recipes/` *(promoted from Phase 2 — landing only; see note)*
- `/newsletter/`
- `/about/`
- `/editorial-standards/`
- `/batch/`

**Specified (Phase 1, not yet built):**
- `/reviews/cookunity/`
- `/guides/best-meal-delivery-services/`
- `/stories/glp-1s-changed-appetite/`
- `/stories/the-second-dinner-decision/`
- `/stories/what-chefs-know-about-reheating/`
- `/stories/the-freezer-is-a-tool/`

Initial story detail pages validate the article system without opening the higher-maintenance recipe vertical.

**Recipes note:** The recipes *landing* (`/recipes/`) shipped in Phase 1 as a category index and top-of-funnel surface. Recipe *detail* pages remain Phase 2 because they carry higher production load and ongoing recipe-schema upkeep. The landing links out to that vertical as it fills in.

## Phase 2 Routes
- Recipe detail pages
- More service reviews
- More category pages
- Search and archive pages

## Top-Level Nav
- Reviews
- Guides
- Stories
- Recipes
- Newsletter
- Batch

Recipe *detail* pages should not be promoted (and the recipe vertical should not expand) until it is staffed and populated. The landing stays in nav as the entry point.

## Launch Categories
Start with a small set to avoid thin category pages:
- Meal Delivery
- Prepared Meals
- Meal Planning
- Grocery Shortcuts
- Food Culture

Tags can carry more specific needs:
- High protein
- Vegetarian
- GLP-1
- Family
- Solo cooking
- Under 30 minutes
- No-cook
- Budget
- Reheating
- Lunch
- Dinner
- Sunday prep

## Page Systems

### Review Landing
Purpose: index the category, surface the current ranking, and send users into review and guide pages.
Required modules:
- Index hero
- Top pick card
- Ranking table/list
- Methodology link

### Service Review
Purpose: a defensible review page for one service.
Required modules:
- Score/rating
- Who it is for
- Who should skip
- Pros/cons
- Menu and ordering notes
- Reheating/eating notes
- Alternatives
- Service CTA component

### Ranking Guide
Purpose: SEO and LLM citation surface for best-of queries.
Required modules:
- Summary answer
- Methodology note
- Ranked cards
- Comparison table
- Service CTA component

### Story
Purpose: cultural and reported editorial.
Required modules:
- Article header
- Byline/date
- Rich lead image or visual system
- Related stories

### Recipe Landing
Purpose: category index and top-of-funnel entry for the recipe vertical. Landing only in Phase 1; detail pages follow in Phase 2.
Required modules:
- Recipe-of-the-week hero
- Filter/tag chips
- Search
- Recipe card grid
- Archive/"load more" handoff

### Newsletter
Purpose: owned audience capture and editorial habit.
Required modules:
- Clear promise
- Sample issue bullets
- Signup
- Archive preview

### About
Purpose: publication identity and credibility. Who Platter is and who is behind it.
Required modules:
- Masthead/positioning statement
- Editorial manifesto
- Stats or track record
- People/contributors
- Contact and pitch/careers CTAs

### Editorial Standards
Purpose: credibility infrastructure for reviews and rankings.
Required modules:
- Methodology
- Scoring categories
- Commerce policy
- Corrections/contact

### Batch
Purpose: product/tool surface for the Batch weekly planner. Owned acquisition and demonstration of the tool the editorial keeps referencing.
Required modules:
- Product hero + app preview
- Trust/usage stats
- Feature grid ("what Batch does")
- Sample weekly plan table
- App/web CTAs (App Store, web)

## Design System Notes
- One stylesheet at the site root: `/global.css`, shared by every page (homepage links `/global.css`; subpages link `../global.css`, which resolves to the same file).
- Flat, sharp-edged editorial layout. Palette: black ink (`#050505`), Klein blue accent (`#002FA7`), green (`#8ACE00`) on closing CTA bands, cream/white surfaces.
- Fonts: Bebas Neue (labels/eyebrows/numerals), Instrument Sans (everything else).
- Placeholder tiles (`.placeholder--16x9 / --3x2 / --1x1`) mark image slots. Swap for `<img src="/uploads/..." />` with matching aspect ratio and real alt text.
