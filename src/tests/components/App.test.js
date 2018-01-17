import React from 'react';
import App from '../../components/App';
import shallowRenderer from 'react-test-renderer/shallow';

test('should render App', () => {
    const renderer = new shallowRenderer();
    const component = renderer.render(<App />);
    expect(component).toMatchSnapshot();
});