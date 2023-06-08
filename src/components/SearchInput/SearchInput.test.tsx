import { fireEvent, render, screen } from '@testing-library/react';
import { usePathname } from 'next/navigation';

import SearchInput from '.';

jest.mock('next/navigation');
const mockAddTag = jest.fn();
const props = {
  addTag: () => () => mockAddTag(),
};

describe('Test Search Input', () => {
  it('Should display search in russian', () => {
    (usePathname as jest.Mock).mockImplementation(() => 'ru');

    render(<SearchInput {...props} />);

    expect(screen.queryByText('Поиск')).toBeInTheDocument();
    expect(screen.queryByPlaceholderText('Искать тег...')).toBeInTheDocument();
  });

  it('Should display search in english', () => {
    (usePathname as jest.Mock).mockImplementation(() => 'en');

    render(<SearchInput {...props} />);

    expect(screen.queryByText('Search')).toBeInTheDocument();
    expect(
      screen.queryByPlaceholderText('Search for tag...')
    ).toBeInTheDocument();
  });

  it('Should search for tags', () => {
    (usePathname as jest.Mock).mockImplementation(() => 'en');

    render(<SearchInput {...props} />);

    const input = screen.getByRole('textbox')!;
    fireEvent.change(input, { target: { value: 'e' } });

    expect(screen.queryByText('Economy')).toBeInTheDocument();
    expect(screen.queryByText('Ecology')).toBeInTheDocument();

    expect(screen.queryByText('Experience')).toBeInTheDocument();
  });

  it('Should select tag', () => {
    (usePathname as jest.Mock).mockImplementation(() => 'en');

    render(<SearchInput {...props} />);

    const input = screen.getByRole('textbox')!;
    fireEvent.change(input, { target: { value: 'e' } });

    expect(screen.queryByText('Economy')).toBeInTheDocument();
    expect(screen.queryByText('Ecology')).toBeInTheDocument();
    expect(screen.queryByText('Experience')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Economy'));

    expect(screen.queryByDisplayValue('Economy')).toBeInTheDocument();
    expect(screen.queryByText('Ecology')).not.toBeInTheDocument();
    expect(screen.queryByText('Experience')).not.toBeInTheDocument();
  });

  it('Should display no tags found in russian', () => {
    (usePathname as jest.Mock).mockImplementation(() => 'ru');

    render(<SearchInput {...props} />);

    const input = screen.getByRole('textbox')!;
    fireEvent.change(input, { target: { value: 'wwww' } });

    expect(screen.queryByText('Тегов не найдено')).toBeInTheDocument();
  });

  it('Should display no tags found in english', () => {
    (usePathname as jest.Mock).mockImplementation(() => 'en');

    render(<SearchInput {...props} />);

    const input = screen.getByRole('textbox')!;
    fireEvent.change(input, { target: { value: 'wwww' } });

    expect(screen.queryByText('No tags found')).toBeInTheDocument();
  });
});
