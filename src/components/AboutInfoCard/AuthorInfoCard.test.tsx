import { render, screen } from '@testing-library/react';

import InfoCard from '.';
import { AboutInfoCardProps } from './types';

const props: AboutInfoCardProps = {
  title: 'Why we started this blog',
  subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu.',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  alt: 'our team',
  image: '/images/three-persons.png',
  type: 'left',
};

describe('Test info card', () => {
  it('About info card should display info', () => {
    render(<InfoCard {...props} />);
    expect(screen.queryByText(props.title)).toBeInTheDocument();
    expect(screen.queryByText(props.subtitle)).toBeInTheDocument();
    expect(screen.queryByText(props.description)).toBeInTheDocument();
    expect(screen.queryByAltText(props.alt)).toBeInTheDocument();
  });
});
