import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import SearchInput from './index';

const meta: Meta<typeof SearchInput> = {
  title: 'Search tags input',
  component: SearchInput,
  decorators: [
    (Story) => (
      <div style={{ width: 400 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof SearchInput>;

export const Primary: Story = {
  name: 'Search tags input',
  argTypes: { addTag: { action: 'clicked' } },
  args: {
    addTag: () => () => {},
  },

  render: (args) => {
    return <SearchInput {...args} />;
  },
};
