/*
 * Author: Tharindu Seneviratne
 * Date: 26/01/2020
 *
 * posts reducer for retrieving data.
 */

import * as types from '../constants';

export default function PostReducer(
  state = {postList: [], loading: false},
  action,
) {
  switch (action.type) {
    case types.SET_POSTS_INFO:
      const users = action.users;
      const posts = action.posts;
      const postList = posts.map(post => {
        const userInfo = users.filter(user => user.id === post.userId)[0];
        const updatedPost = {
          id: post.id,
          title: post.title,
          body: post.body,
          user: userInfo.name,
        };
        return updatedPost;
      });
      return {
        ...state,
        loading: false,
        error: null,
        postList,
      };
    case types.SET_POST_IMAGES:
      return {
        ...state,
        loading: false,
        images: action.images,
      };
    case types.SET_LOADING_POSTS:
      return {
        ...state,
        loading: action.isLoading,
      };
    default:
      return state;
  }
}
