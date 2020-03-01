/*
 * Author: Tharindu Seneviratne
 * Date: 28/02/2020
 *
 *   Defines stories for skeleton component
 */

import React from 'react';
import {storiesOf} from '@storybook/react-native';
import Skeleton from './';
import {View} from 'react-native';

storiesOf('Skeleton', module).add('default view', () => (
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
  />
));
