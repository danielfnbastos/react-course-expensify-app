import React from 'react';
import ReacShallowRenderer from 'react-test-renderer/shallow';
import Header from '../../components/Header';
import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';

test('Should render header correctly', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
});