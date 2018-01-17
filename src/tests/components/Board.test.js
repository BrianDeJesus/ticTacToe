import React from 'react';
import { Board } from '../../components/Board';
import shallowRenderer from 'react-test-renderer/shallow';
import { defaultBoard } from '../fixtures/dummyData';

test('should render Board', () => {
    const renderer = new shallowRenderer();
    const component = renderer.render(<Board board={defaultBoard} />);
    expect(component).toMatchSnapshot();
});