import { render, screen } from '@testing-library/react';

import BrandsBlock from '.';

describe('Test brands block', () => {
  it('Should work correct in russian', () => {
    render(<BrandsBlock lng="ru" />);

    expect(screen.queryByText(`Мы`)).toBeInTheDocument();
    expect(screen.queryByText(`Работаем в`)).toBeInTheDocument();
  });

  it('Should work correct in english', () => {
    render(<BrandsBlock lng="en" />);

    expect(screen.queryByText(`We are`)).toBeInTheDocument();
    expect(screen.queryByText(`Featured in`)).toBeInTheDocument();
  });
});
