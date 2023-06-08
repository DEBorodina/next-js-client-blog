import { render, screen } from '@testing-library/react';
import { usePathname } from 'next/navigation';

import Navigation from '.';

jest.mock('next/navigation');

describe('Test navigation', () => {
  it('Should display header navigation in russian', () => {
    (usePathname as jest.Mock).mockImplementation(() => 'ru');

    render(<Navigation type="header" />);

    expect(screen.queryByText('О нас')).toBeInTheDocument();
    expect(screen.queryByText('Блог')).toBeInTheDocument();
    expect(screen.queryByText('Главная')).toBeInTheDocument();
    expect(screen.queryByText('Контакты')).toBeInTheDocument();
  });

  it('Should display header navigation in english', () => {
    (usePathname as jest.Mock).mockImplementation(() => 'en');

    render(<Navigation type="header" />);

    expect(screen.queryByText('About us')).toBeInTheDocument();
    expect(screen.queryByText('Blog')).toBeInTheDocument();
    expect(screen.queryByText('Home')).toBeInTheDocument();
    expect(screen.queryByText('Contact us')).toBeInTheDocument();
  });

  it('Should display footer navigation in russian', () => {
    (usePathname as jest.Mock).mockImplementation(() => 'ru');

    render(<Navigation type="footer" />);

    expect(screen.queryByText('О нас')).toBeInTheDocument();
    expect(screen.queryByText('Блог')).toBeInTheDocument();
    expect(screen.queryByText('Главная')).toBeInTheDocument();
    expect(screen.queryByText('Контакты')).toBeInTheDocument();
    expect(screen.queryByText('Политика приватности')).toBeInTheDocument();
  });

  it('Should display footer navigation in english', () => {
    (usePathname as jest.Mock).mockImplementation(() => 'en');

    render(<Navigation type="footer" />);

    expect(screen.queryByText('About us')).toBeInTheDocument();
    expect(screen.queryByText('Blog')).toBeInTheDocument();
    expect(screen.queryByText('Home')).toBeInTheDocument();
    expect(screen.queryByText('Contact us')).toBeInTheDocument();
    expect(screen.queryByText('Privacy policy')).toBeInTheDocument();
  });

  it('Should display current location', () => {
    (usePathname as jest.Mock).mockImplementation(() => '/en/blog');

    render(<Navigation type="header" />);

    expect(screen.queryByText('About us')).not.toHaveClass('active');
    expect(screen.queryByText('Blog')).toHaveClass('active');
    expect(screen.queryByText('Home')).not.toHaveClass('active');
    expect(screen.queryByText('Contact us')).not.toHaveClass('active');
  });
});
