import { render, screen } from '@testing-library/react';

import BlogHeader from '.';

describe('Test blog header', () => {
  it('Should work correct in russian', () => {
    render(<BlogHeader lng="ru" />);

    expect(screen.queryByText(`Популярный пост`)).toBeInTheDocument();
    expect(screen.queryByText(`Читать далее >`)).toBeInTheDocument();
    expect(
      screen.queryByText(
        `Font sizes in UI design: The complete guide to follow`
      )
    ).toBeInTheDocument();
    expect(
      screen.queryByText(
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
      )
    ).toBeInTheDocument();
  });

  it('Should work correct in english', () => {
    render(<BlogHeader lng="en" />);

    expect(screen.queryByText(`Featured Post`)).toBeInTheDocument();
    expect(screen.queryByText(`Read more >`)).toBeInTheDocument();
    expect(
      screen.queryByText(
        `Font sizes in UI design: The complete guide to follow`
      )
    ).toBeInTheDocument();
    expect(
      screen.queryByText(
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
      )
    ).toBeInTheDocument();
  });
});
