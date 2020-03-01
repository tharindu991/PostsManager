/*
 * Author: Tharindu Seneviratne
 * Date: 26/01/2020
 *
 * Posts action creators for data.
 */

import * as types from '../constants';
import httpsService from '../../services/httpsService';

export const getPostData = () => {
  return (dispatch, getState) =>
    httpsService.get('posts').then(res => {
      return res.data;
    });
};

export const getUserData = () => {
  return (dispatch, getState) =>
    httpsService.get('users').then(res => {
      return res.data;
    });
};

export const getPostList = () => {
  return (dispatch, getState) => {
    dispatch(setLoading(true));
    Promise.all([dispatch(getUserData()), dispatch(getPostData())])
      .then(res => {
        dispatch(setPostList(res));
      })
      .catch(err => {
        dispatch(setLoading(false));
      });
  };
};

export const getPostImages = () => {
  return async (dispatch, getState) => {
    httpsService
      .get('photos?album=1')
      .then(res => {
        dispatch(setPostImages(res.data));
      })
      .catch(err => {
        dispatch(setLoading(false));
      });
  };
};

const setPostImages = images => ({
  type: types.SET_POST_IMAGES,
  images,
});

const setPostList = data => ({
  type: types.SET_POSTS_INFO,
  users: data[0],
  posts: data[1],
});

export const setLoading = isLoading => ({
  type: types.SET_LOADING_POSTS,
  isLoading,
});
