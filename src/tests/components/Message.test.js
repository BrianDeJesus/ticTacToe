import React from 'react';
import { Message } from '../../components/Message';
import shallowRenderer from 'react-test-renderer/shallow';

test('should render Message component', () => {
    const renderer = new shallowRenderer();
    const component = renderer.render(<Message />);
    expect(component).toMatchSnapshot();
});