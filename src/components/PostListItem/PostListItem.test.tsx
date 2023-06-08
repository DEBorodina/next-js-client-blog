import { render, screen } from '@testing-library/react';

import PostListItem from '.';
import { PostListItemProps } from './types';

const props: PostListItemProps = {
  title: 'Why we started this blog',
  category: 'business',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  image: '/images/three-persons.png',
  id: 1,
};

describe('Test posts list item', () => {
  it('Posts list item should display info', () => {
    render(<PostListItem {...props} />);
    expect(screen.queryByText(props.title)).toBeInTheDocument();
    expect(screen.queryByText(props.category)).toBeInTheDocument();
    expect(screen.queryByText(props.description)).toBeInTheDocument();
    expect(screen.queryByAltText(props.title)).toBeInTheDocument();
  });
});
