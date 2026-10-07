# Plan of action: Which Bin? (Sprint 3)

> **Written:** 2026-10-07 (the plan has been tracked in Jira since 2026-10-05) · **Deadline:** Fri 23 Oct 2026, confirmed by the lecturer · **Weeks:** 41 and 43, autumn break off
> Drafted with Claude (AI) from `WHICH_BIN_SPEC.md`. Reviewed by me on: ____ (logged in `AI_USE_LOG.md`)

## Goal
A playable mobile web game that makes Leeuwarden's invisible sorting rules learnable for international students and expats, developed in 3 iterations and tested with the target group outside class.

## Approach
1. **Research:** Leeuwarden's own survey, competitor reviews, Omrin's rules (with source and date for each), and validation with 6–8 internationals (card sort + interview).
2. **Iteration 1:** lo-fi and mid-fi screens → **test 1** (2 internationals) → mid-fi v2 by hand.
3. **Iteration 2:** build v1, a static game live on a link → **test 2** (4+ internationals).
4. **Iteration 3:** build v2 with an anonymous answer database → **test 3** (3+ internationals).
5. **Documentation:** each test section is written the day after the test; the process book is put together on Fri 23.

## Schedule
The day-by-day plan is in `WHICH_BIN_SPEC.md` §7, and the to-do list is the [Jira board](https://tatendawalters.atlassian.net/jira/software/projects/SCRUM/boards/1): sprint "Week 41" (5–11 Oct) and sprint "Week 43" (19–23 Oct).

## Success criteria
1. At least **9 non-classmates** from the target group test it across **3 rounds**, and every round is documented.
2. In tests 2 and 3, testers answer **more items correctly in their last round than in their first**.
3. **SUS ≥ 68** in test 3, and **every test finding maps to a logged design change**.

## Stakeholders
| Who | Role |
|---|---|
| Internationals in Leeuwarden | Validation, tests 1–3 |
| Omrin (syp@omrin.nl) | Checks the rule content, answers the open items |
| Mentor | Confirms the 9 EC claim; checks my AI rules |
| Usability teacher | What's essential from the missed weeks; feedback on my test methods |
| Lecturer | Deliverables and rubric for Fri 23 |
| Peers | Comparison for Learn N2; a peer walk-through of my code |

## Risks
| Risk | What I do about it |
|---|---|
| Testers travel during the autumn break | Book the week-43 testers before Fri 9 Oct |
| Omrin doesn't reply in time | The game only uses the 11 confirmed rules; swap the 4 open items for confirmed ones |
| Coding the core game takes longer than planned | Core loop first; the database never blocks play; ask for help early |
| AI does the learning for me | My own AI rules (week 41), an AI-use log, and explaining my code without AI |
| The problem turns out to be hassle, not knowledge | Validation decides this on day 2. If so, adjust the concept (e.g. towards Friction!) and log it |
