# Platter Content Architecture

Platter is a food intelligence publication for home cooks who cook, order, reheat, plan, and improvise. The site should feel like an editorial property first, with reviews and tools as repeatable service formats.

## Locked Decisions

### 1. Ownership Posture

Default build posture: transparent-affiliate, pending legal confirmation.

CookUnity owns Platter. Any page that ranks, scores, reviews, or sends traffic to CookUnity must include an inline ownership disclosure near the relevant score, ranking, or CTA. The full disclosure and methodology lives at `/editorial-standards/`.

Do not build the review vertical on the assumption that CookUnity review pages will qualify for Google review rich results. Use article, collection, and breadcrumb structured data until legal and SEO confirm a schema approach.

### 2. Editorial Standards And Disclosure

`/editorial-standards/` ships in phase 1. It must cover:

- CookUnity ownership of Platter.
- The testing and scoring methodology.
- How commercial or ownership ties are disclosed and separated from scoring.
- How affiliate or outbound commerce links are handled.

Disclosure that only lives on the standards page is not enough. Short disclosure lines should render inline on CookUnity review and ranking placements.

### 3. Tracked CookUnity Handoff

CookUnity outbound CTAs must use one reusable component pattern and one shared tracking configuration. No untagged `cookunity.com` links should appear in the review or guide verticals.

Current implementation uses `assets/platter-site.js` to attach placeholder tracking params. Replace the placeholder convention after confirmation with data and martech.

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
- Inline ownership disclosure near CookUnity placements

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
- Inline ownership disclosure
- Tracked CookUnity CTA component

### Ranking Guide

Purpose: SEO and LLM citation surface for best-of queries.

Required modules:

- Summary answer
- Methodology note
- Ranked cards
- Comparison table
- Inline ownership disclosure near CookUnity
- Tracked CookUnity CTA component

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

- Ownership disclosure
- Methodology
- Scoring categories
- Commerce policy
- Corrections/contact
