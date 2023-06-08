import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import PostListItem from './index';

const meta: Meta<typeof PostListItem> = {
  title: 'Posts lists item',
  component: PostListItem,
};

export default meta;
type Story = StoryObj<typeof PostListItem>;

export const Primary: Story = {
  name: 'Posts lists item',
  args: {
    title: 'Why we started this blog',
    category: 'business',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    image: '/images/three-persons.png',
    id: 1,
  },

  render: (args) => {
    return <PostListItem {...args} />;
  },
};
