import React from 'react';
import classname from 'classnames';

export const WorkHeader = ({className, title, company, year, role, team}) => {
	const WorkHeaderClasses = classname('WorkHeader', className, {
		'WorkHeader--quad': (company && year && role && team)
	});

	return (
		<div className={WorkHeaderClasses}>
			<p><strong>{title}</strong></p>

			<div className="WorkHeader__meta">
				{company &&
					<p><small>
						<strong>Company</strong>
						<span className="db nowrap">{company}</span>
					</small></p>
				}
				{year &&
					<p><small>
						<strong>Year</strong>
						<span className="db nowrap">{year}</span>
					</small></p>
				}
				{role &&
					<p><small>
						<strong>Role</strong>
						<span className="db nowrap">{role}</span>
					</small></p>
				}
				{team &&
					<p><small>
						<strong>Team</strong>
						<span className="db nowrap">{team}</span>
					</small></p>
				}
			</div>
		</div>
	);
}
