import { render } from '@testing-library/react';
import 'jest-styled-components';
import React from 'react';
import { Col } from '../col/Col';

describe('<Col />', () => {
	test('should have the basic css settings', async () => {
		const result = render(<Col />);
		expect(result.baseElement).toMatchSnapshot();
	});
});