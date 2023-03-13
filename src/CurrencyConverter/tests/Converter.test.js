import Converter from '../Components/Converter/Converter';
import { render, screen } from '@testing-library/react';

test('converter', () => {
  render(<Converter rate={{}} />);
  const head = screen.getByText('Currency');
  // expect(1).toBeTruthy();
});
