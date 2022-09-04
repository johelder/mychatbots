import { formatDate } from './formatDate';

describe('formatDate Function', () => {
  it('should return a formatted date from a date and culture', () => {
    const formattedDate = formatDate('2020-01-11T14:35:44.510Z', 'pt-BR');

    expect(formattedDate).toBe('11/01/2020');
  });
});
