import { render } from '@testing-library/react';
import Master from './master';
describe('Master', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Master />);
    expect(baseElement).toBeTruthy();
  });
});
