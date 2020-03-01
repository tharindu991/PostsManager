/*
 * Author: Tharindu Seneviratne
 * Date: 26/01/2020
 *
 * Screen to display all the posts
 */
import React, {Component} from 'react';
import {View} from 'react-native';
import {StyleSheet} from 'react-native';
import {ListView, PostTile, Skeleton} from '../../components/';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as PostActions from '../../redux/actions/PostActions';
import {SCREENS} from '../../constants/messages';
import {navigate} from '../../services/navigationService';

class Posts extends Component {
  state = {
    refreshing: false,
  };

  constructor(props) {
    super(props);
    this.renderPosts = this.renderPosts.bind(this);
    this.onRefresh = this.onRefresh.bind(this);
  }

  renderPosts() {
    const {refreshing} = this.state;
    const {posts} = this.props;

    return (
      <ListView
        data={posts.postList}
        renderItem={item => {
          return this.renderPost(item);
        }}
        refreshing={refreshing}
        onRefresh={this.onRefresh}
      />
    );
  }

  onRefresh() {
    const {actions} = this.props;
    this.setState({refreshing: true});
    actions.postActions.getPostList();
  }

  postItemPress(item) {
    navigate(SCREENS.postInfo.route, {
      title: item.title,
      body: item.body,
    });
  }

  renderPost(item) {
    return (
      <PostTile
        testID={`post_item_${item.id.toString()}`}
        title={item.title}
        username={item.user}
        onPress={() => this.postItemPress(item)}
      />
    );
  }

  renderPostSkelton() {
    const {posts} = this.props;

    return posts.postList.map(item => {
      return (
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
      );
    });
  }

  componentDidMount() {
    const {actions} = this.props;
    actions.postActions.getPostList();
  }

  componentDidUpdate(prevProps, prevState) {
    const {posts} = this.props;
    if (prevProps.posts.postList !== posts.postList) {
      this.setState({refreshing: false});
    }
  }

  render() {
    const {posts} = this.props;

    return (
      <View style={styles.container} testID="posts-container">
        <Skeleton
          loading={posts.loading}
          skeltonContent={this.renderPostSkelton()}>
          {this.renderPosts()}
        </Skeleton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
