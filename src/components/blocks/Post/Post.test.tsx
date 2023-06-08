import { render, screen } from '@testing-library/react';

import Post from '.';
import { PostProps } from './types';

const props: PostProps = {
  post: {
    image: '/images/user/1.png',
    title: 'New post',
    text: 'New post text',
    date: '2023-06-14T00:00:00.000Z',
    authorId: 1,
    category: 'business',
  },
  lng: 'ru',
};

describe('Test post', () => {
  it('Should correct data in russian', () => {
    render(<Post {...props} />);

    expect(screen.queryByText('New post')).toBeInTheDocument();
    expect(screen.queryByText('New post text')).toBeInTheDocument();
    expect(screen.queryByText('Business')).toBeInTheDocument();
    expect(screen.queryByText('Floyd Miles')).toBeInTheDocument();
    expect(screen.queryByText('Июнь 14, 2023')).toBeInTheDocument();
    expect(screen.queryByAltText('business image')).toBeInTheDocument();
    expect(screen.queryByAltText('Floyd Miles photo')).toBeInTheDocument();
  });

  it('Should correct data in english', () => {
    props.lng = 'en';
    render(<Post {...props} />);

    expect(screen.queryByText('New post')).toBeInTheDocument();
    expect(screen.queryByText('New post text')).toBeInTheDocument();
    expect(screen.queryByText('Business')).toBeInTheDocument();
    expect(screen.queryByText('Floyd Miles')).toBeInTheDocument();
    expect(screen.queryByText('June 14, 2023')).toBeInTheDocument();
    expect(screen.queryByAltText('business image')).toBeInTheDocument();
    expect(screen.queryByAltText('Floyd Miles photo')).toBeInTheDocument();
  });
});
