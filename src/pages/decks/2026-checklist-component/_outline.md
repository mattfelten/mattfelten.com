# Checklist Component — Slide Deck Outline

Third segment of a portfolio review: personal intro, Anvil overview, this deep dive, outro.
Target 18 minutes. Estimated at about 17 as built.

Follows the Anvil deck, so this is the zoom-in counterpart. Nothing here re-explains design
systems, and the accessibility beat has to read as component depth rather than as the
system-level policy Anvil already covered.

What they should conclude: depth of craft on one small thing. Specifically that I found and
explored things nobody would find by looking, and that I care about pixels.

**This file matches the deck as built: 31 slides, 14 of them running a live prototype, 1
placeholder.** Edit it before touching any `.astro`. What was cut on the way here, and why, is
recorded at the bottom so it is not lost.

`[DRIVE]` marks a prototype I actually operate in front of them.

---

## Slide 1 — Title

Checklist. A component deep dive.

## Slide 2 — Original Feature `[DRIVE]`

The list as it ships right now. You can tick an item and you can add one. That is all. You
cannot reorder them, you cannot edit the text after you have written it, and if two people are
in the list at once neither of them knows.

Do not point out the completed item. It is failing contrast and that pays off on slide 22, and
the point only lands if nobody was told to look.

## Slide 3 — From Feature to Component

Six things in one breath: reorder, edit in place, sub-items, several people at once, the two
tickets they arrived as, and Runbooks turning up as a second consumer. One instance is a
feature. Two is a pattern.

## Slide 4 — Final Component `[DRIVE]`

Everything at once. Tick something, drag something, click into the text and type. Collapse the
parent, drag it, watch its children come with it, then open the row menu on a child.

Worth saying here: everything you are about to see is a prototype I built, not a mockup I drew.
That is why every decision after this has a number attached to it instead of an opinion.

---

## Slide 5 — Editing

Section title.

## Slide 6 — Editing `[DRIVE]`

The field has no edges. Not a light border, not a subtle one. None, at rest, on hover, and
while you are typing. The pointer turning into a caret is the entire affordance.

The reason is that the text is the document. If editing it looks like filling in a form, you
have told people they are operating a control instead of writing.

The top row is already open on arrival, because a closed field just shows an ordinary list.

## Slide 7 — Editor as an Object `[REJECTED]` `[DRIVE]`

The first version opened an editor as an object. Bordered field, toolbar, Save and Cancel. It
works, and it announces that you have entered a mode. Editing a list item is not a mode, it is
typing. Watch what it does to the rows underneath.

## Slide 8 — Field with Edges `[REJECTED]` `[DRIVE]`

A one pixel outline, built the naive way, so the border and the padding are real and take up
space. Click out and back in: 9 pixels right, 7 pixels down, and a 14 pixel shove to everything
below. The chosen version measures zero and zero, because it paints with a background and a
shadow, which sit outside layout.

---

## Slide 9 — Reordering

Section title.

## Slide 10 — Reordering `[DRIVE]`

A handle in the gutter, the blank space of the row, and an insertion line to show where it
lands. The row collapses to a single line that follows the cursor.

The half that matters is Move up and Move down in the row menu. Slide 22 is where that gets its
reason. Here it is just shown.

## Slide 11 — Rows shift out of the way `[REJECTED]` `[DRIVE]`

The nice version, where the list opens a gap as you drag. It only works when every row is the
same height. These are markdown, so they are not. A tall item displacing short ones makes the
list jump, and the gap you were aiming at slides out from under the cursor.

## Slide 12 — Row follows cursor `[REJECTED]` `[DRIVE]`

Drag the tallest row. A full height block under the pointer covers the list you are trying to
aim at. The thing in your hand only has to say which row it is.

---

## Slide 13 — Nested Items

Section title.

## Slide 14 — Nested Items `[DRIVE]`

Sub-items go one level deep and no further. The more useful half: a list can decline them. Turn
nesting off and the same component withdraws one gesture and one affordance. A flat agenda and a
nested runbook are one thing configured differently, which is the sharpest argument I have that
this is a component and not two.

## Slide 15 — Unlimited Nesting `[REJECTED]` `[DRIVE]`

Five levels. Every step costs another 32 pixels of the text column, so by the fourth the row is
mostly margin.

## Slide 16 — Parent ticks its children `[REJECTED]` `[DRIVE]`

Tick the first row and watch both children go with it. This one looks tidy and it is the one I
feel strongest about. In a shared list, cascading means one tick silently rewrites an item
somebody else wrote and is watching. A rule that looks neat for one person is a destructive
write to somebody else's row.

---

## Slide 17 — Multiplayer

Section title.

## Slide 18 — Multiplayer `[DRIVE]`

