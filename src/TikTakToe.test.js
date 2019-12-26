import React from 'react';
import { render } from '@testing-library/react';
import TikTakToe from './TikTakToe';

xtest('renders learn react link', () => {
    const { getByText } = render(<TikTakToe />);
    const linkElement = getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
