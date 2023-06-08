import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import ContactUsForm from '.';

describe('Test contact us form', () => {
  it('Shouldn`t send empty form', async () => {
    render(<ContactUsForm />);
    const send = screen.getByText('Send Message')!;

    await waitFor(() => {
      fireEvent.click(send);
    });

    await waitFor(() => {
      expect(screen.getByText('Email is required')).toBeInTheDocument();
    });
  });
});
