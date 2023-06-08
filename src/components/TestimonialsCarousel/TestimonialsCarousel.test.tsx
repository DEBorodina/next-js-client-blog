import { fireEvent, render, screen } from '@testing-library/react';

import TestimonialsCarousel from '.';

describe('Test testimonials carousel', () => {
  it('Should display first testimonial', () => {
    render(<TestimonialsCarousel />);

    expect(
      screen.queryByText(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      )
    ).toBeInTheDocument();
    expect(screen.queryByText('Jonathan Vallem')).toBeInTheDocument();
    expect(screen.queryByText('New york, USA')).toBeInTheDocument();
    expect(screen.getByAltText('Jonathan Vallem photo')).toBeInTheDocument();

    expect(screen.queryByText('<')).toHaveClass('carousel__button_disabled');
    expect(screen.queryByText('>')).not.toHaveClass(
      'carousel__button_disabled'
    );
  });

  it('Should switch to another testimonial', () => {
    render(<TestimonialsCarousel />);

    const next = screen.queryByText('>')!;
    fireEvent.click(next);

    expect(
      screen.queryByText(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      )
    ).toBeInTheDocument();
    expect(screen.queryByText('Jenny Wilson')).toBeInTheDocument();
    expect(screen.queryByText('London, UK')).toBeInTheDocument();
    expect(screen.getByAltText('Jenny Wilson photo')).toBeInTheDocument();

    expect(screen.queryByText('<')).not.toHaveClass(
      'carousel__button_disabled'
    );
    expect(screen.queryByText('>')).not.toHaveClass(
      'carousel__button_disabled'
    );
  });

  it('Should switch to the last  testimonial', () => {
    render(<TestimonialsCarousel />);

    const next = screen.queryByText('>')!;
    fireEvent.click(next);
    fireEvent.click(next);

    expect(
      screen.queryByText(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
      )
    ).toBeInTheDocument();
    expect(screen.queryByText('Leslie Alexander')).toBeInTheDocument();
    expect(screen.queryByText('New york, USA')).toBeInTheDocument();
    expect(screen.getByAltText('Leslie Alexander photo')).toBeInTheDocument();

    expect(screen.queryByText('<')).not.toHaveClass(
      'carousel__button_disabled'
    );
    expect(screen.queryByText('>')).toHaveClass('carousel__button_disabled');
  });
});
