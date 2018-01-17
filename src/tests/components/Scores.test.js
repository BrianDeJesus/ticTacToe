import React from 'react';
import { Scores } from '../../components/Scores';
import shallowRenderer from 'react-test-renderer/shallow';

test('should render scores component', () => {
    const renderer = new shallowRenderer();
    const component = renderer.render(<Scores />);
    expect(component).toMatchSnapshot();
});