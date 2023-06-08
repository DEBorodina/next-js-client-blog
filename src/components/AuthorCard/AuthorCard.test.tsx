import { render, screen } from '@testing-library/react';

import InfoCard from '.';
import { AuthorCardProps } from './types';

const props: AuthorCardProps = {
  name: 'John Smith',
  position: 'developer',
  company: 'modsen',
  image: '/images/users/1.jpg',
  twitter: 'https://twitter.com/',
  instagram: 'https://www.instagram.com/',
  linkedin: 'https://www.linkedin.com/',
  facebook: 'https://www.facebook.com/',
  id: 1,
};

describe('Test author card', () => {
  it('Should display author info', () => {
    render(<InfoCard {...props} />);
    expect(
      screen.queryByText(`${props.position} ${props.company}`)
    ).toBeInTheDocument();
    expect(screen.queryByText(props.name)).toBeInTheDocument();
    expect(screen.queryByAltText(`${props.name} photo`)).toBeInTheDocument();

    expect(screen.queryByAltText(`facebook icon`)).toBeInTheDocument();
    expect(screen.queryByAltText(`instagram icon`)).toBeInTheDocument();
    expect(screen.queryByAltText(`linkedin icon`)).toBeInTheDocument();
    expect(screen.queryByAltText(`facebook icon`)).toBeInTheDocument();
  });
});
