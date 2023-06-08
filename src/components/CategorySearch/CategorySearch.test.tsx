import { fireEvent, render, screen } from '@testing-library/react';

import categories from '@data/categories.json';
import tags from '@data/tags.json';

import CategorySearch from '.';
import { CategorySearchProps } from './types';

const addTag = jest.fn();

const props: CategorySearchProps = {
  category: 'business',
  handleClick: () => () => addTag(),
  selectedTags: [],
  lng: 'en',
};

describe('Test author card', () => {
  it('Should display all tags', () => {
    render(<CategorySearch {...props} />);
    expect(screen.queryByText(`All tags`)).toBeInTheDocument();

    tags.forEach((tag) => {
      if (categories.map(({ name }) => name).includes(tag)) {
        expect(screen.queryAllByText(tag)).toHaveLength(2);
      } else {
        expect(screen.queryByText(tag)).toBeInTheDocument();
      }
    });
  });

  it('Should display selected tags', () => {
    props.selectedTags = ['UI'];
    render(<CategorySearch {...props} />);
    expect(screen.queryByText(`All tags`)).toBeInTheDocument();

    expect(screen.queryByText('UI')).toHaveClass('tag_selected');
  });

  it('Should add tag', () => {
    props.selectedTags = ['UI'];
    render(<CategorySearch {...props} />);
    expect(screen.queryByText(`All tags`)).toBeInTheDocument();

    const tag = screen.queryByText('Web')!;
    fireEvent.click(tag);
    expect(addTag).toBeCalled();
  });
});
