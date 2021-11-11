import { render } from '@testing-library/react';
import ButtonWithIcon from './button-with-icon';
describe('ButtonWithIcon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ButtonWithIcon />);
    expect(baseElement).toBeTruthy();
  });
});
