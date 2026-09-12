# Checklist Component — Slide Deck Outline

Third segment of a portfolio review: personal intro, Anvil overview, this deep dive, outro.
Target 18 minutes. Roughly 20 seconds a slide, with four moments driven live.

Follows the Anvil deck, so this is the zoom-in counterpart. Nothing here re-explains design
systems, and the accessibility beat has to read as component depth rather than as the
system-level policy Anvil already covered.

What they should conclude: depth of craft on one small thing. Specifically that I found and
explored things nobody would find by looking, and that I care about pixels.

`[DRIVE]` marks a live bench I actually operate in front of them. Everything else is one idea
said out loud over a picture.

---

## Slide 1 — Title

Checklist. A component deep dive.

## Slide 2 — My role

Sole designer. This started as two tickets on my plate, I specced both from prototypes, and
handed them to an engineer to build. The design system component came out of doing that work.

## Slide 3 — Where this lives

Mission Control is our customer platform. Collaboration Loops is the space where our Technical
Account Managers and their customers prepare for a meeting, work through it together, and look
back at what was agreed. A Loop has a discussion list in it.

## Slide 4 — The row today `[DRIVE]`

This is that list as it ships right now. You can tick an item and you can add one. That is all.
You cannot reorder them, you cannot edit the text after you have written it, and if two people
are in the list at once neither of them knows.

Do not point out the completed item yet. It is failing contrast and that pays off much later.

## Slide 5 — Reorder them

The first ask. A meeting agenda is not written in the order you want to talk about it, and right
now the only way to move an item is to delete it and write it again.

## Slide 6 — Edit them in place

The second ask, and the awkward one. The backend has supported editing since a ticket we shipped
over a year ago. The frontend just never wired it up.

## Slide 7 — Sub-items

The third ask. One topic with two or three things under it.

## Slide 8 — And several people at once

The fourth. These meetings are the whole point of the feature, so two people in the same list at
the same time is not an edge case, it is Tuesday.

## Slide 9 — Two tickets, one epic

Two of those got written up and landed on me: reordering, and inline editing. Both sized as
though they were small. My job was to spec them well enough that an engineer could build them
without me in the room.

## Slide 10 — And then Runbooks

While I was in it, a second product turned up that renders the same row. Runbooks are
event-triggered guides: when AWS has an outage, do this, then this, then get approval for that.
Visually and behaviourally, the same list. One instance is a feature. Two is a pattern.

## Slide 11 — What I landed on `[DRIVE]`

So here is where it ended up. Reordering, editing in place, sub-items, other people in the row,
and a few things you cannot see yet.

Drive it: tick something, drag something, click into the text and type.

## Slide 12 — How it got decided

Everything you just touched is a prototype I built, not a mockup I drew. That matters for the
next fifteen minutes, because it is the reason every decision after this has a number attached to
it instead of an opinion.

Worth saying out loud: every real bug in this project was found by driving the thing. A text
field that typed backwards. A list that announced "3 of 5" with eight rows on screen. A cancelled
drag that saved anyway. None of those are visible in a picture.

---

## Slide 13 — Editing: the invisible field

The field has no edges. Not a light border, not a subtle one. None, at rest, on hover, and while
you are typing. The pointer turning into a caret is the entire affordance.

The reason is that the text is the document. If editing it looks like filling in a form, you have
told people they are operating a control instead of writing.

## Slide 14 — Ruled out: an editor that opens

The first version opened an editor as an object. Bordered field, toolbar, Save and Cancel. It
works, and it announces that you have entered a mode. Editing a list item is not a mode, it is
typing.

## Slide 15 — Ruled out: a hairline on hover

Then a one pixel outline on hover, as a hint that the text was editable. I cut it. It was the
only thing on the row that moved when you did not ask it to, and a hint that distracting is not
worth the discoverability.

## Slide 16 — Editing never moves the words `[DRIVE]`

The obvious way to paint an edit state is a border and some padding. Both take up space, so every
glyph in the row shifts, and every row underneath it shifts too.

Measured: 9 pixels right, 7 pixels down, and a 14 pixel shove to everything below. Painting the
same state with a background and a shadow, which sit outside layout, measures zero and zero.

Drive it: click into the first item with the naive version on, then with the real one.

---

## Slide 17 — Reordering: how you pick a row up

A handle in the gutter, and the blank space of the row. An insertion line to show where it lands.
The row itself collapses to a single line that follows the cursor.

## Slide 18 — Ruled out: rows shifting out of the way

The nice version, where the list opens a gap as you drag. It only works when every row is the
same height. These are markdown, so they are not. A tall item displacing short ones makes the
list jump, and the gap you were aiming at slides out from under the cursor.

## Slide 19 — Ruled out: the whole row following the cursor

A full height block under the pointer covers the list you are trying to aim at. The thing in your
hand only has to say which row it is.

---

## Slide 20 — Sub-items: one level, and you can turn it off

Sub-items go one level deep and no further. More than that and this stops being a checklist.

The more useful half: a list can decline them. Turn nesting off and the same component withdraws
one gesture and one affordance. A flat agenda and a nested runbook are one thing configured
differently, which is the sharpest argument I have that this is a component and not two.

## Slide 21 — Ruled out: level by how far sideways you drag

The familiar model, where you push a row right to indent it. A sideways nudge is a fine motor
gesture, and requiring one excludes people before you have even started thinking about
accessibility. Reading the indent off which gap you are in means nothing depends on a horizontal
drag.

