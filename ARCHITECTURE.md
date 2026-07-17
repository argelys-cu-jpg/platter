# Platter Content Architecture

Platter is a food intelligence publication for home cooks who cook, order, reheat, plan, and improvise. The site is an editorial property first, with reviews and tools as repeatable service formats.

## Locked Decisions

### 1. Editorial Posture

Platter should read as an independent, reader-first publication. The editorial voice is useful, opinionated, service-driven, and culturally aware without feeling like brand copy.

Review and ranking pages should explain how decisions are made in plain language: taste, delivery, reheating, menu range, price clarity, and the job a service does in a real week.

### 2. Editorial Standards

`/editorial-standards/` ships in phase 1. It should cover:

- The testing and scoring methodology.
- How commerce links are handled.
- How recommendations remain useful and specific.
- How corrections or updates are routed.

The standards page is a reader-facing methodology page.

### 3. Outbound Handoff

Outbound service CTAs use one reusable component pattern and one shared tracking configuration.

## Phase 1 Routes

- `/`
- `/reviews/`
- `/reviews/cookunity/`
- `/guides/`
- `/guides/best-meal-delivery-services/`
- `/stories/`
- `/stories/glp-1s-changed-appetite/`
- `/stories/the-second-dinner-decision/`
- `/stories/what-chefs-know-about-reheating/`
- `/stories/the-freezer-is-a-tool/`
- `/newsletter/`
- `/about/`
- `/editorial-standards/`

## Phase 2 Routes

- `/recipes/`
- Recipe detail pages
- More service reviews
- More category pages
- Search and archive pages

Recipes move to phase 2 because they require higher production load and ongoing recipe schema upkeep.

Initial story detail pages validate the article system without opening the higher-maintenance recipe vertical.

## Top-Level Nav

- Reviews
- Guides
- Stories
- Newsletter
- Batch

Recipes should not appear in primary nav until the recipe vertical is staffed and populated.

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

### Newsletter

Purpose: owned audience capture and editorial habit.

Required modules:

- Clear promise
- Sample issue bullets
- Signup
- Archive preview

### Editorial Standards

Purpose: credibility infrastructure for reviews and rankings.

Required modules:

- Methodology
- Scoring categories
- Commerce policy
- Corrections/contact
