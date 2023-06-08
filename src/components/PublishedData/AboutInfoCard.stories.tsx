import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import PublishedData from './index';

const meta: Meta<typeof PublishedData> = {
  title: 'Published data',
  component: PublishedData,
};

export default meta;
type Story = StoryObj<typeof PublishedData>;

export const Primary: Story = {
  name: 'Published data',
  argTypes: {
    date: {
      control: {
        type: 'date',
      },
    },
  },
  args: {
    name: 'John Smith',
    id: 1,
    date: '2023-06-14T00:00:00.000Z',
    lng: 'en',
  },

  render: (args) => {
    let { date } = args;

    if (typeof date !== 'string') {
      date = new Date(+args.date).toUTCString();
    }

    return <PublishedData {...args} date={date} />;
  },
};
