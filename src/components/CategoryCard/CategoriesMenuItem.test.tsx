import { render, screen } from '@testing-library/react';

import CategoryCard from '.';
import { CategoryCardProps } from './types';

const props: CategoryCardProps = {
  category: {
    name: 'Business',
    icon: '/icons/business.svg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu.',
  },
};

describe('Test category menu item', () => {
  it('Should display category card', () => {
    render(<CategoryCard {...props} />);

    expect(screen.queryByText(props.category.name)).toBeInTheDocument();
    expect(screen.queryByText(props.category.description)).toBeInTheDocument();
    expect(screen.queryByAltText(props.category.name)).toBeInTheDocument();
  });
});
