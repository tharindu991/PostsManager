/*
 * Author: Tharindu Seneviratne
 * Date: 29/02/2020
 *
 * Defines tests for PostTile component
 */

import React from 'react';
import PostTile from './';
import renderer from 'react-test-renderer';
const clickFn = jest.fn();

describe('PostTile Component', () => {
  it('PostTile component renders correctly', () => {
    const component = renderer
      .create(
        <PostTile
          username={'test username'}
          title={'test title'}
          onPress={clickFn}
        />,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
