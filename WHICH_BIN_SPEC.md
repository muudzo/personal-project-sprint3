# Which Bin? Design spec & Figma handoff

> **Purpose:** This holds everything needed to make the Figma mid-fi screens and keep building the chosen project. It's loaded through `CLAUDE.md`, so a new session starts with full context.
> **Decision context:** `PROJECT_BRIEF.md` §8 (chosen idea + decision log).
> **Exact layout source:** `figma-plugin/which-bin-wireframes/code.js` (a local Figma plugin that draws the same 7 screens). The plugin and the Figma file name still say "wireframes"; they were named before the fidelity was corrected. **Those screens are mid-fidelity** (page `Which Bin? · Mid-fi v1`). The lo-fi sketches are on their own page, `Which Bin? · Lo-fi v0`.

---

## 0. Where we are (update every session)

**Last updated:** 2026-10-07 (Wed, day 3 of 10 working days · deadline **Fri 23 Oct**)

### Done
- [x] Idea chosen and recorded in `PROJECT_BRIEF.md` §8
- [x] Competitor and review research (§5 below)
- [x] Local Figma plugin written. It generates the 7 mid-fi screens with design-decision notes. I've only syntax-checked it, not run it in Figma.
- [x] Figma MCP plugin installed: `claude plugin install figma@claude-plugins-official` (user scope)
- [x] Figma MCP authenticated. It can write to the canvas.
- [x] **Mid-fi v1 built in Figma** by Claude through the MCP, using the same layout as the local plugin: [Which Bin? Wireframes](https://www.figma.com/design/ldR4tgGcytz9yPgP7rgJNO) (team "tatendawalter62's team", drafts). Page `Which Bin? · Wireframes v1`, with the title and legend, 7 screens (frame IDs `1:4`, `1:25`, `1:50`, `1:74`, `1:100`, `1:133`, `1:152`) and a yellow note beside each. Screenshots checked.

- [x] **Desk validation** in `research/01-desk-research-leeuwarden.md`, based on Leeuwarden's own resident survey (Ipsos I&O, 2024, n = 1,204). Confirmed: 21% of residents have a waste type they don't know what to do with (pizza boxes named). 18–29-year-olds put things next to containers more (14%) and know the bulky-waste options less. 1 in 3 residents regularly see dumped bulky waste. **Not confirmed:** whether internationals struggle more (no nationality data), and whether the cause is knowledge (only 7% say "I don't know the rules"; hassle is 29%).
- [x] **Lo-fi v0 page added** in the same Figma file, before the mid-fi page: the 7 screens as sketches (handwriting, X-boxes for images, grey bars for text), flow arrows, a grey question note per screen, and **3 alternatives to test**: 04-B tap instead of drag, 04-C bin grid with a 6th "not a bin" target, 05-B full-screen feedback. **Made by Claude on 5 Oct, after mid-fi v1.** Say so in the process book: the lo-fi was made afterwards to explore alternatives, not as the first step.
- [x] **Jira board set up** as the plan of action: [SCRUM board](https://tatendawalters.atlassian.net/jira/software/projects/SCRUM/boards/1), two sprints: "Which Bin? · Week 41" (Mon 5 – Sun 11 Oct) and "Which Bin? · Week 43" (Mon 19 – Fri 23 Oct). One epic per phase (SCRUM-5 to SCRUM-10, SCRUM-48, SCRUM-49), plus Learn N2 catch-up (SCRUM-11) and open questions (SCRUM-12). Every task has a due date and labels (`create-n2`, `learn-n2`, `research`, `testing`, `build`, `design`, `docs`, `admin`). Daily progress goes in comments on SCRUM-16 (the Learn N2 time log). **Credit claim (2026-10-06): Create N2 6 + Learn N2 3 = 9 EC**; Organize N2 moves to a group project. **The board is now the day-to-day to-do list. This section stays the summary.**
- [x] **7 Oct, Jira tickets tackled with Claude:**
  - real Leeuwarden rules (`research/03-omrin-rules-leeuwarden.md`: 11 of 15 items confirmed from Omrin's 2026 guide; plastic, cans and drink cartons go in the grey Sortibak)
  - test script (`research/04-test-script.md`)
  - clickable mid-fi prototype (2 starting points)
  - card-sort board (Figma page "Card sort (validation)")
  - `PLAN_OF_ACTION.md` and `AI_USE_LOG.md`
  - an email to Omrin (Gmail draft, not sent)

  Omrin also publishes the guide **in English**, so the gap is engagement and memory, not missing information.
- [x] Idea extended (still to decide): a **bulky-waste scenario round** (furniture, mattress) on top of the sorting game. Validation kit (group search, recruitment message, card sort + interview script, success thresholds) is in `research/02-validation-kit.md`.

### Next steps
0. **Today (Wed 7): test 1.** In Figma, set Share → "anyone with the link can view". Run P1 (full flow) and P2 (round only) with `research/04-test-script.md`. Log the findings (SCRUM-25), then make mid-fi v2 by hand with the real bins (SCRUM-26).
1. **Send the Omrin email.** It's a Gmail draft to syp@omrin.nl (SCRUM-47).
2. **Validation (overdue):** recruit (SCRUM-2/4) and run 6–8 card-sort + interview sessions on the Figma card-sort board (SCRUM-21), then analyse (SCRUM-22). Search the Facebook/WhatsApp/Reddit groups yourself (SCRUM-19).
3. **Learn N2, this week:** backlog + MoSCoW (SCRUM-39/40), my AI rules (SCRUM-57), the Usability-teacher check-in (SCRUM-41), reflection wk 41 (SCRUM-42), and my columns of `AI_USE_LOG.md`.
4. **Thu 8 – Fri 9:** build v1 (static, the 11 confirmed rules in JSON) and deploy it. Book the week-43 testers before the autumn break.
5. **Week 43:** test 2 (Mon 19), database + build v2 (Tue 20 – Wed 21), test 3 (Thu 22), documentation and deadline (Fri 23). See §7.

### Open questions
- ✅ Municipality: **Leeuwarden (Omrin)**, confirmed 7 Oct.
- 4 card-sort items (deposit bottle/can, coffee cup, receipt, tea bag) and the Biobak/Papierbak colours wait for Omrin (SCRUM-47).
- ✅ Deadline: **Fri 23 Oct** (weeks 41 + 43, autumn break off), confirmed by the lecturer on 6 Oct.
- What's due on Fri 23 (process book? video? live demo?) and the rubric (SCRUM-44).
- ✅ Organize N2 isn't claimed this sprint. Confirm the 9 EC claim (Create 6 + Learn 3) with the mentor (SCRUM-45).

---

## 1. Concept

**Which Bin?** is a mobile web game that teaches the waste-sorting rules of *your* municipality. Each round you drag everyday items into the right bin. Rounds get faster, every wrong answer explains why, and each round ends with a summary of your mistakes to learn from.

| | |
|---|---|
| **Problem** | Sorting rules differ per Dutch municipality and are effectively invisible to newcomers. The existing tools are lookup utilities you have to remember to open, and they're poorly rated. |
| **Target audience** | International students and expats in the Netherlands who don't know the local sorting rules. |
| **Themes** | **Play** (main), plus **Invisible/Visible** (hidden local rules become visible and learnable). |
| **Interactivity** | A working drag-and-drop game: score, lives, streak, increasing speed. Build v2 adds an anonymous answer database: after a mistake, players see how many others got the same item wrong (§2b). |
| **External test** | Remote, by sharing a link and running think-aloud on a video call. 3 rounds: mid-fi (Wed 7 Oct), build v1 (Mon 19), build v2 (Thu 22). |
| **Skill × Challenge** | High skill (UI, interaction, usability testing) + big challenge (game design and pacing, a working web build, original rule research) → **Flow**. |
| **Personal** | Start from my own confusion about Dutch bins, as self-ethnography. |

**Not in v1:** accounts or login, push notifications, multiple fully researched cities, and real-life mode (a stretch goal).

---

## 2. Content rules (non-negotiable)

- **Never invent a sorting rule.** Every item → bin answer and every "why" sentence must come from the municipality's own website (or the waste company it uses) and be recorded with its source URL and check date.
- Until it's researched, content stays as `[bracketed placeholder]`.
- **Real bin set (researched 7 Oct, `research/03-omrin-rules-leeuwarden.md`):** Sortibak (grey; also plastic, cans and drink cartons), Biobak, Papierbak, Glasbak, Textielbak, plus not-a-bin destinations (kca/chemokar, milieustraat). Only the grey colour is confirmed. Mid-fi v1 still shows the old placeholders (`GFT, Paper, PMD, Residual, Glass`); v2 replaces them.

## 2b. Data and privacy (build v2, week 43)

The database has one job players can see: showing that others find the same items confusing (Invisible/Visible). It also measures learning for the success criteria.

| Table | Stores | Powers |
|---|---|---|
| `answers` | Random session ID, round, item, chosen bin, right/wrong, time | "5 of 8 players got this wrong too" on 05 · first- vs last-round accuracy |
| `city_requests` | City name, time | Which city to research next (from 07) |

- **Anonymous by design:** no names, emails or IP addresses in any table. Supabase, hosted in an EU region.
- **Browsers can only add rows and read the per-item stats**, never the raw rows.
- **The game never waits for the database.** If it's down, the round still plays and skips the "others" line.
- **Counts, not percentages,** while there are few players.
- **The rules stay in the JSON file**, not the database. The git history proves when each rule was checked.
- Testers hear "your answers are saved anonymously" in the consent line, and the game shows a one-line privacy note.

---

## 3. Mid-fi specs (Figma)

| Token | Value |
|---|---|
| Frame | 390 × 844 (mobile), white fill, clip content |
| Side padding | 24 |
| Font | Inter Regular / Bold |
| Ink | `#1A1A1A` |
| Muted text | `#737373` |
| Placeholder fill | `#EDEDED` |
| Stroke | `#CCCCCC`, 1px |
| Buttons | Full width (342 × 52), radius 12. Primary: ink fill, white text. Secondary: white fill, stroke, ink text. |
| Bins | 5 across, 88 high, 8 gap, stroked, label below (12px) |
| Item card | 200 × 200, radius 16, `[photo]` placeholder, item name below (20px bold) |
| Design notes | Yellow `#FFF099` auto-layout frame, 300 wide, 32px to the right of each screen, 13px text, one bullet per decision |
| Page layout | Page `Which Bin? · Mid-fi v1`. Title + legend at the top. Screens in a row, 850px apart (start to start). |
| Legend text | "Yellow notes = design decision + where it came from (heuristic or competitor review). [Brackets] = content still to research." |

Style intent: greyscale **mid-fidelity**: real layout, type, sizes and copy, but no colour except the yellow notes, so testers react to the flow and not the visuals. Colour comes in v2, once the real bin colours are known.

---

## 4. Screens

Each screen is listed with its elements and the decision notes that go in its yellow note.

### 01 Start
- Title "Which Bin?" (44 bold, centred)
- Subtitle: "Learn your city's waste-sorting rules in 2 minutes. No account needed."
- Row of the 5 bins
- Primary button: **Play**
- Text link: "How it works"

**Notes:**
- No sign-up or login. Why: Afvalwijzer (1.9★, ~1,400 App Store reviews) users report "authenticatie mislukt" when logging in with their postcode.
- Nielsen #5 error prevention: no login means one less way to fail.
- "2 minutes" sets expectations (Nielsen #1 visibility of system status).
- Bins shown up front: recognition rather than recall (Nielsen #6).

### 02 Pick your city
- Header "← Where do you live?"
- Search field: "Search municipality…"
- A list of cities (Leeuwarden, Groningen, Amsterdam, Utrecht, Rotterdam), each with "checked [date]" on the right
- Link: "My city isn't here →"

**Notes:**
- Sorting rules differ per municipality. This screen makes that hidden fact visible (theme: Invisible/Visible).
- Each city shows when its rules were last checked. Why: Afvalwijzer reviews complain about outdated information.
- v1 scope: one city fully researched. Others lead to 07.

### 03 How to play
- Header "← How to play"
- Item card, an arrow pointing down, and the bin row
- Text: "Drag each item into the bin it belongs in. 3 lives per round. Every wrong answer tells you why."
- Primary button: **Start round**

**Notes:**
- One screen of instructions, then play (Nielsen #10, kept minimal).
- Bins use the same colours and labels as the real bins in the chosen city (Norman: signifiers; Nielsen #2).
- Test question: do testers understand drag-and-drop without this screen? If yes, cut it.

### 04 Sorting round
- Top bar: "Lives 3" on the left, "Score 120" in the centre, "Streak ×3" on the right
- Progress bar at 40%, with "Item 4 of 10"
- Item card: "Pizza box"
- Hint: "Drag it to a bin"
- Bin row at the bottom, in thumb reach

**Notes:**
- Progress bar + "Item 4 of 10" (Goal-gradient effect; Nielsen #1).
- Large drop targets at the bottom (Fitts's Law).
- Lives, score and streak make it Play. Speed goes up each round (challenge).
- Everyday item names ("pizza box", not "cardboard packaging") (Nielsen #2).

### 05 Wrong answer
- Screen 04 behind a 45% black scrim
- Bottom sheet (radius 24) containing:
  - "Not quite"
  - "Pizza box → [correct bin]"
  - "[Why, in one sentence, from the municipality's own rules]"
  - "Source: [municipality website] · checked [date]"
  - Primary button: **Got it**

**Notes:**
- Errors explain why, not just "wrong" (Nielsen #9).
- Every rule shows its source and check date so the player can trust it.
- Bracketed content is researched from the municipality's own site. Never invent a rule.

### 06 Round score
- "Round complete"
- Large "8 / 10", with "Best streak: 5" below it
- "Learn from these": the mistakes listed as rows ("Pizza box → [bin]", "Coffee cup → [bin]")
- Primary button: **Next round (faster)**
- Secondary button: **Real-life mode**
- Text link: "Share score"

**Notes:**
- End on a summary, not a fail (Peak-End rule).
- Mistakes repeated as a short list: the actual learning moment.
- Next round is faster (Play). Real-life mode is a stretch goal: items from the player's own kitchen.
- No push notifications in v1. Why: Afvalwijzer reviews call its notifications spam ("Maak het opt-in"). Any later reminder is opt-in.

### 07 City not covered
- Header "← Your city"
- Round illustration placeholder
- "We haven't checked [city] yet"
- "Sorting rules differ per municipality. We only show rules we've checked ourselves."
- Primary button: **Ask for my city**
- Secondary button: **Play with [researched city] rules**

**Notes:**
- A clear state instead of a cryptic error. Why: Afvalwijzer reviewers hit an unexplained error when their postcode area isn't supported.
- Nielsen #9: say what happened and offer a way forward.
- City requests show demand and decide which city to research next.

### Flow
`01 Start → 02 City → (covered) 03 How to play → 04 Round ⇄ 05 Wrong answer → 06 Score → 04 (faster)`
`02 City → (not covered) 07 → ask for my city, or play with the researched city's rules → 03`

---

## 5. Competitor and review research (desk research, 2026-10-05)

| Competitor | What it does | What the reviews say | Our decision |
|---|---|---|---|
| [Afvalwijzer](https://apps.apple.com/nl/app/afvalwijzer/id479597294) | Collection dates and local rules per address | 1.9/5 from ~1,400 reviews. Problems: outdated data, missing summer dates, postcode login fails ("authenticatie mislukt"), notifications stop working or feel like spam, some postcodes unsupported, crashes on some devices. | No login, a "checked [date]" label on each rule, no push notifications, a clear "city not covered" state |
| [Afvalscheidingswijzer](https://www.milieucentraal.nl/tests-en-tools/afvalscheidingswijzer/) (Milieu Centraal) | Look up which bin an item goes in | Review text not collected | It's a lookup you have to remember to open. Ours is a game that builds a habit. |
| [Omrin Afvalwijzer 2026](https://www.omrin.nl/media/a2ocvunp/6466_bro_afvalwijzer_nl_2026-def.pdf) + [English edition](https://www.omrin.nl/media/0cphazwn/6466-omri_bro_afvalwijzer_2026-engels.pdf) + Omrin Afvalapp | The official local guide (20 pages, Dutch **and English**) and app, from the waste company itself | Not reviewed (found 2026-10-07) | It already exists in English, so the gap is engagement and memory, not missing information. Its rules are our source (`research/03-omrin-rules-leeuwarden.md`) |

**Gap:** every existing tool is a utility. None use Play to make people *learn* the rules.

**Limits:**
- Ratings come from App Store pages and search snippets, collected on 2026-10-05.
- I didn't test the competitor apps hands-on.
- The Afvalwijzer reviews are about its collection-date features, not sorting.

The other sectors researched for the ideas we rejected (letter decoders, flatmate apps, phone-menu tools, remote tech support) are summarised in the `PROJECT_BRIEF.md` decision log.

---

## 6. Heuristics used (Learn N2 usability catch-up)

| Heuristic | Where it's used |
|---|---|
| Nielsen #1 Visibility of system status | 01 time promise, 02 check dates, 04 progress bar |
| Nielsen #2 Match with the real world | Real bin colours and names, everyday item names |
| Nielsen #5 Error prevention | No login |
| Nielsen #6 Recognition rather than recall | Bins always visible |
| Nielsen #9 Recognise, diagnose, recover from errors | 05 explanation sheet, 07 not-covered state |
| Nielsen #10 Help and documentation | 03 (one screen, possibly cut after testing) |
| Norman: signifiers and feedback | Bin colours, drag feedback |
| Laws of UX: Goal-gradient, Fitts's Law, Peak-End | 04 progress, 04 bin size and position, 06 summary |

After each test, record whether each heuristic held up. That's evidence for Learn N2.

---

## 7. Two-week plan (deadline Fri 23 Oct, confirmed by the lecturer)

Weeks 41 and 43. The autumn break (week 42) is off.

| Day | Do |
|---|---|
| Mon 5 | Idea ✅. Research ✅. Mid-fi v1 + lo-fi v0 in Figma ✅. Plan of action + success criteria. Recruit. |
| Tue 6 | Validation (card sort + interviews). Omrin rules for 10–15 items (source + date each), then ask Omrin to check them. Test script. Learn backlog. |
| Wed 7 | **Test 1** on the mid-fi screens + lo-fi alternatives (2 people). Log the changes. Mid-fi v2 *by hand*. |
| Thu 8 – Fri 9 | **Build v1**: static game (rules in JSON), all screens, deployed to a link. Book the week-43 testers before the break. |
| Week 42 | Autumn break. |
| Mon 19 | **Test 2** on build v1 (4+ people, think-aloud + SUS). Log findings and first- vs last-round accuracy. |
| Tue 20 – Wed 21 | **Database + build v2** (§2b), plus the test-2 fixes. Redeploy. |
| Thu 22 | **Test 3** on build v2 (3+ people, think-aloud + SUS). Score the success criteria. |
| Fri 23 | Final fixes. Process book, CMD Canvases, reflection. **Deadline.** |

### Success criteria
1. At least 9 non-classmates from the target group test it across 3 rounds, and every round is documented.
2. In tests 2 and 3, testers answer more items correctly in their last round than in their first.
3. SUS ≥ 68 in test 3, and every test finding maps to a logged design change.

### Documentation honesty
State in the process book that the v1 mid-fi screens were generated with a script or AI from this spec. v2 onwards are my own edits, based on the test findings.
