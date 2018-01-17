import React from 'react';
import { Square } from '../../components/Square';
import shallowRenderer from 'react-test-renderer/shallow';
import { defaultBoard } from '../fixtures/dummyData';

test('should render Square component', () => {
    const renderer = new shallowRenderer();
    const component = renderer.render(<Square board={defaultBoard} id={5}/>);
    expect(component).toMatchSnapshot();
});