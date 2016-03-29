/* eslint-env jasmine */
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Main from '../../src/assets/components/Main';

describe('Main', () => {
  let main;

  beforeEach(() => {
    main = TestUtils.renderIntoDocument(<Main />);
  });

  it('changes state of active when button is clicked', () => {
    TestUtils.Simulate.click(TestUtils.findRenderedDOMComponentWithTag(main, 'button'));
    expect(main.state.active).toBeTruthy();
  });
});
