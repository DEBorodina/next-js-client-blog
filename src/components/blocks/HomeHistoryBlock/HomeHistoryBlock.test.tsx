import { render, screen } from '@testing-library/react';

import HomeHistoryBlock from '.';

describe('Test home history block', () => {
  it('Should display home header data in russian', () => {
    render(<HomeHistoryBlock lng="ru" />);

    expect(screen.queryByText('Почему мы начали')).toBeInTheDocument();
    expect(
      screen.queryByText(
        'Пробо алияуид иус ут. Иус нострум десерунт ет, меа ат вереар инвенире аццоммодаре. При ат фугит миним лаборамус, ест ид персиус цопиосае. Юсто импедит трацтатос ут еам. Яуас репудиандае ан яуо, цу иисяуе делецтус вулпутате еум.'
      )
    ).toBeInTheDocument();
    expect(
      screen.queryByText(
        'Это началось как простая идея и превратилось в нашу страсть'
      )
    ).toBeInTheDocument();
    expect(screen.queryByText('Изучите нашу историю >')).toBeInTheDocument();
  });

  it('Should display home header data in english', () => {
    render(<HomeHistoryBlock lng="en" />);

    expect(screen.queryByText('Why we started')).toBeInTheDocument();
    expect(
      screen.queryByText(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.'
      )
    ).toBeInTheDocument();
    expect(
      screen.queryByText(
        'It started out as a simple idea and evolved into our passion'
      )
    ).toBeInTheDocument();
    expect(screen.queryByText('Discover our story >')).toBeInTheDocument();
  });
});
