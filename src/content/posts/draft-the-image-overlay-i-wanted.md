---
title: The Image Overlay I Wanted
description: Building a custom image overlay for this site. URL state that doesn't pollute browser history, click-to-zoom for retina screenshots, focus-trap-react for accessibility, motion on a gentle curve.
---

Image overlays are a solved problem on paper. There are dozens of libraries. But every time I tried one for this site, something was off. The URL didn't update. The back button reopened images I'd already closed. The zoom didn't work on retina screenshots. Accessibility was rough or missing. So I built one that does what I want.

The code is on GitHub. [LightboxIsland.jsx](https://github.com/mattfelten/mattfelten.com/blob/main/src/components/LightboxIsland.jsx) and [LightboxIsland.css](https://github.com/mattfelten/mattfelten.com/blob/main/src/components/LightboxIsland.css). The rest of this post is what's interesting about how it works.

## UI options I considered

I started with a 350px right rail. Close button on top, caption underneath.

```jsx
<div className="flex h-screen">
  <div className="flex-1">{/* image */}</div>
  <aside className="w-[350px] border-l">
    <button>Close</button>
    {caption && <p>{caption}</p>}
  </aside>
</div>
```

Looked editorial in mockups. The problem became obvious as soon as I had it on the page. Case study images are usually 16:9, and a side rail just steals horizontal space from the image. Images may or may not have captions, so the rail was often empty. It existed to hold something that wasn't there.

Next try was a row at the bottom. Caption left, close right.

```jsx
<div className="flex flex-col h-screen">
  <div className="flex-1">{/* image */}</div>
  <div className="flex justify-between border-t pt-4">
    {caption && <p className="max-w-md">{caption}</p>}
    <button>Close</button>
  </div>
</div>
```

Better, but still chrome wrapped around the image. When there was no caption, the row sat there waiting for something that wasn't going to show up.

The version that shipped doesn't have a row. The close button floats top-right. The caption, when one exists, floats bottom-left. The image fills everything in between.

```jsx
<div className="relative h-screen">
  <div className="flex h-full items-center justify-center">
    {/* image */}
  </div>
  {caption && (
    <p className="absolute bottom-8 left-8 max-w-md">{caption}</p>
  )}
  <button className="absolute top-6 right-6">×</button>
</div>
```

If neither caption nor close interrupts the frame, the image owns it. That was the goal from the start.

## URL state

Three things I wanted from the URL behavior, simultaneously.

**Shareable URLs.** Opening an image updates the URL to `/work/atlas?lightbox=concept-dashboard`. Send the link, the recipient sees the same view.

**Back-button-closes.** Press the browser back button while the overlay is open and the overlay closes. The user stays on the case study.

**No history pollution.** Open ten images, close each, then press back. You should go to the previous page, not cycle back through ten previously closed images.

The first two are normal `history.pushState` behavior. The third one needs a trick.

```js
const closeLightbox = () => {
  window.history.replaceState({}, '', urlWith(null));
  window.history.back();
};
```

`replaceState` cleans the URL of the current entry first. Then `history.back()` pops it. The popped entry no longer contains an overlay URL, so even if a user navigates forward into it later, the overlay doesn't reopen.

Opening is regular pushState.

```js
window.history.pushState({ lightbox: id }, '', urlWith(id));
setAsset(next);
```

And a `popstate` listener reconciles state with the URL when the browser navigates within the same document.

This approach doesn't fight the platform. The browser still owns history. I'm just making sure each pushed entry leaves no trace once it's been popped.

## Click to zoom

Cursor changes to `zoom-in` over the image. Clicking renders it at its natural pixel size. The container scrolls. For retina case study screenshots, usually 2880×1800 or larger, this lets readers inspect details without leaving the page.

Two states. CSS handles both.

```css
.lb-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
.lb-image.zoomable { cursor: zoom-in; }

.lb-image-area.zoomed > .lb-image {
  max-width: none;
  max-height: none;
  width: auto;
  height: auto;
  cursor: zoom-out;
}
```

The click handler captures coordinates and scrolls so the click point ends up roughly centered after the zoom.

```js
const onImgClick = e => {
  if (!canZoom) return;
  if (zoomed) {
    setZoomed(false);
    return;
  }
  const rect = e.currentTarget.getBoundingClientRect();
  const xRatio = (e.clientX - rect.left) / rect.width;
  const yRatio = (e.clientY - rect.top) / rect.height;
  setZoomed(true);
  requestAnimationFrame(() => {
    const container = imageAreaRef.current;
    const img = imgRef.current;
    container.scrollTo({
      left: img.naturalWidth * xRatio - container.clientWidth / 2,
      top: img.naturalHeight * yRatio - container.clientHeight / 2,
    });
  });
};
```

The `.zoomable` class only gets added when the image is actually larger than its displayed size. The check happens on load.

```js
const onImgLoad = e => {
  const img = e.currentTarget;
  setCanZoom(
    img.naturalWidth > img.clientWidth ||
      img.naturalHeight > img.clientHeight,
  );
};
```

No point offering zoom on a thumbnail that's already at native size. The cursor stays default and the click is a no-op.

## Animation

Three things choreographed on open.

**Backdrop fades in.** 280ms, ease-out. Sets the surface.

**Image scales in.** From 0.975 to 1.0 with a fade. 440ms, 60ms delay.

**Close button and caption fade up.** Staggered 200ms and 240ms delays.

```css
@keyframes lb-image-in {
  from { opacity: 0; transform: scale(0.975); }
  to { opacity: 1; transform: scale(1); }
}

.lb-image {
  animation: lb-image-in 440ms cubic-bezier(0.16, 1, 0.3, 1) 60ms both;
}
```

The curve is `cubic-bezier(0.16, 1, 0.3, 1)`. A gentle deceleration with no overshoot. Feels less mechanical than `ease-out` for short transitions.

## Accessibility

The dialog uses `role="dialog"` with `aria-modal="true"` and an `aria-label` set to the image's alt text. When focus moves into the dialog, screen readers announce it. I considered an explicit `aria-live` region for the open event but skipped it. The dialog's label covers the same purpose without risking double-announcement.

Focus management uses [focus-trap-react](https://github.com/focus-trap/focus-trap-react). When the overlay opens, Tab and Shift+Tab cycle through focusable elements inside the card (the close button, plus any links in a caption). Tab can't escape into the case study content behind the overlay.

```jsx
<FocusTrap focusTrapOptions={{
  initialFocus: false,
  fallbackFocus: () => cardRef.current,
  escapeDeactivates: false,
  clickOutsideDeactivates: false,
  allowOutsideClick: true,
}}>
  <div className="lb-backdrop" onClick={closeLightbox}>
    {/* card and contents */}
  </div>
</FocusTrap>
```

The card itself has `tabIndex={-1}` and `outline: none`. That lets me move focus to it programmatically when the overlay opens without lighting up a visible focus ring. The close button only gets its keyboard focus ring when you actually tab to it.

Escape closes the overlay. Body scroll is locked while it's open.

The one accessibility gap left is the zoom interaction. The image isn't keyboard-focusable, which means keyboard users can't toggle zoom. Adding `tabIndex={0}` to the image plus a key handler for Enter and Space would close that. Not in this version.

## Source

The component is two files. About 250 lines of JSX, about 200 lines of CSS. Both live in [the repo](https://github.com/mattfelten/mattfelten.com/tree/main/src/components).
