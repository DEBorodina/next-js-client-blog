import { render, screen } from '@testing-library/react';

import TestimonialsBlock from '.';

describe('Test read next block', () => {
  it('Should correct data in russian', () => {
    render(<TestimonialsBlock lng="ru" />);

    expect(screen.queryByText('отзывы')).toBeInTheDocument();
    expect(
      screen.queryByText('Что люди говорят о нашем блоге')
    ).toBeInTheDocument();
    expect(
      screen.queryByText(
        'Пробо алияуид иус ут. Иус нострум десерунт ет, меа ат вереар инвенире аццоммодаре. При ат фугит миним лаборамус.'
      )
    ).toBeInTheDocument();
  });

  it('Should correct data in english', () => {
    render(<TestimonialsBlock lng="en" />);

    expect(screen.queryByText('Testimonials')).toBeInTheDocument();
    expect(
      screen.queryByText('What people say about our blog')
    ).toBeInTheDocument();
    expect(
      screen.queryByText(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
      )
    ).toBeInTheDocument();
  });
});
