import computeWinningCombo from '../../computations/computeWinningCombo';
import { board3, board4, board2 } from '../fixtures/dummyData';

test('should compute winning combo correctly', () => {
    const winner = computeWinningCombo(board3);
    expect(winner).toEqual([
        2,4,6
    ]);
});

test('should compute another winning combo correctly', () => {
    const winner = computeWinningCombo(board4);
    expect(winner).toEqual([
        0,3,6
    ]);
});

test('should detect non winning scenario', () => {
    const winner = computeWinningCombo(board2);
    expect(winner).toEqual("Z");
});