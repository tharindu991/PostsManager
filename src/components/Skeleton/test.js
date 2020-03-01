/*
 * Author: Tharindu Seneviratne
 * Date: 28/02/2020
 *
 * Defines tests for Skeleton component
 */
import React from 'react';
import Skeleton from './';
import renderer from 'react-test-renderer';
import {View} from 'react-native';

jest.useFakeTimers();

describe('Skeleton Component', () => {
  it('Skeleton component renders correctly', () => {
    const component = renderer
      .create(
        <Skeleton
          loading={true}
          skeltonContent={
            <View style={{flexDirection: 'row'}}>
              <View style={{width: 100, height: 100}} />

              <View
                style={{
                  justifyContent: 'space-between',
                  marginLeft: 12,
                  flex: 1,
                }}>
                <View style={{width: '50%', height: 20}} />
                <View style={{width: '30%', height: 20}} />
                <View style={{width: '80%', height: 20}} />
              </View>
            </View>
          }
        />,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
