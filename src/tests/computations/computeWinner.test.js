import computeWinner from '../../computations/computeWinner';
import { board3, board4 } from '../fixtures/dummyData';

test('should compute winner correctly', () => {
    const winner = computeWinner(board3);
    expect(winner).toBe('X');
});

test('should compute winner correctly', () => {
    const winner = computeWinner(board4);
    expect(winner).toBe('O');
});