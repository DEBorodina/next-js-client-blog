import { fireEvent, render, screen } from '@testing-library/react';
import { usePathname } from 'next/navigation';

import SideMenu from '.';

jest.mock('next/navigation');
const mockSetIsOpen = jest.fn();
const props = {
  setIsOpen: () => mockSetIsOpen(),
};

describe('Test Side menu', () => {
  beforeEach(() => {
    const portalRoot = document.createElement('div');
    portalRoot.setAttribute('id', 'portal');
    document.body.appendChild(portalRoot);
  });

  it('Should display side menu data in english', () => {
    (usePathname as jest.Mock).mockImplementation(() => 'en');

    render(<SideMenu {...props} />);

    expect(screen.queryByText('About us')).toBeInTheDocument();
    expect(screen.queryByText('Blog')).toBeInTheDocument();
    expect(screen.queryByText('Home')).toBeInTheDocument();
    expect(screen.queryByText('Contact us')).toBeInTheDocument();
    expect(screen.queryByText('Video about us')).toBeInTheDocument();
  });

  it('Should display side menu in russian', () => {
    (usePathname as jest.Mock).mockImplementation(() => 'ru');

    render(<SideMenu {...props} />);

    expect(screen.queryByText('О нас')).toBeInTheDocument();
    expect(screen.queryByText('Блог')).toBeInTheDocument();
    expect(screen.queryByText('Главная')).toBeInTheDocument();
    expect(screen.queryByText('Контакты')).toBeInTheDocument();
    expect(screen.queryByText('Видео о нас')).toBeInTheDocument();
  });

  it('Should open video', () => {
    (usePathname as jest.Mock).mockImplementation(() => 'ru');

    render(<SideMenu {...props} />);

    const videoButton = screen.queryByText('Видео о нас')!;
    fireEvent.click(videoButton);
    expect(screen.getByLabelText('video')).toBeInTheDocument();
  });
});
