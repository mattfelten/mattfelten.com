import { TypeAnimation } from 'react-type-animation';

export const JobDescriber = ({
	sequence,
	delay = 6000,
	speed = 45,
	className,
	shuffle = false,
}) => {
	var canUseDOM = !!(
		typeof window !== 'undefined' &&
		window.document &&
		window.document.createElement
	);

	if (!canUseDOM) return sequence[0];

	const shuffledSequence = shuffle ? shuffle(sequence) : sequence;

	return (
		<TypeAnimation
			sequence={shuffledSequence.map((label, i) => [label, delay]).flat()}
			wrapper="span"
			preRenderFirstString={true}
			cursor={true}
			repeat={Infinity}
			speed={speed}
			className={`${className} after:text-accent after:opacity-70`}
			style={{ display: 'inline-block' }}
		/>
	);
};

const shuffle = array => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
};
