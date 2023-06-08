import { render, screen } from '@testing-library/react';

import FeaturedPostsBlock from '.';

describe('Test featured posts block', () => {
  it('Should display correct data in russian', () => {
    render(<FeaturedPostsBlock lng="ru" />);

    expect(screen.queryByText(`Популярные посты`)).toBeInTheDocument();
  });

  it('Should display correct data in english', () => {
    render(<FeaturedPostsBlock lng="en" />);

    expect(screen.queryByText(`Featured posts`)).toBeInTheDocument();
  });
});
