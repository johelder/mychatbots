import { formatName } from './formatName';

describe('formatName Function', () => {
  it('should return a formatted name from a string', () => {
    const formattedName = formatName('Fake Name');

    expect(formattedName).toBe('fake_name');
  });
});
