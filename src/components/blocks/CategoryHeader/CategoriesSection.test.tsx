import { render, screen } from '@testing-library/react';

import CategoryHeader from '.';
import { CategoryHeaderProps } from './types';

const props: CategoryHeaderProps = {
  category: {
    name: 'business',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
  },
  lng: 'ru',
};

describe('Test category header', () => {
  it('Should display correct data in russian', () => {
    render(<CategoryHeader {...props} />);

    expect(screen.queryByText(`business`)).toBeInTheDocument();
    expect(
      screen.queryByText(
        `Lorem ipsum dolor sit amet, consectetuer adipiscing elit.`
      )
    ).toBeInTheDocument();
    expect(screen.queryByText(`Блог > business`)).toBeInTheDocument();
  });

  it('Should display correct data in english', () => {
    props.lng = 'en';
    render(<CategoryHeader {...props} />);

    expect(screen.queryByText(`business`)).toBeInTheDocument();
    expect(
      screen.queryByText(
        `Lorem ipsum dolor sit amet, consectetuer adipiscing elit.`
      )
    ).toBeInTheDocument();
    expect(screen.queryByText(`Blog > business`)).toBeInTheDocument();
  });
});
