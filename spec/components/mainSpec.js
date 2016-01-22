import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Main from '../../src/assets/components/Main'
import Box from '../../src/assets/components/Box'

describe('Main', function () {
    let main, box;
    beforeEach(function () {
        main = TestUtils.renderIntoDocument(<Main></Main>);
        box = TestUtils.findRenderedComponentWithType(main, Box);
    });

    it('contains a box', function () {
        expect(box).toBeDefined();
    });

    it('passes props to box', function () {
        expect(box.props.name).toEqual('I am a box');
        expect(box.props.duration).toEqual(0);
        expect(box.props.lastCheckedTime).toBeUndefined();
        expect(box.props.paused).toBeTruthy();
    });
});
