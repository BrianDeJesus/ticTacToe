import aiMove from '../../computations/aiMove';
import { defaultBoard, board2, board6,board7 } from '../fixtures/dummyData';

test('should correctly compute an ai move', () => {
    const move = aiMove('X', defaultBoard, 7, 'X');
    expect(move).toEqual({
        index: expect.any(Number),
        score: expect.any(Number)
    });
});

test('should not place move on already chosen spot', () => {
    const move = aiMove('O', board7, 7, 'O');
    expect(move.index).not.toBe(0);
});
