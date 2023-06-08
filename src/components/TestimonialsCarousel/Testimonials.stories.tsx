import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import TestimonialsCarousel from './index';

const meta: Meta<typeof TestimonialsCarousel> = {
  title: 'Testimonials carousel',
  component: TestimonialsCarousel,
  decorators: [
    (Story) => (
      <div style={{ width: 800 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TestimonialsCarousel>;

export const Primary: Story = {
  name: 'Testimonials carousel',
  render: () => {
    return <TestimonialsCarousel />;
  },
};
