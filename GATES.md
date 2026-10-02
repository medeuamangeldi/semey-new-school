# Gates: School website redesign

OWNS: src/app/**, scripts/**, GATES.md

Scope: Redesign every existing public and portal route with responsive navigation and working interactions; remove the public account login and registration flow.

- [x] G1: Production build and TypeScript validation pass.
  CHECK: npm run build
  EXPECT: Generating static pages
  EVIDENCE: automatic-evidence=v1; definition-sha256=4eae1fc0e846c98316088388a7640373319d6a210545bb1723d9f5366909ed05; exit=0; EXPECT=matched; output-sha256=29902fc913361a0d800b6122fc68a65c0c342383c781262f8bffc61fded6ccc9; output-bytes=1840; shell=/bin/sh; cwd=/Users/medeuamangeldi/Projects/SNS/new/semey-new-school; path=725680743e06/34 entries

- [x] G2: Public and portal routes render, navigation and library filters work, and account routes redirect to the homepage without login links.
  EVIDENCE: Browser verification against the production preview: all 36 desktop route/locale cases render or redirect correctly; no account links; mobile menu has only school pages; library search, subject filter, empty reset, video dialog, day and quarter controls, profile persistence and cancel verified.

- [x] G3: Desktop and mobile layouts are visually reviewed with no horizontal overflow.
  EVIDENCE: Desktop homepage, library and contact layout and mobile homepage, school information and profile visually reviewed. Final DOM measurements show no horizontal overflow on all 10 Russian school/portal routes at 390px; all English and Kazakh routes also passed mobile measurements. Temporary viewport override reset before handoff.
