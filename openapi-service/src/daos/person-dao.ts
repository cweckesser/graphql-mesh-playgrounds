import { cloneDeep } from 'lodash'; 

import { Person } from '../models/person-model';

const mockData: Record<string, Person> = {
	'a8e46afc-0e74-4715-828c-45d8327fd476': {
		id: 'a8e46afc-0e74-4715-828c-45d8327fd476',
		firstName: 'John',
		lastName: 'Doe',
		contact: {
			email: 'john.doe@example.com',
			phone: '+45 28 00 00 01',
		},
	},
	'06e89157-b6f3-45ff-93a9-63d5e26b5f39': {
		id: '06e89157-b6f3-45ff-93a9-63d5e26b5f39',
		firstName: 'Jane',
		lastName: 'Doe',
		contact: {
			email: 'jane.doe@example.com',
			phone: '+45 28 00 00 02',
		},
	},
	'0f97b0d7-387b-45ad-b4c6-f1db0d42d36f': {
		id: '0f97b0d7-387b-45ad-b4c6-f1db0d42d36f',
		firstName: 'Jeffrey',
		lastName: 'Doe',
		contact: {
			email: 'jeffrey.doe@example.com',
			phone: '+45 28 00 00 03',
		},
	},
};

export class PersonDao {
	public all(): Person[] {
		// Always return a copy of the mock data so as to preserve it from potential mutation
		return Object.values(cloneDeep(mockData))
	}
}
