import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import ReadNextCard from './index';

const meta: Meta<typeof ReadNextCard> = {
  title: 'Read next card',
  component: ReadNextCard,
  decorators: [
    (Story) => (
      <div style={{ width: 400 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ReadNextCard>;

export const Primary: Story = {
  name: 'Read next card',
  args: {
    post: {
      title: 'Why we started this blog',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      image: '/images/three-persons.png',
      date: '2023-06-14T00:00:00.000Z',
      authorId: 1,
      id: 1,
    },
    lng: 'ru',
  },

  render: (args) => {
    return <ReadNextCard {...args} />;
  },
};
