// Generates lo-fi wireframes for "Which Bin?" on a new page, with a yellow
// note next to each screen recording the design decision and where it came from.

const W = 390;
const H = 844;
const PAD = 24;
const CONTENT_W = W - PAD * 2;
const NOTE_W = 300;
const STRIDE = W + NOTE_W + 160;
const TOP = 160;

const COLOR = {
  white: { r: 1, g: 1, b: 1 },
  ink: { r: 0.1, g: 0.1, b: 0.1 },
  muted: { r: 0.45, g: 0.45, b: 0.45 },
  fill: { r: 0.93, g: 0.93, b: 0.93 },
  line: { r: 0.8, g: 0.8, b: 0.8 },
  note: { r: 1, g: 0.94, b: 0.6 },
  black: { r: 0, g: 0, b: 0 },
};

// Placeholder bin set. Replace with the researched municipality's real bins.
const BINS = ['GFT', 'Paper', 'PMD', 'Residual', 'Glass'];
const CITIES = ['Leeuwarden', 'Groningen', 'Amsterdam', 'Utrecht', 'Rotterdam'];

const solid = (color, opacity = 1) => [{ type: 'SOLID', color, opacity }];

function addRect(parent, { x, y, w, h, fill = COLOR.fill, radius = 8, stroke = false, opacity = 1, name = 'Box' }) {
  const rect = figma.createRectangle();
  rect.name = name;
  rect.x = x;
  rect.y = y;
  rect.resize(w, h);
  rect.fills = solid(fill, opacity);
  rect.cornerRadius = radius;
  if (stroke) {
    rect.strokes = solid(COLOR.line);
    rect.strokeWeight = 1;
  }
  parent.appendChild(rect);
  return rect;
}

function addText(parent, { x, y, value, size = 16, bold = false, color = COLOR.ink, width, align = 'LEFT' }) {
  const text = figma.createText();
  text.fontName = { family: 'Inter', style: bold ? 'Bold' : 'Regular' };
  text.fontSize = size;
  text.characters = value;
  text.fills = solid(color);
  text.x = x;
  text.y = y;
  if (width) {
    text.resize(width, text.height);
    text.textAutoResize = 'HEIGHT';
    text.textAlignHorizontal = align;
  }
  parent.appendChild(text);
  return text;
}

function addButton(parent, { y, label, primary = true }) {
  addRect(parent, {
    x: PAD, y, w: CONTENT_W, h: 52, radius: 12,
    fill: primary ? COLOR.ink : COLOR.white, stroke: !primary, name: `Button: ${label}`,
  });
  addText(parent, {
    x: PAD, y: y + 15, value: label, bold: true, width: CONTENT_W, align: 'CENTER',
    color: primary ? COLOR.white : COLOR.ink,
  });
}

function addHeader(parent, title) {
  addText(parent, { x: PAD, y: 60, value: '←', size: 24 });
  addText(parent, { x: PAD + 40, y: 62, value: title, size: 20, bold: true });
}

function addBinRow(parent, y) {
  const gap = 8;
  const binW = (CONTENT_W - gap * (BINS.length - 1)) / BINS.length;
  BINS.forEach((label, i) => {
    const x = PAD + i * (binW + gap);
    addRect(parent, { x, y, w: binW, h: 88, stroke: true, name: `Bin: ${label}` });
    addText(parent, { x, y: y + 96, value: label, size: 12, width: binW, align: 'CENTER' });
  });
}

function addItemCard(parent, y, label) {
  const size = 200;
  const x = (W - size) / 2;
  addRect(parent, { x, y, w: size, h: size, radius: 16, stroke: true, name: 'Item photo' });
  addText(parent, { x, y: y + size / 2 - 10, value: '[photo]', color: COLOR.muted, width: size, align: 'CENTER' });
  addText(parent, { x: PAD, y: y + size + 16, value: label, size: 20, bold: true, width: CONTENT_W, align: 'CENTER' });
}

