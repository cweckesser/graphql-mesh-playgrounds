import { Request, Response } from 'express';
import { Operation } from 'express-openapi';

import { PersonDao } from '../daos/person-dao';

export const GET: Operation = (req: Request, res: Response) => {
	const { query } = req;

	const id: string = query.id as string;

	const responsePayload = new PersonDao().all()
		.filter((p) => id === undefined || p.id === id)
		;

	return res.status(200).json(responsePayload);
};

GET.apiDoc = {
	description: 'Returns a list of people or an unique instance (if matched by ID)',
	operationId: 'getPeople',
	parameters: [
		{
			name: 'id',
			in: 'query',
			description: 'The ID of the person to retrieve',
			required: false,
			schema: {
				type: 'string',
			},
		},
	],
	responses: {
		200: {
			description: 'Success',
			content: {
				['application/json']: {
					schema: {
						type: 'array',
						items: {
							$ref: '#/components/schemas/Person',
						}
					},
				},
			},
		},
		default: {
			description: 'Error',
			content: {
				['application/json']: {
					schema: {
						$ref: '#/components/schemas/ErrorResponse',
					},
				},
			},
		},
	},
};
