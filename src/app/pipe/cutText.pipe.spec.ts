import { CutTextPipe } from 'app/pipe/cutText.pipe';

describe('CutTextPipe', () => {
  let pipe: CutTextPipe;

  beforeEach(() => {
    pipe = new CutTextPipe();
  });

  it('should return the original string if the length is less than the limit', () => {
    const originalText = 'Short text';
    const result = pipe.transform(originalText, 100);
    expect(result).toEqual(originalText);
  });

  it('should cut the text if it is longer than the limit', () => {
    const originalText = 'Very long text that exceed the limit';
    const result = pipe.transform(originalText, 10);
    expect(result).toEqual('Very long ...');
  });

  it('should return the empty string if the input is undefined', () => {
    const result = pipe.transform(undefined, 10);
    expect(result).toEqual('');
  });
});