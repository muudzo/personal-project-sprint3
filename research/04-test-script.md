# Test script: tests 1, 2 and 3 (remote, think-aloud + SUS)

> One script for all three rounds. **Test 1** (Wed 7 Oct): mid-fi prototype + lo-fi alternatives, 2 internationals. **Test 2** (Mon 19 Oct): build v1, 4+. **Test 3** (Thu 22 Oct): build v2 with the database, 3+.
> Testers are international students or expats in Leeuwarden, **never classmates**. Name them P1, P2… in your notes; no real names anywhere.

## Before the session (5 min)
- [ ] The link opens without a login. In Figma: **Share → "Anyone with the link" → can view**.
- [ ] Recording consent is ready; notes template open (bottom of this file).
- [ ] Test 1 only: the lo-fi page is ready to screen-share (alternatives 04-B, 04-C, 05-B).

**Prototype links (test 1)**
- Full flow: https://www.figma.com/proto/ldR4tgGcytz9yPgP7rgJNO?node-id=1-4&starting-point-node-id=1%3A4
- Round only (skips How to play): https://www.figma.com/proto/ldR4tgGcytz9yPgP7rgJNO?node-id=1-74&starting-point-node-id=1%3A74

Use **full flow for P1** and **round only for P2**. That answers the spec's question: is drag-and-drop understood without screen 03?

**Known limits of the test 1 prototype** (don't count these as findings):
- The bins still have **placeholder names** (GFT, Paper, PMD, Residual, Glass). Leeuwarden has no PMD bin. If a tester says so, note it as a v2 content point.
- In the round, **dragging the item card** or **tapping any bin** opens "Not quite"; "Got it" jumps to the end of the round.
- "Real-life mode", "Share score" and "Ask for my city" do nothing yet.

---

## 1. Welcome and consent (2 min, read out)
> "Thanks for helping! I'm testing a small game about waste sorting in Leeuwarden. **I'm testing the game, not you.** There are no wrong answers, and if something is confusing, that's exactly what I need to hear.
> Please **think out loud**: say what you see, what you expect, and what you're trying to do.
> I'll take notes and, if you're OK with it, record the screen. Your name won't appear anywhere, and you can stop at any time."

**Test 3 only, add:** "The game saves your answers anonymously, without your name or anything that identifies you, so it can show how many players got an item wrong."

## 2. Warm-up (2 min)
1. Where are you from, and how long have you lived in the Netherlands / Leeuwarden?
2. House or apartment? Do you have bins at home, or do you use underground containers?
3. How do you usually find out where something goes?

## 3. Tasks: test 1 (mid-fi prototype, 15 min)
Give one task at a time, then stay quiet. If someone is stuck for 30 seconds, note it and give the next step.

| # | Task (say this) | Watch for |
|---|---|---|
| T1 | "You just moved to Leeuwarden and a friend sent you this game. Start playing." | Do they understand what the game is for before pressing Play? Do they pick Leeuwarden? |
| T2 | "Put the pizza box where you think it goes." | **Drag or tap?** First attempt? Hesitation? (P2: no How-to-play screen) |
| T3 | (On "Not quite") "What is this screen telling you?" | Do they read the *why*? Do they notice the **source and check date**, and do they trust it? |
| T4 | "Finish the round and tell me how you did." | Do they notice "Learn from these"? Is "Next round (faster)" clear? |
| T5 | "Your friend lives in Groningen. What would they see?" | Does "We haven't checked [city] yet" read as **honest or broken**? |

### Alternatives (lo-fi page, 5 min)
Screen-share the lo-fi page. Ask for each pair: **"Which would you rather use, and why?"**
- Sorting: **04 drag** vs **04-B tap a bin** vs **04-C bin grid with "not a bin"**
- Wrong answer: **05 bottom sheet** vs **05-B full screen**

Write down the choice **and the reason**, in their words.

## 4. Tasks: tests 2 and 3 (build, 15 min)
The tester opens the link **on their own phone** and shares their screen.

| # | Task (say this) | Watch for |
|---|---|---|
| T1 | "Open the link and start playing." | First impression, time to the first drag |
| T2 | "Play a full round." | Errors, hesitation, the drag itself on a real phone |
| T3 | "Play one more round." | **Note the score of the first and last round** (success criterion 2) |
| T4 | *(test 3)* After a mistake: "What does this line tell you?" | Do they notice **"x of y players got this wrong too"**? Does it change how the mistake feels? |

Then the **SUS** questionnaire (section 6).

## 5. Think-aloud prompts (neutral only)
- "What are you thinking now?"
- "What do you expect will happen?"
- "Keep talking, please."
- When they ask *you* something: "What would you do if I weren't here?"

**Never** explain the interface, say "right" or "wrong", or point at anything.

## 6. SUS: System Usability Scale (tests 2 and 3)
Read each statement. Answer from **1 = strongly disagree** to **5 = strongly agree**. ("System" is replaced with "game", the usual adaptation.)

1. I think that I would like to use this game frequently.
2. I found the game unnecessarily complex.
3. I thought the game was easy to use.
4. I think that I would need the support of a technical person to be able to use this game.
5. I found the various functions in this game were well integrated.
6. I thought there was too much inconsistency in this game.
7. I would imagine that most people would learn to use this game very quickly.
8. I found the game very cumbersome to use.
9. I felt very confident using the game.
10. I needed to learn a lot of things before I could get going with this game.

**Score:** odd items: answer − 1. Even items: 5 − answer. Add all 10 and **multiply by 2.5** (0–100). **68 is average**; the target for test 3 is **68+**.

## 7. Close (2 min)
1. "What was the most confusing moment?"
2. "Did you learn a rule you didn't know?"
3. "Can I send you the next version to try?" Test 2 is **Mon 19 Oct**, test 3 is **Thu 22 Oct**. Ask before the autumn break!

Thank them.

---

## Notes template (one row per finding, per tester)

| P# | Test | Screen | What happened (their words) | Heuristic (spec §6) | Severity (1–3) | Design change | Logged in changes log? |
|---|---|---|---|---|---|---|---|
| P1 | 1 | 04 | | | | | |

**Per tester (tests 2 and 3):** first-round score · last-round score · SUS score.

**After each round, within a day:** log every finding as a design change (SCRUM-25 / SCRUM-50), and fill in the "held up?" column for each heuristic in spec §6.
