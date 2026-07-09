import { FocusTrap } from 'focus-trap-react';
import { useEffect, useRef, useState } from 'react';
import './ImageOverlay.css';

const PARAM = 'overlay';

const getCurrentId = () => {
	if (typeof window === 'undefined') return null;
	return new URLSearchParams(window.location.search).get(PARAM);
};

const urlWith = id => {
	const url = new URL(window.location.href);
	if (id) url.searchParams.set(PARAM, id);
	else url.searchParams.delete(PARAM);
	return url.pathname + (url.search || '') + url.hash;
};

const readFromAnchor = (el, id) => ({
	id: id ?? el.getAttribute('data-overlay'),
	src:
		el.getAttribute('data-overlay-src') || el.getAttribute('href'),
	alt: el.getAttribute('data-overlay-alt') || '',
	caption: el.getAttribute('data-overlay-caption') || '',
});

const readAssetById = id => {
	if (!id) return null;
	const el = document.querySelector(
		`a[data-overlay="${CSS.escape(id)}"]`,
	);
	return el ? readFromAnchor(el, id) : null;
};

export const ImageOverlay = () => {
	const [asset, setAsset] = useState(null);
	const [zoomed, setZoomed] = useState(false);
	const [canZoom, setCanZoom] = useState(false);
	const cardRef = useRef(null);
	const imageAreaRef = useRef(null);
	const imgRef = useRef(null);

	useEffect(() => {
		// Deep-link: if the page loads with ?overlay=<id>, open that asset.
		// Replace the current entry with a clean URL, then push the overlay
		// URL on top, so back-while-open closes the overlay instead of
		// leaving the site.
		const initialId = getCurrentId();
		if (initialId) {
			const found = readAssetById(initialId);
			if (found) {
				window.history.replaceState({}, '', urlWith(null));
				window.history.pushState(
					{ overlay: initialId },
					'',
					urlWith(initialId),
				);
				setAsset(found);
			} else {
				window.history.replaceState({}, '', urlWith(null));
			}
		}

		const onClick = e => {
			if (
				e.defaultPrevented ||
				e.metaKey ||
				e.ctrlKey ||
				e.shiftKey ||
				e.altKey ||
				e.button !== 0
			)
				return;
			const anchor = e.target.closest('a[data-overlay]');
			if (!anchor) return;
			const next = readFromAnchor(anchor);
			if (!next.id) return;
			e.preventDefault();
			// Push so browser back closes the overlay and keeps you on the
			// case study page.
			window.history.pushState(
				{ overlay: next.id },
				'',
				urlWith(next.id),
			);
			setAsset(next);
		};

		const onPopState = () => {
			const id = getCurrentId();
			if (!id) {
				setAsset(null);
				return;
			}
			setAsset(readAssetById(id));
		};

		const onKeyDown = e => {
			if (e.key === 'Escape' && getCurrentId()) {
				closeOverlay();
			}
		};

		document.addEventListener('click', onClick);
		window.addEventListener('popstate', onPopState);
		document.addEventListener('keydown', onKeyDown);

		return () => {
			document.removeEventListener('click', onClick);
			window.removeEventListener('popstate', onPopState);
			document.removeEventListener('keydown', onKeyDown);
		};
	}, []);

	// Closes via X / Esc / backdrop. Replace the pushed entry's URL with a
	// clean one *before* going back, so the popped entry doesn't sit in
	// forward history as a re-openable overlay URL.
	const closeOverlay = () => {
		window.history.replaceState({}, '', urlWith(null));
		window.history.back();
	};

	useEffect(() => {
		if (!asset) return;
		const prev = document.body.style.overflow;
		document.body.style.overflow = 'hidden';
		cardRef.current?.focus({ preventScroll: true });
		setZoomed(false);
		setCanZoom(false);
		return () => {
			document.body.style.overflow = prev;
		};
	}, [asset?.id]);

	// Faster arrow-key scrolling while zoomed
	useEffect(() => {
		if (!zoomed) return;
		const STEP = 120;
		const handler = e => {
			const container = imageAreaRef.current;
			if (!container) return;
			let dx = 0,
				dy = 0;
			if (e.key === 'ArrowUp') dy = -STEP;
			else if (e.key === 'ArrowDown') dy = STEP;
			else if (e.key === 'ArrowLeft') dx = -STEP;
			else if (e.key === 'ArrowRight') dx = STEP;
			else return;
			e.preventDefault();
			container.scrollBy({ left: dx, top: dy, behavior: 'auto' });
		};
		document.addEventListener('keydown', handler);
		return () => document.removeEventListener('keydown', handler);
	}, [zoomed]);

	if (!asset) return null;

	const onImgLoad = e => {
		const img = e.currentTarget;
		setCanZoom(
			img.naturalWidth > img.clientWidth ||
				img.naturalHeight > img.clientHeight,
		);
	};

	const zoomTo = (xRatio, yRatio) => {
		setZoomed(true);
		requestAnimationFrame(() => {
			const container = imageAreaRef.current;
			const img = imgRef.current;
			if (!container || !img) return;
			const scrollX =
				img.naturalWidth * xRatio - container.clientWidth / 2;
			const scrollY =
				img.naturalHeight * yRatio - container.clientHeight / 2;
			container.scrollTo({
				left: scrollX,
				top: scrollY,
				behavior: 'auto',
			});
		});
	};

	const onImgClick = e => {
		if (!canZoom) return;
		if (zoomed) {
			setZoomed(false);
			return;
		}
		const rect = e.currentTarget.getBoundingClientRect();
		zoomTo(
			(e.clientX - rect.left) / rect.width,
			(e.clientY - rect.top) / rect.height,
		);
	};

	const onImgKeyDown = e => {
		if (!canZoom) return;
		if (e.key !== 'Enter' && e.key !== ' ') return;
		e.preventDefault();
		if (zoomed) setZoomed(false);
		else zoomTo(0.5, 0.5);
	};

	return (
		<FocusTrap
			focusTrapOptions={{
				initialFocus: false,
				fallbackFocus: () => cardRef.current,
				escapeDeactivates: false,
				clickOutsideDeactivates: false,
				allowOutsideClick: true,
			}}
		>
			<div className="overlay-backdrop" onClick={closeOverlay}>
			<div
				ref={cardRef}
				tabIndex={-1}
				role="dialog"
				aria-modal="true"
				aria-label={asset.alt || 'Image viewer'}
				className="overlay-card"
				onClick={e => e.stopPropagation()}
			>
				<div
					ref={imageAreaRef}
					className={`overlay-image-area${zoomed ? ' zoomed' : ''}`}
				>
					<img
						key={asset.id}
						ref={imgRef}
						src={asset.src}
						alt={asset.alt}
						onLoad={onImgLoad}
						onClick={onImgClick}
						onKeyDown={canZoom ? onImgKeyDown : undefined}
						role={canZoom ? 'button' : undefined}
						tabIndex={canZoom ? 0 : undefined}
						aria-pressed={canZoom ? zoomed : undefined}
						className={
							canZoom && !zoomed
								? 'overlay-image zoomable'
								: 'overlay-image'
						}
					/>
				</div>

				{asset.caption && (
					<div className="overlay-caption">
						<div
							className="overlay-caption-inner"
							dangerouslySetInnerHTML={{
								__html: asset.caption,
							}}
						/>
					</div>
				)}

				<button
					type="button"
					onClick={closeOverlay}
					aria-label="Close image viewer"
					className="overlay-close"
				>
					<svg
						width="18"
						height="18"
						viewBox="0 0 18 18"
						fill="none"
						stroke="currentColor"
						strokeWidth="1.75"
						strokeLinecap="round"
						strokeLinejoin="round"
						aria-hidden="true"
					>
						<path d="M4 4 L14 14 M14 4 L4 14" />
					</svg>
				</button>
			</div>
		</div>
		</FocusTrap>
	);
};

export default ImageOverlay;
