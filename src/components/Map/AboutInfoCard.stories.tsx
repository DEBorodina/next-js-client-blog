import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import Map from './index';

const meta: Meta<typeof Map> = {
  title: 'Map',
  component: Map,
};

export default meta;
type Story = StoryObj<typeof Map>;

export const Primary: Story = {
  name: 'Map',

  render: () => {
    return <Map />;
  },
};
