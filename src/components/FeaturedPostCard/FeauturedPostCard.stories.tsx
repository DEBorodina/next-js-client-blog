import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import FeaturePostCard from './index';

const meta: Meta<typeof FeaturePostCard> = {
  title: 'Featured posts card',
  component: FeaturePostCard,
  decorators: [
    (Story) => (
      <div style={{ width: 400 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof FeaturePostCard>;

export const Primary: Story = {
  name: 'Featured posts card',
  args: {
    post: {
      title: 'Why we started this blog',
      date: '2023-06-14T00:00:00.000Z',
      authorId: 1,
      id: 1,
    },
    lng: 'ru',
  },

  render: (args) => {
    return <FeaturePostCard {...args} />;
  },
};
