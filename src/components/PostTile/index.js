/*
 * Author: Tharindu Seneviratne
 * Date: 29/02/2020
 *
 * single post with information
 */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';
import CommonStyles from '../../theme/commonStyles';
import PropTypes from 'prop-types';

const PostTile = ({username, title, onPress, testID}) => {
  return (
    <View style={[styles.container, CommonStyles.contentCenter]}>
      <TouchableOpacity
        testID={testID}
        style={[styles.touchable, styles.touchableShadow]}
        onPress={onPress}>
        <Text style={CommonStyles.boldText}>{username}</Text>
        <Text style={CommonStyles.standardText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...CommonStyles.pageBgColor,
    flex: 1,
    paddingTop: 15,
    padding: 10,
  },
  touchable: {
    width: '100%',
    borderRadius: 6,
    padding: 20,
    backgroundColor: 'white',
  },
  touchableShadow: {
    ...CommonStyles.tileShadowColor,
    elevation: 5,
    shadowOffset: {height: 6},
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
});

PostTile.propTypes = {
  username: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default PostTile;
