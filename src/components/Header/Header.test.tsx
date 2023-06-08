import { fireEvent, render, screen } from '@testing-library/react';

import Header from '.';

jest.mock('next/navigation', () => ({
  usePathname() {
    return 'en';
  },
}));

describe('Test featured post card', () => {
  beforeEach(() => {
    const portalRoot = document.createElement('div');
    portalRoot.setAttribute('id', 'portal');
    document.body.appendChild(portalRoot);
  });

  it('Should display menu on screen', () => {
    render(<Header />);

    expect(screen.queryByText('About us')).toBeInTheDocument();
    expect(screen.queryByText('Blog')).toBeInTheDocument();
    expect(screen.queryByText('Home')).toBeInTheDocument();
    expect(screen.queryByText('Contact us')).toBeInTheDocument();
    expect(screen.queryByText('Video about us')).toBeInTheDocument();
  });

  it('Should open burger menu', () => {
    render(<Header />);

    const burger = screen.queryByLabelText('burger')!;
    fireEvent.click(burger);

    expect(screen.queryAllByText('Blog')).toHaveLength(2);
    expect(screen.queryAllByText('Home')).toHaveLength(2);
    expect(screen.queryAllByText('Contact us')).toHaveLength(2);
    expect(screen.queryAllByText('Video about us')).toHaveLength(2);
  });
});
