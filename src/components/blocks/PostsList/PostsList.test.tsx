import { fireEvent, render, screen } from '@testing-library/react';

import PostsList from '.';
import { PostsListProps } from './types';

const scrollIntoViewMock = jest.fn();
window.HTMLElement.prototype.scrollIntoView = scrollIntoViewMock;

const props: PostsListProps = {
  posts: [
    {
      category: 'business',
      title: 'new post 1',
      description: 'description 1',
      image: '/images/posts/1.png',
      id: 1,
    },
    {
      category: 'business',
      title: 'new post 2',
      description: 'description 2',
      image: '/images/posts/2.png',
      id: 2,
    },
    {
      category: 'business',
      title: 'new post 3',
      description: 'description 3',
      image: '/images/posts/3.png',
      id: 3,
    },
    {
      category: 'business',
      title: 'new post 4',
      description: 'description 4',
      image: '/images/posts/4.png',
      id: 4,
    },
    {
      category: 'business',
      title: 'new post 5',
      description: 'description 5',
      image: '/images/posts/5.png',
      id: 5,
    },
    {
      category: 'business',
      title: 'new post 6',
      description: 'description 6',
      image: '/images/posts/6.png',
      id: 6,
    },
    {
      category: 'business',
      title: 'new post 7',
      description: 'description 7',
      image: '/images/posts/7.png',
      id: 7,
    },
  ],
  listTitle: 'Posts',
  lng: 'ru',
};

describe('Test posts list', () => {
  it('Should correct data in russian', () => {
    render(<PostsList {...props} />);

    expect(screen.queryByText('Posts')).toBeInTheDocument();
    expect(screen.queryByText('< Пред')).toBeInTheDocument();
    expect(screen.queryByText('След >')).toBeInTheDocument();
  });

  it('Should correct data in english', () => {
    props.lng = 'en';
    render(<PostsList {...props} />);

    expect(screen.queryByText('Posts')).toBeInTheDocument();
    expect(screen.queryByText('< Prev')).toBeInTheDocument();
    expect(screen.queryByText('Next >')).toBeInTheDocument();
  });

  it('Should display first 5 posts', () => {
    render(<PostsList {...props} />);

    props.posts.forEach(({ title, id }) => {
      if (id <= 1) expect(screen.queryByText(title)).toBeInTheDocument();
    });
  });

  it('Should switch to next page', () => {
    render(<PostsList {...props} />);

    fireEvent.click(screen.getByText('Next >'));

    props.posts.forEach(({ title, id }) => {
      if (id >= 6 && id <= 7)
        expect(screen.queryByText(title)).toBeInTheDocument();
    });

    expect(scrollIntoViewMock).toBeCalled();
  });

  it('Should switch to previous page', () => {
    render(<PostsList {...props} />);

    fireEvent.click(screen.getByText('Next >'));

    props.posts.forEach(({ title, id }) => {
      if (id >= 6 && id <= 7)
        expect(screen.queryByText(title)).toBeInTheDocument();
    });

    fireEvent.click(screen.getByText('< Prev'));

    props.posts.forEach(({ title, id }) => {
      if (id <= 5) expect(screen.queryByText(title)).toBeInTheDocument();
    });

    expect(scrollIntoViewMock).toBeCalled();
  });
});
