import React from "react";
import { Page } from '../../../../modules';
import { Asset, Link, Section, SubSection, WorkHeader } from '../../../../components';
import { setTitle } from '../../../../utils';
import { qnapFlow, uiFlow } from './imgs';

export class QNAP extends React.Component {
	static title = 'QNAP Integration';
	static company = 'DreamHost';
	static year = '2014';
	static slug = 'dh-qnap';
	static path = '/work/dreamhost/qnap';

	componentDidMount() {
		setTitle(QNAP.title);
	}

	render() {
		return (
			<Page>
				<Section>
					<WorkHeader
						title={QNAP.title}
						company={QNAP.company}
						year={QNAP.year}
					/>

					<p>We turned our cloud storage product into a platform for other companies to offer to their customers. We had to design a customer flow that starts and ends at another services interface which was a pretty unique challenge. We also had to create new screens to support and simplify our sign up and plan selection user flows.</p>

					<p>The most challenging part of this project was creating a diagram to understand where the customer would be taking certain actions, where they would cross over to our interface. How would it work if the customer was already a DreamHost customer? What about if they aren't? What if they already have DreamObjects on their account? What if they don't?</p>

					<p>After going back and forth with the development team, we got the flow to a state where we were all happy. The customer would have the least amount of confusion possible hopping between two different interfaces. Once that was done, we only had to create three new screens. I leveraged the work we did on the <Link href="https://2018.mattfelten.com/work/dreamhost/login-screen/">login screen</Link> and expanded some of those design patterns to work for this kind of one-off flow.</p>

					<SubSection>
						<Asset src={qnapFlow} alt="QNAP Flow" expand />
						<Asset src={uiFlow} alt="UI Flow" expand />
					</SubSection>

					<p>The biggest thing I learned through this project was the value of creating flow charts. I spent a few days at the beginning of the project getting concensus on how the system works. I was able to visually explain it to the team and we could all see where our constraints are. It was then exponentially quicker to iterate on to get the best experience possible.</p>
				</Section>
			</Page>
		);
	}
}
