/*
 * Author: Tharindu Seneviratne
 * Date: 29/02/2020
 *
 * Defines tests for ListView component
 */
import React from 'react';
import ListView from './';
import renderer from 'react-test-renderer';
import {Text} from 'react-native';
const onRefresh = jest.fn();

describe('ListView Component', () => {
  it('ListView component renders correctly', () => {
    const component = renderer
      .create(
        <ListView
          data={[
            {
              id: 1,
              title: 'title',
              body: 'body',
              user: 'user',
            },
          ]}
          renderItem={item => <Text>{item.user}</Text>}
          refreshing={false}
          onRefresh={onRefresh}
        />,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
