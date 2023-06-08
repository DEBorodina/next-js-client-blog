import { render, screen } from '@testing-library/react';

import CategoriesMenuItem from '.';
import { CategoriesMenuItemProps } from './types';

const props: CategoriesMenuItemProps = {
  category: {
    name: 'Business',
    icon: '/icons/business.svg',
  },
  isCurrent: false,
};

describe('Test category menu item', () => {
  it('Should display category item', () => {
    render(<CategoriesMenuItem {...props} />);

    expect(screen.getByLabelText('category-list-item')).not.toHaveClass(
      'category_current'
    );
    expect(screen.queryByText(props.category.name)).toBeInTheDocument();
    expect(screen.queryByAltText(props.category.name)).toBeInTheDocument();
  });

  it('Should display current category item', () => {
    props.isCurrent = true;
    render(<CategoriesMenuItem {...props} />);

    expect(screen.getByLabelText('category-list-item')).toHaveClass(
      'category_current'
    );
    expect(screen.queryByText(props.category.name)).toBeInTheDocument();
    expect(screen.queryByAltText(props.category.name)).toBeInTheDocument();
  });
});
