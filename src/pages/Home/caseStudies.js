import {
	Anvil as AnvilImage,
	DHControlPanelRedesign,
	DHControlPanelRefresh,
	DreamHost,
	QNAP as QNAPImage,
	YouCaring as YouCaringImage
} from './imgs';
import {
	Anvil,
	YouCaring,
	ControlPanelRefresh,
	ControlPanelRedesign,
	Rebrand,
	QNAP
} from '../work';


export const caseStudies = [
	{
		title: Anvil.title,
		company: Anvil.company,
		url: Anvil.path,
		image: AnvilImage
	},
	{
		title: YouCaring.title,
		company: YouCaring.company,
		url: YouCaring.path,
		image: YouCaringImage,
	},
	{
		title: ControlPanelRedesign.title,
		company: ControlPanelRedesign.company,
		url: ControlPanelRedesign.path,
		image: DHControlPanelRedesign,
	},
	{
		title: Rebrand.title,
		company: Rebrand.company,
		url: Rebrand.path,
		image: DreamHost,
	},
	{
		title: QNAP.title,
		company: QNAP.company,
		url: QNAP.path,
		image: QNAPImage,
	},
	{
		title: ControlPanelRefresh.title,
		company: ControlPanelRefresh.company,
		url: ControlPanelRefresh.path,
		image: DHControlPanelRefresh,
	}
];
