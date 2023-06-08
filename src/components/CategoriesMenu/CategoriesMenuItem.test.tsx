import { render, screen } from '@testing-library/react';

import CategoriesMenu from '.';
import { CategoriesMenuProps } from './types';

const props: CategoriesMenuProps = {
  currentCategory: 'business',
  lng: 'ru',
};

describe('Test category menu item', () => {
  it('Should display categories menu in russian', () => {
    render(<CategoriesMenu {...props} />);

    expect(screen.queryByText('Business')).toBeInTheDocument();
    expect(screen.queryByText('Technology')).toBeInTheDocument();
    expect(screen.queryByText('Startup')).toBeInTheDocument();
    expect(screen.queryByText('Economy')).toBeInTheDocument();
    expect(screen.queryByText('Категории')).toBeInTheDocument();
  });

  it('Should display categories menu in english', () => {
    props.lng = 'en';
    render(<CategoriesMenu {...props} />);

    expect(screen.queryByText('Business')).toBeInTheDocument();
    expect(screen.queryByText('Technology')).toBeInTheDocument();
    expect(screen.queryByText('Startup')).toBeInTheDocument();
    expect(screen.queryByText('Economy')).toBeInTheDocument();
    expect(screen.queryByText('Categories')).toBeInTheDocument();
  });
});
