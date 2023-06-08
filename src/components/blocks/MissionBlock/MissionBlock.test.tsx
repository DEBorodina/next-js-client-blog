import { render, screen } from '@testing-library/react';

import MissionBlock from '.';

describe('Test mission block', () => {
  it('Should display about us and our vision with type main', () => {
    render(<MissionBlock lng="en" type="main" />);

    expect(screen.queryByText('Our vision')).toBeInTheDocument();
    expect(screen.queryByText('About us')).toBeInTheDocument();
  });

  it('Should display our mission and our vision with type about', () => {
    render(<MissionBlock lng="en" type="about" />);

    expect(screen.queryByText('Our vision')).toBeInTheDocument();
    expect(screen.queryByText('Our mission')).toBeInTheDocument();
  });

  it('Should display about us section in russian', () => {
    render(<MissionBlock lng="ru" type="main" />);

    expect(screen.queryByText('О нас')).toBeInTheDocument();
    expect(
      screen.queryByText(
        'Мы сообщество авторов, которые делятся своими знаниями'
      )
    ).toBeInTheDocument();

    expect(
      screen.queryByText(
        'Лорем ипсум долор сит амет, ин агам порро еос, те меа елитр еурипидис. Тота фабеллас детерруиссет про цу, мел еи елигенди перфецто. Нам ин семпер ассуеверит.'
      )
    ).toBeInTheDocument();
    expect(screen.queryByText('Читать далее >')).toBeInTheDocument();
  });

  it('Should display about us section in english', () => {
    render(<MissionBlock lng="en" type="main" />);

    expect(screen.queryByText('About us')).toBeInTheDocument();
    expect(
      screen.queryByText(
        'We are a community of content writers who share their learnings'
      )
    ).toBeInTheDocument();
    expect(
      screen.queryByText(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      )
    ).toBeInTheDocument();
    expect(screen.queryByText('Read more >')).toBeInTheDocument();
  });

  it('Should display our vision section in russian', () => {
    render(<MissionBlock lng="ru" type="main" />);

    expect(screen.queryByText('Наш взгляд')).toBeInTheDocument();
    expect(
      screen.queryByText(
        'Платформа, которая позволяет людям совершенствоваться'
      )
    ).toBeInTheDocument();
    expect(
      screen.queryByText(
        'Лорем ипсум долор сит амет, ин агам порро еос, те меа елитр еурипидис. Тота фабеллас детерруиссет про цу, мел еи елигенди перфецто. Нам ин семпер ассуеверит. Про инермис нолуиссе сигниферумяуе.'
      )
    ).toBeInTheDocument();
  });

  it('Should display our vision section in english', () => {
    render(<MissionBlock lng="en" type="main" />);

    expect(screen.queryByText('Our vision')).toBeInTheDocument();
    expect(
      screen.queryByText('A platform that empowers individuals to improve')
    ).toBeInTheDocument();
    expect(
      screen.queryByText(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.'
      )
    ).toBeInTheDocument();
  });

  it('Should display our mission section in russian', () => {
    render(<MissionBlock lng="ru" type="about" />);

    expect(screen.queryByText('Наша миссия')).toBeInTheDocument();
    expect(
      screen.queryByText(
        'Мы сообщество авторов, которые делятся своими знаниями'
      )
    ).toBeInTheDocument();
    expect(
      screen.queryByText(
        'Лорем ипсум долор сит амет, ин агам порро еос, те меа елитр еурипидис. Тота фабеллас детерруиссет про цу, мел еи елигенди перфецто. Нам ин семпер ассуеверит.'
      )
    ).toBeInTheDocument();
  });

  it('Should display our mission section in english', () => {
    render(<MissionBlock lng="en" type="about" />);

    expect(screen.queryByText('Our mission')).toBeInTheDocument();
    expect(
      screen.queryByText(
        'We are a community of content writers who share their learnings'
      )
    ).toBeInTheDocument();
    expect(
      screen.queryByText(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      )
    ).toBeInTheDocument();
  });
});
