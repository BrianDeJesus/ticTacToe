import React from 'react';
import { Settings } from '../../components/Settings';
import shallowRenderer from 'react-test-renderer/shallow';

test('should render Settings component', () => {
    const renderer = new shallowRenderer();
    const component = renderer.render(<Settings />);
    expect(component).toMatchSnapshot();
});