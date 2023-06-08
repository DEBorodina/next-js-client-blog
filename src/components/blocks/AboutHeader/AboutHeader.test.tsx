import { render, screen } from '@testing-library/react';

import AboutHeader from '.';

describe('Test about header', () => {
  it('Should work correct in russian', async () => {
    render(<AboutHeader lng="ru" />);

    expect(screen.getByText('О нас')).toBeInTheDocument();

    expect(
      screen.getByText('Мы сообщество авторов, которые делятся своими знаниями')
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        'Лорем ипсум долор сит амет, ин агам порро еос, те меа елитр еурипидис. Тота фабеллас детерруиссет про цу, мел еи елигенди перфецто. Нам ин семпер ассуеверит.'
      )
    ).toBeInTheDocument();
  });

  it('Should work correct in english', async () => {
    render(<AboutHeader lng="en" />);

    expect(screen.getByText('About us')).toBeInTheDocument();

    expect(
      screen.getByText(
        'We are a community of content writers who share their learnings'
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      )
    ).toBeInTheDocument();
  });
});
