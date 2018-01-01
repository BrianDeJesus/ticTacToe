import React from 'react';
import Header from '../../components/Header';
import renderer from 'react-test-renderer';

test('should render Header', () => {
    const component = renderer.create(<Header />).toJSON();
    expect(component).toMatchSnapshot();
});