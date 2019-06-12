import React from 'react';
import classname from 'classnames';
import { Small } from './';

export const WorkHeader = ({className, title, company, year, projectRole, team}) => {
	const WorkHeaderClasses = classname('WorkHeader', className, {
		'WorkHeader--quad': (company && year && projectRole && team)
	});

	return (
		<div className={WorkHeaderClasses}>
			<p><strong>{title}</strong></p>

			<div className="WorkHeader__meta">
				{company &&
					<p><Small>
						<strong>Company</strong>
						<span className="db nowrap">{company}</span>
					</Small></p>
				}
				{year &&
					<p><Small>
						<strong>Year</strong>
						<span className="db nowrap">{year}</span>
					</Small></p>
				}
				{projectRole &&
					<p><Small>
						<strong>Role</strong>
						<span className="db nowrap">{projectRole}</span>
					</Small></p>
				}
				{team &&
					<p><Small>
						<strong>Team</strong>
						<span className="db nowrap">{team}</span>
					</Small></p>
				}
			</div>
		</div>
	);
			}
