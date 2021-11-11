import { render } from '@testing-library/react';
import ConsultationCard from './consultation-card';
describe('ConsultationCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ConsultationCard />);
    expect(baseElement).toBeTruthy();
  });
});
