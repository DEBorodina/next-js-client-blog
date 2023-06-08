import { render, screen } from '@testing-library/react';

import AuthorsList from '.';

describe('Test authors list', () => {
  it('Should work correct in russian', () => {
    render(<AuthorsList lng="ru" />);

    expect(screen.queryByText(`Список авторов`)).toBeInTheDocument();
  });

  it('Should work correct in english', () => {
    render(<AuthorsList lng="en" />);

    expect(screen.queryByText(`List of authors`)).toBeInTheDocument();
  });
});
