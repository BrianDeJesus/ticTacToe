import scoreReducer from '../../reducers/scoreReducer';
import { defaultScores } from '../fixtures/dummyData';

test('should increment score correctly', () => {
    const state = scoreReducer(defaultScores, {
        type: 'INCREMENT_HUMAN_SCORE'
    });
    expect(state).toEqual({
        humanScore: 1,
        aiScore: 0
    });
});