import React from 'react';
import { render } from '@testing-library/react';

import Contact from '../components/Contact';
import Contacts from '../components/Contacts';
import Filters from '../components/Filters';
import Topbar from '../components/Topbar';

const mockUserData = {
	avatar: '',
	name: '',
	phone: '',
	country: '',
	admissionDate: '',
	company: '',
	department: '',
};

describe('Contacts APP', () => {
	it('Should render Contact component', () => {
		const { getByTestId } = render(<Contact data={mockUserData}/>);
		const container = getByTestId('contact');

		expect(container).toHaveClass('contact');
		expect(container.children.length).toBe(7);
	});

	it('Should render Contacts component', () => {
		const { getByTestId } = render(<Contacts />);
		const container = getByTestId('contacts');

		expect(container).toHaveClass('container');
		expect(container.children.length).toBe(1);
	});

	it('Should render Filters component', () => {
		const { getByTestId } = render(<Filters />);
		const container = getByTestId('filters');

		expect(container).toHaveClass('container');
		expect(container.children.length).toBe(1);
	});

	it('Should render Topbar component', () => {
		const { getByTestId } = render(<Topbar />);
		const container = getByTestId('topbar');

		expect(container).toHaveClass('topbar');
		expect(container.children.length).toBe(1);
	});
});

