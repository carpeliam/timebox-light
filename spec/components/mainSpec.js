/* eslint-env jasmine */
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Main from '../../src/assets/components/Main';
import Box from '../../src/assets/components/Box';

describe('Main', () => {
  let main;
  let box;
  beforeEach(() => {
    main = TestUtils.renderIntoDocument(<Main />);
    box = TestUtils.findRenderedComponentWithType(main, Box);
  });

  it('contains a box', () => {
    expect(box).toBeDefined();
  });

  it('passes props to box', () => {
    expect(box.props.name).toEqual('I am a box');
    expect(box.props.duration).toEqual(0);
    expect(box.props.lastCheckedTime).toBeUndefined();
    expect(box.props.paused).toBeTruthy();
  });

  it('starts out in a paused state', () => {
    expect(main.state.paused).toBeTruthy();
  });

  it('clears timer on unmount', () => {
    const clearIntervalSpy = spyOn(global, 'clearInterval');
    main.componentWillUnmount();
    expect(clearIntervalSpy).toHaveBeenCalled();
  });

  it('should not increase the duration if paused', () => {
    jasmine.clock().install();
    jasmine.clock().mockDate();
    main = TestUtils.renderIntoDocument(<Main />);

    jasmine.clock().tick(100);
    expect(main.state.duration).toEqual(0);
    jasmine.clock().tick(100);
    expect(main.state.duration).toEqual(0);
    jasmine.clock().uninstall();
  });

  describe('when clicking a button', () => {
    it('changes state of paused', () => {
      TestUtils.Simulate.click(TestUtils.findRenderedDOMComponentWithTag(main, 'button'));
      expect(main.state.paused).toBeFalsy();
    });

    it('starts a timer', () => {
      jasmine.clock().install();
      jasmine.clock().mockDate();
      main = TestUtils.renderIntoDocument(<Main />);
      TestUtils.Simulate.click(TestUtils.findRenderedDOMComponentWithTag(main, 'button'));
      jasmine.clock().tick(100);
      expect(main.state.duration).toEqual(0);
      expect(main.state.lastCheckedTime).toEqual(Date.now());
      jasmine.clock().tick(100);
      expect(main.state.duration).toEqual(100);
      expect(main.state.lastCheckedTime).toEqual(Date.now());
      jasmine.clock().uninstall();
    });
  });
});
