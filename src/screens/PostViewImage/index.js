/*
 * Author: Tharindu Seneviratne
 * Date: 29/02/2020
 *
 * Screen to display full image of the post
 */

import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {CachedImage} from 'react-native-cached-images';

class PostViewImage extends Component {
  render() {
    const {selectedImage} = this.props.route.params;
    return (
      <CachedImage source={{uri: selectedImage}} style={styles.container} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default PostViewImage;
