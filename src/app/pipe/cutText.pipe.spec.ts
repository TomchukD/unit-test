import { CutTextPipe } from 'app/pipe/cutText.pipe';

describe('CutTextPipe', () => {
  let pipe: CutTextPipe;

  beforeEach(() => {
    pipe = new CutTextPipe();
  });

  it('case: 1 - return original str of length less than the limit', () => {
    const originalText = 'Short text';
    const result = pipe.transform(originalText, 100);
    expect(result).toEqual(originalText);
  });

  it('case: 2 - should cut the text if it is longer than the limit', () => {
    const originalText = 'Very long text that exceed the limit';
    const result = pipe.transform(originalText, 9);
    expect(result).toEqual('Very long');
  });

  it('case: 3 - should return the empty string if the input is undefined', () => {
    const result = pipe.transform(undefined, 10);
    expect(result).toEqual(null);
  });
});