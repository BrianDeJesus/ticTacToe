import emptySpots from '../../computations/emptySpots';
import { board2 } from '../fixtures/dummyData';

test('should return correct array of empty spots indeces', () => {
    const array = emptySpots(board2);
    expect(array).toEqual([
        0,1,3,5,6,7,8
    ]);
});