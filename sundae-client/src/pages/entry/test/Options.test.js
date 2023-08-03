import { render, screen } from '@testing-library/react';
import Options from '../Options';

const NUMBER_OF_SCOOP_OPTIONS = 2;

test('displays an image for each scoop option from server', async () => {
  render(<Options optionType='scoops' />);

  // find images
  const scoopImages = await screen.findAllByRole('img', { name: /scoop$/i }); // scoop으로 끝나는 단어
  expect(scoopImages).toHaveLength(NUMBER_OF_SCOOP_OPTIONS);

  // confirm alt text of images
  // @ts-ignore
  const altText = scoopImages.map((element) => element.alt);
  // 배열이나 객체는 toEqual 메소드를 사용
  expect(altText).toEqual(['Chocolate scoop', 'Vanilla scoop']);
});
