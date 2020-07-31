import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import NumberWidget from './index';
import { getTestDefaultWidgetProps } from '../tools';

Enzyme.configure({ adapter: new Adapter() });
const wrapper = Enzyme.mount(<NumberWidget {...getTestDefaultWidgetProps()} value={2} />);

describe('render NumberWidget', () => {
  it('should render snapshot without error', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});