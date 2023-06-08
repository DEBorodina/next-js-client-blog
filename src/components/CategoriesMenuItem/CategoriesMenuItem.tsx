import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import CategoryListItem from './index';

const meta: Meta<typeof CategoryListItem> = {
  title: 'Categories list item',
  component: CategoryListItem,
};

export default meta;
type Story = StoryObj<typeof CategoryListItem>;

export const Primary: Story = {
  name: 'Categories list item',
  args: {
    category: {
      name: 'Business',
      icon: '/icons/business.svg',
    },
    isCurrent: false,
  },

  render: (args) => {
    return <CategoryListItem {...args} />;
  },
};
