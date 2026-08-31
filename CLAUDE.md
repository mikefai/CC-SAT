# SAT Workspace — Conventions

Independent project within CLAUDE TEACHING. Routing from the root `CLAUDE.md`
still decides files enter here; inside, these rules govern.

**Inherits all shared quality rules from `_Shared/CLAUDE-principles.md`**
(answer-key balance check, 3–4 strategies cap, light theme only, offline-first,
naming, privacy).

## Structure — subsection folders, no band levels

```
SAT/
├── Reading and Writing/
│   ├── Passages and Questions/     → {lessons, practices, -KEY variants, answer-key}
│   └── Grammar and Vocabulary/     → {lessons, practices, answer-key}
├── Math/
│   ├── Algebra/                    → {lessons, practices, answer-key}
│   ├── Advanced Math/              → {lessons, practices, answer-key}
│   └── Problem Solving/            → {lessons, practices, answer-key}
├── Vocabulary/                     → {lessons, flashcards, apps, answer-key}
└── Mock Tests/                     → {full modular mocks and keys}
```

## Conventions

- Difficulty targets use **SAT score bands** in filenames, e.g. `550-650`,
  `1200-1400` — the Digital SAT scale, not CEFR or IELTS bands.
- Two key formats are both allowed:
  - `answer-key.md` beside a batch of materials (aggregate key), or
  - a `<material-name>-KEY.html` variant beside the student-facing file.
- Interactive pages may embed the key behind a reveal toggle; the printable
  practice file itself must never show answers inline.
- Mock tests mirror the modular Digital SAT structure (Module 1 / Module 2,
  adaptive description) — see `Mock Tests/2026-08-28_modular-mock_practice_550-650.html`.
- The `sat-vocab-mastery-app/` project is offline-first: no frameworks, no CDNs,
  localStorage progress. Serve with `npm start` inside the app folder.

## Current state (maintain this section)

- Math: Problem Solving module-1 practice at 550–650.
- Reading and Writing: mixed-domains practice (md), 550–650 practice + KEY html.
- Vocabulary: top-100 flashcards, vocabulary-in-context practice at 1200–1400,
  `sat-vocab-mastery-app`.
- Mock Tests: one modular mock at 550–650 + answer key.
- Gaps: Math Algebra and Advanced Math are empty; Grammar and Vocabulary folder empty.
