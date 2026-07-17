# Platter

Platter editorial site, phase 1 static build.

Vercel can deploy it directly from the checked-in HTML files.

The Batch planner lives in the separate `fantastic-fiesta` project.

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

## Architecture Notes

See `ARCHITECTURE.md` for the approved content skeleton and the three build decisions that affect reviews, disclosure, and CookUnity outbound tracking.

The review vertical uses the transparent-affiliate posture from the architecture brief: CookUnity ownership is disclosed inline near CookUnity review/ranking placements, and CTAs are routed through `assets/platter-site.js` with shared tracking configuration.
