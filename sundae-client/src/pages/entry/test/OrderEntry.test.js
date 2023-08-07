import { render, screen, waitFor } from '@testing-library/react';
import OrderEntry from '../OrderEntry';
import { rest } from 'msw';
import { server } from '../../../mocks/server';

test('handles error for scoops and toppings routes', async () => {
  server.resetHandlers(
    rest.get('http://localhost:3030/scoops', (req, res, ctx) =>
      res(ctx.status(500))
    ),
    rest.get('http://localhost:3030/toppings', (req, res, ctx) =>
      res(ctx.status(500))
    )
  );

  render(<OrderEntry />);

  // waitFor 메소드로 expect 구문이 통과되거나 timeout에 도달할 때까지 기다림
  await waitFor(async () => {
    // 'alert' role은 name으로 찾을 수 없음
    const alerts = await screen.findAllByRole('alert');
    expect(alerts).toHaveLength(2);
  });
});