function drawStart(frame) {
  addText(frame, { x: PAD, y: 240, value: 'Which Bin?', size: 44, bold: true, width: CONTENT_W, align: 'CENTER' });
  addText(frame, {
    x: PAD, y: 306, value: "Learn your city's waste-sorting rules in 2 minutes. No account needed.",
    size: 17, color: COLOR.muted, width: CONTENT_W, align: 'CENTER',
  });
  addBinRow(frame, 420);
  addButton(frame, { y: 660, label: 'Play' });
  addText(frame, { x: PAD, y: 732, value: 'How it works', width: CONTENT_W, align: 'CENTER', color: COLOR.muted });
}

function drawCityPicker(frame) {
  addHeader(frame, 'Where do you live?');
  addRect(frame, { x: PAD, y: 120, w: CONTENT_W, h: 48, radius: 12, fill: COLOR.white, stroke: true, name: 'Search' });
  addText(frame, { x: PAD + 16, y: 134, value: 'Search municipality…', color: COLOR.muted });
  CITIES.forEach((city, i) => {
    const y = 192 + i * 60;
    addText(frame, { x: PAD, y: y + 18, value: city });
    addText(frame, { x: PAD, y: y + 21, value: 'checked [date]', size: 12, color: COLOR.muted, width: CONTENT_W, align: 'RIGHT' });
    addRect(frame, { x: PAD, y: y + 59, w: CONTENT_W, h: 1, radius: 0, fill: COLOR.line, name: 'Divider' });
  });
  addText(frame, { x: PAD, y: 520, value: "My city isn't here →", bold: true });
}

function drawHowToPlay(frame) {
  addHeader(frame, 'How to play');
  addItemCard(frame, 130, 'Item');
  addText(frame, { x: PAD, y: 400, value: '↓', size: 32, width: CONTENT_W, align: 'CENTER' });
  addBinRow(frame, 450);
  addText(frame, {
    x: PAD, y: 590, value: 'Drag each item into the bin it belongs in. 3 lives per round. Every wrong answer tells you why.',
    color: COLOR.muted, width: CONTENT_W, align: 'CENTER',
  });
  addButton(frame, { y: 732, label: 'Start round' });
}

function drawRound(frame) {
  addText(frame, { x: PAD, y: 60, value: 'Lives 3', size: 14 });
  addText(frame, { x: PAD, y: 58, value: 'Score 120', bold: true, width: CONTENT_W, align: 'CENTER' });
  addText(frame, { x: PAD, y: 60, value: 'Streak ×3', size: 14, width: CONTENT_W, align: 'RIGHT' });
  addRect(frame, { x: PAD, y: 96, w: CONTENT_W, h: 8, radius: 4, name: 'Progress track' });
  addRect(frame, { x: PAD, y: 96, w: CONTENT_W * 0.4, h: 8, radius: 4, fill: COLOR.ink, name: 'Progress fill' });
  addText(frame, { x: PAD, y: 112, value: 'Item 4 of 10', size: 12, color: COLOR.muted });
  addItemCard(frame, 170, 'Pizza box');
  addText(frame, { x: PAD, y: 430, value: 'Drag it to a bin', color: COLOR.muted, width: CONTENT_W, align: 'CENTER' });
  addBinRow(frame, 640);
}

function drawWrongAnswer(frame) {
  drawRound(frame);
  addRect(frame, { x: 0, y: 0, w: W, h: H, radius: 0, fill: COLOR.black, opacity: 0.45, name: 'Scrim' });
  addRect(frame, { x: 0, y: 444, w: W, h: 400, radius: 24, fill: COLOR.white, name: 'Bottom sheet' });
  addText(frame, { x: PAD, y: 476, value: 'Not quite', size: 24, bold: true });
  addText(frame, { x: PAD, y: 518, value: 'Pizza box → [correct bin]', size: 18, bold: true });
  addText(frame, {
    x: PAD, y: 556, value: "[Why, in one sentence, from the municipality's own rules]",
    color: COLOR.muted, width: CONTENT_W,
  });
  addText(frame, { x: PAD, y: 640, value: 'Source: [municipality website] · checked [date]', size: 12, color: COLOR.muted });
  addButton(frame, { y: 744, label: 'Got it' });
}

