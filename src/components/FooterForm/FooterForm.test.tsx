import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import FooterForm from '.';

describe('Test footer form', () => {
  it('Shouldn`t send empty form', async () => {
    render(<FooterForm />);
    const send = screen.getByText('Subscribe')!;

    await waitFor(() => {
      fireEvent.click(send);
    });

    await waitFor(() => {
      expect(screen.getByText('Email is required')).toBeInTheDocument();
    });
  });
});
