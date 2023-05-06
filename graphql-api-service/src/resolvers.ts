import { Department, Employee, QueryGetEmployeesArgs } from './generated/resolver-types';

export const resolvers = {
	Query: {
		getDepartments: async (): Promise<Department[]> => {
			return departments;
		},
		getEmployees: async (root: unknown, args: QueryGetEmployeesArgs): Promise<Employee[]> => {
			const { departmentId } = args;
			return departments.find((d) => d.id === departmentId)?.employees || [];
		},
	},
};

const departments: Department[] = [
	{
		id: 'ae7b5792-319a-44dc-9157-e6989076731d',
		name: 'IT',
		employees: [
			{
				personId: 'a8e46afc-0e74-4715-828c-45d8327fd476',
				position: 'Junior Engineer',
			},
			{
				personId: '06e89157-b6f3-45ff-93a9-63d5e26b5f39',
				position: 'Senior Engineer',
			},
		],
	},
	{
		id: '0d70cc2f-7a2a-4961-b8e0-418ff467708b',
		name: 'Finance',
	},
	{
		id: 'ac375b65-ccae-4304-ac09-134c338a2ca4',
		name: 'Sales',
		employees: [
			{
				personId: '0f97b0d7-387b-45ad-b4c6-f1db0d42d36f',
				position: 'Account Manager',
			},
		],
	},
];
