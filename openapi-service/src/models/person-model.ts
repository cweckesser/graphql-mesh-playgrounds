export interface Person {
	id: string;
	firstName: string;
	lastName: string;
	contact?: Contact;
}

export interface Contact {
	email?: string;
	phone?: string;
}
