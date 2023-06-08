import { render, screen } from '@testing-library/react';

import HomeFeaturedPost from '.';

describe('Test home featured post', () => {
  it('Should display home featured post data in russian', () => {
    render(<HomeFeaturedPost lng="ru" />);

    expect(screen.queryByText('Floyd Miles')).toBeInTheDocument();
    expect(screen.queryByText('| Июнь 4, 2023')).toBeInTheDocument();
    expect(
      screen.queryByText('How to build rapport with your web design clients')
    ).toBeInTheDocument();
    expect(
      screen.queryByText(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      )
    ).toBeInTheDocument();
    expect(screen.queryByText('Читать далее >')).toBeInTheDocument();
  });

  it('Should display home featured post data  in english', () => {
    render(<HomeFeaturedPost lng="en" />);

    expect(screen.queryByText('Floyd Miles')).toBeInTheDocument();
    expect(screen.queryByText('| June 4, 2023')).toBeInTheDocument();
    expect(
      screen.queryByText('How to build rapport with your web design clients')
    ).toBeInTheDocument();
    expect(
      screen.queryByText(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      )
    ).toBeInTheDocument();
    expect(screen.queryByText('Read more >')).toBeInTheDocument();
  });
});
