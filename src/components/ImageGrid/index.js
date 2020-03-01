/*
 * Author: Tharindu Seneviratne
 * Date: 29/02/2020
 *
 * Images grid component
 */

import React from 'react';
import {View, TouchableWithoutFeedback} from 'react-native';
import GridView from 'react-native-super-grid';
import {CachedImage} from 'react-native-cached-images';
import PropTypes from 'prop-types';
import {StyleSheet} from 'react-native';

const ImageGrid = ({imagesArr = [], onItemPress}) => {
  return (
    <View style={styles.gridContainer}>
      <GridView
        itemDimension={140}
        items={imagesArr}
        renderItem={item => (
          <TouchableWithoutFeedback onPress={() => onItemPress(item)}>
            <View style={styles.imageContainer}>
              <CachedImage
                style={styles.imageStyle}
                source={{uri: item.item.thumbnailUrl}}
              />
            </View>
          </TouchableWithoutFeedback>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  gridContainer: {
    justifyContent: 'center',
  },
  imageContainer: {
    height: 145,
    width: 145,
    alignItems: 'center',
  },
  imageStyle: {
    position: 'absolute',
    height: 125,
    width: 125,
    resizeMode: 'cover',
  },
});

ImageGrid.propTypes = {
  onItemPress: PropTypes.func.isRequired,
  imagesArr: PropTypes.array,
};

export default ImageGrid;
