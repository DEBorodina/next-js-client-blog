import { render, screen } from '@testing-library/react';

import ReadNextBlock from '.';
import { ReadNextProps } from './types';

const props: ReadNextProps = {
  category: 'startup',
  postId: 1,
  lng: 'ru',
};

describe('Test read next block', () => {
  it('Should correct data in russian', () => {
    render(<ReadNextBlock {...props} />);

    expect(screen.queryByText('Читайте далее')).toBeInTheDocument();
  });

  it('Should correct data in english', () => {
    props.lng = 'en';
    render(<ReadNextBlock {...props} />);

    expect(screen.queryByText('What to read next')).toBeInTheDocument();
  });

  it('Should display 3 text blocks', () => {
    render(<ReadNextBlock {...props} />);

    expect(
      screen.queryAllByText('How to build rapport with your web design clients')
    ).toHaveLength(3);
  });
});
