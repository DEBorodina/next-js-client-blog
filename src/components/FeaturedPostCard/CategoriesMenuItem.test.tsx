import { render, screen } from '@testing-library/react';

import FeaturedPostCard from '.';
import { FeaturedPostCardProps } from './types';

const props: FeaturedPostCardProps = {
  post: {
    title: 'Why we started this blog',
    date: '2023-06-14T00:00:00.000Z',
    authorId: 1,
    id: 1,
  },
  lng: 'ru',
};

describe('Test featured post card', () => {
  it('Should display featured post data in russian', () => {
    render(<FeaturedPostCard {...props} />);

    expect(screen.queryByText('Floyd Miles')).toBeInTheDocument();
    expect(screen.queryByText('| Июнь 14, 2023')).toBeInTheDocument();
    expect(screen.queryByText('Why we started this blog')).toBeInTheDocument();
  });

  it('Should display featured post data  in english', () => {
    props.lng = 'en';
    render(<FeaturedPostCard {...props} />);

    expect(screen.queryByText('Floyd Miles')).toBeInTheDocument();
    expect(screen.queryByText('| June 14, 2023')).toBeInTheDocument();
    expect(screen.queryByText('Why we started this blog')).toBeInTheDocument();
  });
});
