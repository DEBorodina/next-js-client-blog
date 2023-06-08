import { render, screen } from '@testing-library/react';

import AboutStatistic from '.';

describe('Test about statistic block', () => {
  it('Should work correct in russian', async () => {
    render(<AboutStatistic lng="ru" />);

    expect(screen.getByText('Опубликованных блогов')).toBeInTheDocument();
    expect(screen.getByText('Просмотров на Finsweet')).toBeInTheDocument();
    expect(screen.getByText('Активных пользователей')).toBeInTheDocument();

    expect(screen.getByText('12+')).toBeInTheDocument();
    expect(screen.getByText('18K+')).toBeInTheDocument();
    expect(screen.getByText('30K+')).toBeInTheDocument();
  });

  it('Should work correct in english', async () => {
    render(<AboutStatistic lng="en" />);

    expect(screen.getByText('Blogs Published')).toBeInTheDocument();
    expect(screen.getByText('Views on Finsweet')).toBeInTheDocument();
    expect(screen.getByText('Total active Users')).toBeInTheDocument();

    expect(screen.getByText('12+')).toBeInTheDocument();
    expect(screen.getByText('18K+')).toBeInTheDocument();
    expect(screen.getByText('30K+')).toBeInTheDocument();
  });
});
