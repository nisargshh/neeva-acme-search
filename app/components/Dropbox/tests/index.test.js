/**
 *
 * Tests for Dropbox
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { render } from 'react-testing-library';
// import 'jest-dom/extend-expect'; // add some helpful assertions

import Dropbox from '../index';

describe('<Dropbox />', () => {
  it.skip('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<Dropbox />);
    expect(spy).not.toHaveBeenCalled();
  });

  it.skip('Expect to have additional unit tests specified', () => {
    expect(true).toEqual(false);
  });

  /**
   * Unskip this test to use it
   *
   * @see {@link https://jestjs.io/docs/en/api#testskipname-fn}
   */
  it.skip('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<Dropbox />);
    expect(firstChild).toMatchSnapshot();
  });
});
