export function setTitle(pageTitle) {
	const siteTitle = 'Matt Felten';

	document.title = siteTitle;
	if(!pageTitle) return;

	if(typeof pageTitle !== "string" )
		throw new Error("Title should be an string");

	document.title = `${siteTitle} × ${pageTitle}`;
}
