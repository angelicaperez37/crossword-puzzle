import React from "react";
import { mount } from "enzyme";
import { Square } from "../js/Square";

describe("Square Tests", () => {
    let mountedSquare;

    beforeAll(() => {
        mountedSquare = mount(<Square />);
    });

    it('Should contain a single input field', () => {
        mountedSquare.find('input').simulate('change', { target: { value: '1234567890!!!' } });
        expect(mountedSquare.find('input').length).toBe(1);
    });

});