import { Root, Page } from './src/templates';

export const wrapRootElement = Root;
export const wrapPageElement = Page;

export const shouldUpdateScroll = ({ routerProps: { location } }) => {
	if(location.hash) {
		scrollToElement(location.hash);
	} else {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'auto'
		})
	}

	return null
};
