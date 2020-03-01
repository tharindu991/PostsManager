/*
 * Author: Tharindu Seneviratne
 * Date: 29/02/2020
 *
 * Defines stories for PostTile component
 */

import React from 'react';
import {storiesOf} from '@storybook/react-native';
import PostTile from './';

storiesOf('PostTile', module).add('default view', () => (
  <PostTile
    username={'test username'}
    title={'test title'}
    onPress={() => console.log('onPress: PostTile onRefresh called')}
  />
));
