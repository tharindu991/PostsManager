/*
 * Author: Tharindu Seneviratne
 * Date: 29/02/2020
 *
 * Defines stories for ImageGrid component
 */
import React from 'react';
import {storiesOf} from '@storybook/react-native';
import ImageGrid from './';

storiesOf('ImageGrid', module).add('default view', () => (
  <ImageGrid
    onItemPress={() => console.log('onItemPress: ImageGrid item pressed')}
    imagesArr={[
      {
        albumId: 1,
        id: 1,
        title: 'hello test',
        url: 'https://via.placeholder.com/600/92c952',
        thumbnailUrl: 'https://via.placeholder.com/150/92c952',
      },
    ]}
  />
));
