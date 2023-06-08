import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import CategoryCard from './index';

const meta: Meta<typeof CategoryCard> = {
  title: 'Category card',
  component: CategoryCard,
};

export default meta;
type Story = StoryObj<typeof CategoryCard>;

export const Primary: Story = {
  name: 'Category card',
  args: {
    category: {
      name: 'Business',
      icon: '/icons/business.svg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu.',
    },
  },

  render: (args) => {
    return <CategoryCard {...args} />;
  },
};
