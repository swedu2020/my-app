import React from "react";
import {shallow} from 'enzyme';
import Input from '../Input';
describe('<Input>', ()=>{
    it('has one element', ()=>{
        const wrapper = shallow(<Input />);
        expect(wrapper.length).toEqual(1);
        expect(wrapper).toHaveLength(1);
    });
});