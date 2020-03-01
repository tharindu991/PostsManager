/*
 * Author: Tharindu Seneviratne
 * Date: 29/02/2020
 *
 * Screen to display information of selected post
 */

import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as PostActions from '../../redux/actions/PostActions';
import {SCREENS} from '../../constants/messages';
import CommonStyles from '../../theme/commonStyles';
import {ImageGrid} from '../../components/';
import {navigate} from '../../services/navigationService';

class PostInfo extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.actions.postActions.getPostImages();
  }

  render() {
    const {route, posts} = this.props;
    const {title, body} = route.params;
    return (
      <View style={styles.container}>
        <Text style={CommonStyles.boldText}> {title} </Text>
        <Text style={[styles.bodyContainer, CommonStyles.justifyText]}>
          {body}
        </Text>
        <ImageGrid
          onItemPress={item => {
            navigate(SCREENS.postImage.route, {
              selectedImage: item.item.url,
            });
          }}
          imagesArr={posts.images}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...CommonStyles.pageBgColor,
    flex: 1,
    paddingTop: 10,
    padding: 20,
  },
  bodyContainer: {
    padding: 8,
  },
});

const mapStateToProps = state => ({
  posts: state.PostReducer,
});

const mapDispatchToProps = dispatch => ({
  actions: {
    postActions: bindActionCreators(PostActions, dispatch),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PostInfo);
