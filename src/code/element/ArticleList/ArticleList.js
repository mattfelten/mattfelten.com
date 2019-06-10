import React from 'react';

export function ArticleList({items}) {
	return (
		<ul className="ArticleList">
		{ items.map((item,i) =>
			<li key={i}>
				<span className="ArticleList__label">{ item.meta }</span>
				<span className="ArticleList__title">
					<a className="ArticleList__link" href={item.href}>{item.title}</a>
				</span>
			</li>
		)}
	</ul>
	)
}
