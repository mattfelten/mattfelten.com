---
title: CSS-Only Spinner
custom-css: spinner.css
date: 2014-03-04
layout: ../../layout/post.astro
---

I recently converted all the icons in the DreamHost panel to an icon font. Icon fonts are great because the icons are scalable. They're based on the font size and color of the containing element. No more exporting 12 separate images per icon in different size and color combinations (Yeah, yeah, images sprites, blah blah blah). Super cool.

The problem I ran into is that I still have to use loader.gifs. I played around using CSS animations on a circular icon from the icon font, but I just ran into headaches. When it works, it looks great. The problem I've ran into is all the different icon shapes make the canvas not a perfect square, added to the problem with line-heights, the "character shape" ends up not being square. That makes it hard to use a rotate animation. You end up having to use transform-origin to _reset_ the center of the icon. Even that doesn't work great cross-browser. **TLDR: Huge headache.**

So what I played around with yesterday is trying to come up with an equally scalable loading icon. Good news, I got pretty close. Here's what I came up with.

```css
.loader {
	border: 0.15em solid #3ddfc2;
	border-right-color: transparent;
	border-radius: 50%;
	display: inline-block;
	width: 0.5em;
	height: 0.5em;

	-webkit-animation: spin 0.75s linear infinite;
	-moz-animation: spin 0.75s linear infinite;
	-ms-animation: spin 0.75s linear infinite;
	-o-animation: spin 0.75s linear infinite;
	animation: spin 0.75s linear infinite;
}

@-webkit-keyframes spin {
	100% {
		-webkit-transform: rotate(360deg);
	}
}

@-moz-keyframes spin {
	100% {
		-moz-transform: rotate(360deg);
	}
}

@-o-keyframes spin {
	100% {
		-o-transform: rotate(360deg);
	}
}

@keyframes spin {
	100% {
		transform: rotate(360deg);
	}
}
```

Here's what this does. `.loader` has a width and height of .5em of the containing element. That makes it's size scalable. Great. I also made the border size .15em, so that is scalable also. Border-radius makes it a circle. The transparent right border gives the circle the notch. The animation and keyframes below make it spin.

And here's a full example. You can mess with the code on [JSFiddle](http://jsfiddle.net/mattfelten/VU2Cu/5/)

<iframe width="100%" height="300" src="//jsfiddle.net/mattfelten/VU2Cu/5/embedded/result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

**This only works on IE9+ because of the CSS animation.** We still need an image fallback, but that's not too difficult to implement.

I'm still trying to work on how to get the color to match the text color of the parent. Right now it's using border color, which has to be manually set. Annoying. If anyone has a better solution, [I'm all ears]({{site.author.url}}).
