import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import AuthorCard from './index';

const meta: Meta<typeof AuthorCard> = {
  title: 'Author card',
  component: AuthorCard,
};

export default meta;
type Story = StoryObj<typeof AuthorCard>;

export const Primary: Story = {
  name: 'Author card',
  args: {
    name: 'John Smith',
    position: 'developer',
    company: 'modsen',
    image: '/images/users/1.jpg',
    twitter: 'https://twitter.com/',
    instagram: 'https://www.instagram.com/',
    linkedin: 'https://www.linkedin.com/',
    facebook: 'https://www.facebook.com/',
    id: 1,
  },

  render: (args) => {
    return <AuthorCard {...args} />;
  },
};
