import operate from '../logic/operate';

describe('operations logic', () => {
  it('add operate', () => {
    const operation = operate('4', '4', '+');
    expect(operation).toBe('8');
  });
  it('subtract operator', () => {
    const operation = operate('4', '4', '-');
    expect(operation).toBe('0');
  });
  it('modulus operator', () => {
    const operation = operate('4', '4', '%');
    expect(operation).toBe('0');
  });
  it('multiply operator', () => {
    const operation = operate('4', '4', 'x');
    expect(operation).toBe('16');
  });
  it('divide operator', () => {
    const operation = operate('4', '4', '÷');
    expect(operation).toBe('1');
  });
});