import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn text', () => {
  render(<App />);
  const textElement = screen.getByText(/learn/i);
  expect(textElement).toBeInTheDocument();
});
