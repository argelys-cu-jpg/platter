# verify-platter-design.md

## Purpose
Visual QA harness for the Platter brand restoration. Run after every `global.css` or HTML edit.

## Files to verify
All 16 Phase 1 pages:
- index.html
- about/index.html
- batch/index.html
- editorial-standards/index.html
- guides/index.html
- guides/best-meal-delivery-services/index.html
- newsletter/index.html
- recipes/index.html
- recipes/weekday-salmon-couscous/index.html
- reviews/index.html
- reviews/cookunity/index.html
- stories/index.html
- stories/glp-1s-changed-appetite/index.html
- stories/the-freezer-is-a-tool/index.html
- stories/the-second-dinner-decision/index.html
- stories/what-chefs-know-about-reheating/index.html

## Automated checks
1. Link every page to `/global.css` and no other stylesheet.
2. No `<style>` blocks or inline `style=""` attributes.
3. No `border-radius` values other than `0` (except filter chips if kept rounded).
4. No `box-shadow` declarations.
5. No hardcoded `height` on cards, buttons, or content containers.
6. All sections use `background-color: var(--canvas)`.
7. All buttons use `.button-primary`, `.button-secondary`, or `.platter-btn-header`.
8. Footer present on every page.

## Viewport screenshots
Capture full-page screenshots at:
- 1440px desktop
- 1024px tablet
- 375px mobile

## Pass criteria
- [ ] Card and button borders are fully visible on all sides; no clipped bottom borders.
- [ ] CTA text is vertically and horizontally centered.
- [ ] Mobile columns stack cleanly with no vertical overlaps.
- [ ] Batch simulator step indicators S1-S9 render as a spaced flex row, not a solid black block.
- [ ] Metadata rows (e.g., "35 minutes · High protein") do not run together.
- [ ] No unspaced inline text concatenation like "AnswerDays" or "RoutinePackable".

## Manual walkthrough
Record a browser walkthrough showing:
1. Click every header nav link.
2. Scroll homepage top-to-bottom.
3. Run Batch simulator from S1 through S9.
4. Click CTA buttons on reviews, recipes, and newsletter pages.
