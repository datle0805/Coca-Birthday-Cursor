import { render, screen } from '@testing-library/react';
import Home from '../../src/app/page';

describe('Home Page', () => {
  test('renders the home page', () => {
    render(<Home />);
    const heading = screen.getByText(/welcome to my nextjs app/i);
    expect(heading).toBeInTheDocument();
  });
});