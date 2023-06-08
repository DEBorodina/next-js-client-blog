import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import Loader from './index';

const meta: Meta<typeof Loader> = {
  title: 'Loader',
  component: Loader,
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Primary: Story = {
  name: 'Loader',

  render: () => {
    return <Loader />;
  },
};
