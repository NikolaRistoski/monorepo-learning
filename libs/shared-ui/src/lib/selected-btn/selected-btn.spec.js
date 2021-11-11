import { render } from '@testing-library/react';
import SelectedBtn from './selected-btn';
describe('SelectedBtn', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SelectedBtn />);
    expect(baseElement).toBeTruthy();
  });
});
