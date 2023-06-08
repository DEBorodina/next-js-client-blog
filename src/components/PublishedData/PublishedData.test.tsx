import { render, screen } from '@testing-library/react';

import PublishedData from '.';
import { PublishedDataProps } from './types';

const props: PublishedDataProps = {
  name: 'Floyd Miles',
  id: 1,
  date: '2023-06-14T00:00:00.000Z',
  lng: 'ru',
};

describe('Test published data', () => {
  it('Published data is correct in russian', () => {
    render(<PublishedData {...props} />);
    expect(screen.queryByText('Floyd Miles')).toBeInTheDocument();
    expect(screen.queryByText('| Июнь 14, 2023')).toBeInTheDocument();
  });

  it('Published data is correct in english', () => {
    props.lng = 'en';
    render(<PublishedData {...props} />);
    expect(screen.queryByText('Floyd Miles')).toBeInTheDocument();
    expect(screen.queryByText('| June 14, 2023')).toBeInTheDocument();
  });
});
