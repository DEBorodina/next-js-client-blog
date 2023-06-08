import { render, screen } from '@testing-library/react';

import CategoriesSection from '.';

describe('Test categories section', () => {
  it('Should display correct data with correct align', () => {
    render(<CategoriesSection title="Categories" titleAlign="left" />);

    expect(screen.queryByText(`Categories`)).toBeInTheDocument();
    expect(screen.queryByText(`Categories`)).toHaveStyle('text-align:left');
  });
});
