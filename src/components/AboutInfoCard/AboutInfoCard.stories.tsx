import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import InfoCard from './index';

const meta: Meta<typeof InfoCard> = {
  title: 'Info card',
  component: InfoCard,
};

export default meta;
type Story = StoryObj<typeof InfoCard>;

export const Primary: Story = {
  name: 'Info card',
  args: {
    title: 'Why we started this blog',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    alt: 'our team',
    image: '/images/three-persons.png',
    type: 'left',
  },

  render: (args) => {
    return <InfoCard {...args} />;
  },
};