## Slide 22 — Ruled out: ticking a parent ticks its children

This one looks tidy and it is the one I feel strongest about. In a shared list, cascading means
one tick silently rewrites an item somebody else wrote and is watching. A rule that looks neat
for one person is a destructive write to somebody else's row.

---

## Slide 23 — Multiplayer: somebody is in this row

A small avatar hanging off the corner of the row. Deliberately not next to the author tag on the
right, because the row already has one face on it and a second one beside it reads as
co-authorship rather than as presence.

## Slide 24 — Ruled out: dimming the row

Fading the row while somebody types in it. It reads well and it measures 2.67 to 1, against the
4.5 the guidelines ask for. There is no opacity value that saves it, because the treatment works
by weakening the text and the text is the thing that has to stay readable.

## Slide 25 — Ruled out: locking the row

The obvious answer to two people editing: let the first one hold it. A lock is not a design, it
is scaffolding. It is what you build when you have given up on merging, and it teaches a habit
you have to untrain the moment real collaborative editing lands.

## Slide 26 — So merge, and accept that it garbles

Take the text they started from, the text they typed, and the text stored now, and combine all
three. Where they edited different parts, both survive. Where they edited the same words, you get
a garbled sentence somebody tidies up.

That is the right trade. Tidying a sentence is a smaller ask than reconstructing a paragraph you
cannot see.

---

## Slide 27 — Three gestures want the same pixels `[DRIVE]`

Here is where the two tickets collided. Reordering wants to grab the row. Editing wants to click
the text. Selecting text wants the same drag. All three are on the same element, and the conflict
comes down to a single CSS property.

Drive it: show the scorecard recomputing as the settings change.

## Slide 28 — None of the eight arrangements works

There are eight ways to arrange those three gestures and the prototype scores all of them. Not
one keeps all three. The best any of them manages is two.

Which means interaction design cannot settle this. Every arrangement is somebody losing
something, and there is nothing inside the interaction that ranks the losses.

---

## Slide 29 — Can you use it without a mouse `[DRIVE]`

What settled it came from outside. The guideline says anything you can do with a dragging
movement has to be possible with a single pointer. A keyboard is not a single pointer, and a
touchscreen has no hover, so the handle is not small there, it is absent.

Four inputs, one question: can you move a row. Dragging alone covers one of them. Adding keyboard
covers three, which is where most people stop. Move up and move down in the row menu covers all
four, and it is also the smallest thing to build.

Drive it: walk the settings from drag, to keyboard, to menu, and let the score recompute.

## Slide 30 — We had already shipped one that failed

Back to the row from the second slide. Completed items ship faded to fifty percent, which
measures 3.35 to 1. That fails, and it was not a proposal, it was live in the product.

Sixty percent measures 4.58 and passes, and it is the lowest value that does. Fifty five is still
short.

I found that by measuring it, not by looking at it. It looks fine.

## Slide 31 — Bigger targets, same pixels

The checkbox was twenty by twenty, under the minimum, and passing only because nothing else sat
near it. It is twenty four by twenty four now, with a negative margin that hands the extra space
back to layout, so the target grows and the glyph does not move.

Which is the same rule as the editing slide, arrived at again four rounds later: change what the
component is doing, never where the words are.

---

## Slide 32 — What the system would own

Four pieces. The row itself: layout, states, the gutter, hit areas. The editable text: inline
edit and the autosave contract. The sortable list: manual order, dragging, and the path that is
not dragging. And the presence marker: who is in a row and what they are doing to it.

A decomposition, not shipped packages. The prototypes are the artifact. The API is a sketch so
the boundary between the system and the app can be argued concretely instead of waved at.

## Slide 33 — They do not compose on their own

The obvious question is how those four go together, and the honest answer is that they fight.
Everything in the last fifteen minutes was one of them arguing with another.

The text: editing wants a block, reordering wants an inline. The gutter: presence wants the
avatar, focus wants a rule. The menu carries reordering's non-drag path and editing's entry
point, so neither piece owns it. The tab order spans three of them.

So it is not four peers. It is one row that arbitrates, plus three capabilities it can be
granted. And there are three things it deliberately refuses to decide: who is allowed to edit,
how the merging is implemented, and how the menu behaves once it is open.

---

## Slide 34 — Docs for the people building it

What a component like this actually ships as. Purpose, anatomy, states, interactions, content
guidelines, accessibility notes, and what it pairs with.

## Slide 35 — Docs an agent can read

The newer half of the problem. Increasingly the thing reading a component doc is an agent writing
the implementation, and an agent that misreads it produces confidently wrong code.

The prototypes already work this way. Every switch has a name, unknown values are ignored rather
than guessed at, and every decision has a URL that opens the component in exactly that state. So
a ticket, a doc, or a model can point at one configuration and mean precisely one thing.

## Slide 36 — Where it landed

Both tickets were specced from these prototypes and built by an engineer. The component is
approved as part of the Mission Control design system, on the argument that Runbooks is the
second consumer.

Thirty three questions. Thirty five things explored and rejected, eighteen of which are still
running if you want to poke at them.

One thing is still open, and it is the one that worries me: autosave with no save button has no
failure surface, so a failed write is silent data loss.

## Slide 37 — Thank you

Leave them the explorations index: every question, every variation, and the chosen one marked in
words.
