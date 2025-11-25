import { ActionError, defineAction } from 'astro:actions';
import { z } from 'astro:schema';

export const prerender = false;

export const server = {
	subscribe: defineAction({
		input: z.object({
			email: z.string().email(),
		}),
		handler: async ({ email }) => {
			try {
				const response = await fetch(
					'https://api.buttondown.com/v1/subscribers',
					{
						method: 'POST',
						headers: {
							Authorization: `Token ${import.meta.env.BUTTONDOWN_TOKEN}`,
							'Content-Type': 'application/json',
						},
						body: JSON.stringify({ email_address: email }),
					},
				);

				if (!response.ok) {
					throw new ActionError({
						code: 'BAD_REQUEST',
						message: response.statusText,
					});
				}

				const data = await response.json();
				return {
					success: true,
					...data,
				};
			} catch (error) {
				throw new ActionError({
					code: 'BAD_REQUEST',
					message: 'not ok',
				});
			}
		},
	}),
};
