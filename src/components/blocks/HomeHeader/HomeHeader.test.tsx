import { render, screen } from '@testing-library/react';

import HomeHeader from '.';

describe('Test home header', () => {
  it('Should display home header data in russian', () => {
    render(<HomeHeader lng="ru" />);

    expect(screen.queryByText('Опубликовано в')).toBeInTheDocument();
    expect(screen.queryByText('startup')).toBeInTheDocument();
    expect(screen.queryByText('Floyd Miles')).toBeInTheDocument();

    expect(
      screen.queryByText(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      )
    ).toBeInTheDocument();
    expect(screen.queryByText('Читать далее >')).toBeInTheDocument();
  });

  it('Should display home header data in english', () => {
    render(<HomeHeader lng="en" />);

    expect(screen.queryByText('Posted on')).toBeInTheDocument();
    expect(screen.queryByText('startup')).toBeInTheDocument();
    expect(screen.queryByText('Floyd Miles')).toBeInTheDocument();

    expect(
      screen.queryByText(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      )
    ).toBeInTheDocument();
    expect(screen.queryByText('Read more >')).toBeInTheDocument();
  });
});
