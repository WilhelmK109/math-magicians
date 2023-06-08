import calculate from '../logic/calculate';

describe('calculate operations', () => {
  it('calculate addition', () => {
    const operation = calculate({ total: 4, next: 4, operation: '+' }, '=');
    expect(operation.total).toBe('8');
  });
  it('calculate subtraction', () => {
    const operation = calculate({ total: 4, next: 4, operation: '-' }, '=');
    expect(operation.total).toBe('0');
  });
  it('should reset calculator when "AC" button is clicked', () => {
    const operation = calculate({ total: 4, next: 4, operation: '+' }, 'AC');
    expect(operation.total).toBe(null);
  });
});