function drawScore(frame) {
  addText(frame, { x: PAD, y: 100, value: 'Round complete', size: 28, bold: true, width: CONTENT_W, align: 'CENTER' });
  addText(frame, { x: PAD, y: 148, value: '8 / 10', size: 64, bold: true, width: CONTENT_W, align: 'CENTER' });
  addText(frame, { x: PAD, y: 240, value: 'Best streak: 5', color: COLOR.muted, width: CONTENT_W, align: 'CENTER' });
  addText(frame, { x: PAD, y: 310, value: 'Learn from these', bold: true });
  ['Pizza box → [bin]', 'Coffee cup → [bin]'].forEach((label, i) => {
    const y = 344 + i * 64;
    addRect(frame, { x: PAD, y, w: CONTENT_W, h: 52, radius: 12, fill: COLOR.white, stroke: true, name: `Mistake: ${label}` });
    addText(frame, { x: PAD + 16, y: y + 16, value: label });
  });
  addButton(frame, { y: 600, label: 'Next round (faster)' });
  addButton(frame, { y: 664, label: 'Real-life mode', primary: false });
  addText(frame, { x: PAD, y: 740, value: 'Share score', color: COLOR.muted, width: CONTENT_W, align: 'CENTER' });
}

function drawCityNotCovered(frame) {
  addHeader(frame, 'Your city');
  addRect(frame, { x: (W - 160) / 2, y: 170, w: 160, h: 160, radius: 80, stroke: true, name: 'Illustration' });
  addText(frame, { x: (W - 160) / 2, y: 240, value: '[illustration]', size: 12, color: COLOR.muted, width: 160, align: 'CENTER' });
  addText(frame, { x: PAD, y: 360, value: "We haven't checked [city] yet", size: 22, bold: true, width: CONTENT_W, align: 'CENTER' });
  addText(frame, {
    x: PAD, y: 400, value: "Sorting rules differ per municipality. We only show rules we've checked ourselves.",
    color: COLOR.muted, width: CONTENT_W, align: 'CENTER',
  });
  addButton(frame, { y: 664, label: 'Ask for my city' });
  addButton(frame, { y: 728, label: 'Play with [researched city] rules', primary: false });
}

