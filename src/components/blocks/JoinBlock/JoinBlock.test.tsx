import { render, screen } from '@testing-library/react';

import JoinBlock from '.';

describe('Test join block', () => {
  it('Should display join block data in russian', () => {
    render(<JoinBlock lng="ru" />);

    expect(
      screen.queryByText(
        'Пробо алияуид иус ут. Иус нострум десерунт ет, меа ат вереар инвенире аццоммодаре. При ат фугит миним лаборамус, ест ид персиус цопиосае.'
      )
    ).toBeInTheDocument();
    expect(
      screen.queryByText(
        'Присоединяйтесь к нашей команде, чтобы стать частью нашей истории'
      )
    ).toBeInTheDocument();
    expect(screen.queryByText('Присоединиться')).toBeInTheDocument();
  });

  it('Should display join block data in english', () => {
    render(<JoinBlock lng="en" />);

    expect(
      screen.queryByText(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
      )
    ).toBeInTheDocument();
    expect(
      screen.queryByText('Join our team to be a part of our story')
    ).toBeInTheDocument();
    expect(screen.queryByText('Join Now')).toBeInTheDocument();
  });
});
