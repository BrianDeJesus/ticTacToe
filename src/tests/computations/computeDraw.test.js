import computeDraw from '../../computations/computeDraw';
import { board5, board4 } from '../fixtures/dummyData';

test('should correctly compute draw', () => {
    const result = computeDraw(board5);
    expect(result).toBe(true);
});

test('should correctly compute non-draw', () => {
    const result = computeDraw(board4);
    expect(result).toBe(false);
});