A small avatar hanging off the corner of the row. Deliberately not next to the author tag on the
right, because the row already has one face on it and a second one beside it reads as
co-authorship rather than as presence.

Say nothing for the first few seconds. Let them watch a row they did not touch start changing.

## Slide 19 — Lock the row `[REJECTED]` `[DRIVE]`

The obvious answer to two people editing: let the first one hold it. Drive it, try to type in
the row somebody else is in.

Two reasons, and say both. A lock is not a design, it is scaffolding. It is what you build when
you have given up on merging, and it teaches a habit you untrain the moment real collaborative
editing lands. And the dim that announces the lock measures 2.67 to 1 against the 4.5 required.
No opacity value saves it, because the treatment weakens the text and the text has to stay
readable. The affordance fails on its own terms even if the rule were right.

## Slide 20 — Highlight the row `[REJECTED]` `[DRIVE]`

The better rejection of the two, because it is not rejected on a number. It keeps the text at
full strength, so it passes.

It loses because the row already changes its background on hover. On a pointer the two states
are nearly the same picture, and a signal that says somebody is here cannot also be the signal
that says your mouse is here. That is a collision you only find by building it into a row that
already has states.

---

## Slide 21 — Accessibility

Section title.

## Slide 22 — Accessibility

Eight areas, not eight decisions. Heading over answer: colour contrast, target size, keyboard,
pointer gestures, touch, screen reader, focus visible, reduced motion.

Read the headings if the room is quiet. The point is that somebody scanning them can see nothing
was skipped, rather than reading decisions and working out which areas they cover.

## Slide 23 — Accessible Implementation

Four things a person does while implementing. Use object names. Include a section heading.
Handle permissions. Name the people.

The line worth saying: the component can be accessible and the page can still fail, and these are
the seams where that happens.

---

## Slide 24 — The Component

Section title.

## Slide 25 — Component Structure

The diagram. Three nested levels, one colour each: the Checklist, a ChecklistRow, and the parts a
row is assembled from, with the composer in its own colour because it is not a row. A sub-row is
drawn as a real child with exactly the same parts, which is the one-level ceiling and the
nesting-as-capability argument in one picture.

## Slide 26 — Component API

The props, which are the decisions restated as a surface. Point at `nesting`: false withdraws the
gesture, the affordance, and flattens the data.

The ones that are not props are the ones a consumer should not be able to get wrong.

## Slide 27 — Object Types

What you hand it. A row is five fields and a boolean, which is worth seeing after fifteen minutes
of argument about them. `parentId` is the entire nesting model: one nullable field is what one
level costs in the data.

`checked`, not `done`, because the component knows the box is ticked and not what that means to
you. Presence hangs off the item, so a row can be rendered without its parent looking up who is
in it.

## Slide 28 — Implementation

Loops and Runbooks side by side. They differ by four lines of configuration. Runbooks is the
shorter call, and it never has to know that reordering, presence and the author tag exist.

Say that out loud rather than putting it on the slide.

## Slide 29 — Docs `[PLACEHOLDER]`

**Open.** Either build a real docs page or reframe the slide around the bench param vocabulary,
which is already machine-readable by construction. Recommendation is to show what exists. The
differentiating idea is agent-readable component docs: named values only, unknown values ignored
rather than guessed, and every decision addressable by a URL that opens the component in exactly
that state.

## Slide 30 — Next Steps

Four open threads, named rather than stated. Autosave failures, the only correctness problem
left. More nesting levels, a ceiling I chose rather than one anybody asked for. The multiplayer
lock, and whether merging removed the reason for one. And character-level merging: it merges at
save, not per keystroke, a CRDT is the destination, and it is backend work because the text is
one string that the activity stream, emails and search all expect to stay one.

Ending on open questions rather than a scoreboard, because a scoreboard invites nodding and these
invite the panel to push.

## Slide 31 — Thank you

Leave them the explorations index: every question, every variation, and the chosen one marked in
words.

---

## What was cut, and why

Kept here so nothing gets rebuilt by accident.

**The arbitration scorecard, and the eight arrangements.** Three gestures want the same pixels,
the prototype scores all eight ways of arranging them, and not one keeps all three. It was cut
because the scorecard panel is not legible at presentation scale. Measured: it renders about
1195 pixels tall against a usable slide budget of roughly 780. The same is true of the contrast
table at about 2090. Both are working instruments, not slide graphics. The argument survives in
Matt's mouth on slides 10 and 23, and both panels are still reachable from the explorations
index.

**The long opening.** Role, where this lives, and the four asks each had their own slide. They
are now compressed into slides 2 to 4. The deck is a component deep dive following an Anvil
overview, so the context does not need re-establishing.

**Prior versions of this file described 37 slides.** That was the pre-restructure narrative.
The feature-section shape replaced it.
