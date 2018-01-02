import { setHumanScore, setAiScore } from '../../actions/score';

test('should send set human score action', () => {
    const action = setHumanScore();
    expect(action).toEqual({
        type: 'INCREMENT_HUMAN_SCORE'
    });
});

test('should send set ai score action', () => {
    const action = setAiScore();
    expect(action).toEqual({
        type: 'INCREMENT_AI_SCORE'
    });
});