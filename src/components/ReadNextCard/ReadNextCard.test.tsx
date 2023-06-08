import { render, screen } from '@testing-library/react';

import ReadNextCard from '.';
import { ReadNextCardProps } from './types';

const props: ReadNextCardProps = {
  post: {
    title: 'Why we started this blog',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: '/images/three-persons.png',
    date: '2023-06-14T00:00:00.000Z',
    authorId: 1,
    id: 1,
  },
  lng: 'ru',
};

describe('Test read next card', () => {
  it('Read next card data is correct in russian', () => {
    render(<ReadNextCard {...props} />);
    expect(screen.queryByText(props.post.title)).toBeInTheDocument();
    expect(screen.queryByAltText(props.post.title)).toBeInTheDocument();
    expect(screen.queryByText(props.post.description)).toBeInTheDocument();
    expect(screen.queryByText('Floyd Miles')).toBeInTheDocument();
    expect(screen.queryByText('| Июнь 14, 2023')).toBeInTheDocument();
  });

  it('Read next card dat is correct in english', () => {
    props.lng = 'en';
    render(<ReadNextCard {...props} />);
    expect(screen.queryByText(props.post.title)).toBeInTheDocument();
    expect(screen.queryByAltText(props.post.title)).toBeInTheDocument();
    expect(screen.queryByText(props.post.description)).toBeInTheDocument();
    expect(screen.queryByText('Floyd Miles')).toBeInTheDocument();
    expect(screen.queryByText('| June 14, 2023')).toBeInTheDocument();
  });
});
