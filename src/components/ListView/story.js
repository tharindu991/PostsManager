/*
 * Author: Tharindu Seneviratne
 * Date: 29/02/2020
 *
 * Defines stories for ListView component
 */

import React from 'react';
import {storiesOf} from '@storybook/react-native';
import ListView from './';
import {Text, View} from 'react-native';

const Container = ({children}) => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#dce3e5',
    }}>
    {children}
  </View>
);

storiesOf('ListView', module).add('default view', () => (
  <Container>
    <ListView
      data={[
        {
          id: 5,
          title: 'title',
          body: 'body',
          user: 'user',
        },
      ]}
      renderItem={item => <Text>{item.user}</Text>}
      refreshing={false}
      onRefresh={() => console.log('onRefresh: ListView onRefresh called')}
    />
  </Container>
));