const SCREENS = [
  {
    name: '01 Start',
    draw: drawStart,
    notes: [
      'No sign-up or login. Why: Afvalwijzer (1.9★, ~1,400 App Store reviews) users report "authenticatie mislukt" when logging in with their postcode.',
      'Nielsen #5 error prevention: no login means one less way to fail.',
      '"2 minutes" sets expectations (Nielsen #1 visibility of system status).',
      'Bins shown up front: recognition rather than recall (Nielsen #6).',
    ],
  },
  {
    name: '02 Pick your city',
    draw: drawCityPicker,
    notes: [
      'Sorting rules differ per municipality. This screen makes that hidden fact visible (theme: Invisible/Visible).',
      'Each city shows when its rules were last checked. Why: Afvalwijzer reviews complain about outdated information.',
      "v1 scope: one city fully researched. Others lead to '07 City not covered'.",
    ],
  },
  {
    name: '03 How to play',
    draw: drawHowToPlay,
    notes: [
      'One screen of instructions, then play (Nielsen #10 help and documentation, kept minimal).',
      "Bins use the same colours and labels as the real bins in the chosen city (Norman: signifiers; Nielsen #2 match with the real world).",
      'Test question: do testers understand drag-and-drop without this screen? If yes, cut it.',
    ],
  },
  {
    name: '04 Sorting round',
    draw: drawRound,
    notes: [
      "Progress bar + 'Item 4 of 10' (Goal-gradient effect; Nielsen #1).",
      "Large drop targets at the bottom, in thumb reach (Fitts's Law).",
      'Lives, score and streak make it Play. Speed goes up each round (challenge).',
      "Everyday item names ('pizza box', not 'cardboard packaging') (Nielsen #2).",
    ],
  },
  {
    name: '05 Wrong answer',
    draw: drawWrongAnswer,
    notes: [
      "Errors explain why, not just 'wrong' (Nielsen #9: recognise, diagnose, recover).",
      'Every rule shows its source and check date so the player can trust it.',
      "[Bracketed] content gets researched from the municipality's own site. Never invent a rule.",
    ],
  },
  {
    name: '06 Round score',
    draw: drawScore,
    notes: [
      'End on a summary, not a fail (Peak-End rule).',
      'Mistakes repeated as a short list: the actual learning moment.',
      "Next round is faster (Play). 'Real-life mode' is a stretch goal: items from the player's own kitchen.",
      "No push notifications in v1. Why: Afvalwijzer reviews call its notifications spam ('Maak het opt-in'). Any later reminder is opt-in.",
    ],
  },
  {
    name: '07 City not covered',
    draw: drawCityNotCovered,
    notes: [
      "A clear state instead of a cryptic error. Why: Afvalwijzer reviewers hit an unexplained error when their postcode area isn't supported.",
      'Nielsen #9: say what happened and offer a way forward.',
      'City requests show demand and decide which city to research next.',
    ],
  },
];

function createScreen(page, index, name) {
  const frame = figma.createFrame();
  frame.name = name;
  frame.resize(W, H);
  frame.x = index * STRIDE;
  frame.y = TOP;
  frame.fills = solid(COLOR.white);
  frame.clipsContent = true;
  page.appendChild(frame);
  return frame;
}

function addNote(page, frame, lines) {
  const note = figma.createFrame();
  note.name = `Notes: ${frame.name}`;
  note.layoutMode = 'VERTICAL';
  note.resize(NOTE_W, 100);
  note.primaryAxisSizingMode = 'AUTO';
  note.counterAxisSizingMode = 'FIXED';
  note.paddingTop = 16;
  note.paddingBottom = 16;
  note.paddingLeft = 16;
  note.paddingRight = 16;
  note.itemSpacing = 12;
  note.cornerRadius = 8;
  note.fills = solid(COLOR.note);
  note.x = frame.x + W + 32;
  note.y = frame.y;
  lines.forEach((line) => {
    const text = figma.createText();
    text.fontName = { family: 'Inter', style: 'Regular' };
    text.fontSize = 13;
    text.characters = `• ${line}`;
    note.appendChild(text);
    text.layoutAlign = 'STRETCH';
    text.textAutoResize = 'HEIGHT';
  });
  page.appendChild(note);
}

async function main() {
  await Promise.all([
    figma.loadFontAsync({ family: 'Inter', style: 'Regular' }),
    figma.loadFontAsync({ family: 'Inter', style: 'Bold' }),
  ]);

  const page = figma.createPage();
  page.name = 'Which Bin? · Wireframes v1';
  await figma.setCurrentPageAsync(page);

  addText(page, { x: 0, y: 0, value: 'Which Bin? · lo-fi wireframes v1', size: 32, bold: true });
  addText(page, {
    x: 0, y: 52, size: 16, color: COLOR.muted,
    value: 'Yellow notes = design decision + where it came from (heuristic or competitor review). [Brackets] = content still to research.',
  });

  const frames = SCREENS.map((screen, i) => {
    const frame = createScreen(page, i, screen.name);
    screen.draw(frame);
    addNote(page, frame, screen.notes);
    return frame;
  });

  figma.viewport.scrollAndZoomIntoView(frames);
  figma.closePlugin(`Created ${frames.length} wireframes on "${page.name}"`);
}

main().catch((err) => figma.closePlugin(`Wireframe plugin failed: ${err.message}`));
