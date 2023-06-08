import { render, screen } from '@testing-library/react';

import AboutStatistic from '.';
import { AuthorHeaderProps } from './types';

const props: AuthorHeaderProps = {
  name: 'Jenny Wilson',
  image: '/images/users/1.jpg',
  description: 'Lorem ipsum dolor sit amet',
  twitter: 'twitter.com',
  linkedin: 'linkedin.com',
  instagram: 'instagram.com',
  facebook: 'facebook.com',
  lng: 'ru',
};

describe('Test author header', () => {
  it('Should work correct in russian', async () => {
    render(<AboutStatistic {...props} />);

    expect(
      screen.getByText(
        'Всем привет, я Jenny Wilson. Добро пожаловать в мой блог'
      )
    ).toBeInTheDocument();
    expect(screen.getByText('Lorem ipsum dolor sit amet')).toBeInTheDocument();
    expect(screen.queryByAltText(`${props.name} photo`)).toBeInTheDocument();

    expect(screen.queryByAltText(`facebook icon`)).toBeInTheDocument();
    expect(screen.queryByAltText(`instagram icon`)).toBeInTheDocument();
    expect(screen.queryByAltText(`linkedin icon`)).toBeInTheDocument();
    expect(screen.queryByAltText(`facebook icon`)).toBeInTheDocument();
  });

  it('Should work correct in english', async () => {
    props.lng = 'en';
    render(<AboutStatistic {...props} />);

    expect(
      screen.getByText('Hey there, I’m Jenny Wilson. Welcome to my Blog')
    ).toBeInTheDocument();
    expect(screen.getByText('Lorem ipsum dolor sit amet')).toBeInTheDocument();
    expect(screen.queryByAltText(`${props.name} photo`)).toBeInTheDocument();

    expect(screen.queryByAltText(`facebook icon`)).toBeInTheDocument();
    expect(screen.queryByAltText(`instagram icon`)).toBeInTheDocument();
    expect(screen.queryByAltText(`linkedin icon`)).toBeInTheDocument();
    expect(screen.queryByAltText(`facebook icon`)).toBeInTheDocument();
  });
});
