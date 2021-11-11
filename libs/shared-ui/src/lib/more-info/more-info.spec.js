import { render } from '@testing-library/react';
import MoreInfo from './more-info';
describe('MoreInfo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MoreInfo />);
    expect(baseElement).toBeTruthy();
  });
});
