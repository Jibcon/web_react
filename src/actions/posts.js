/**
 * Created by jaeyoung on 2017. 6. 15..
 */
import * as PostsActionTypes from '../actiontypes/posts';

export const postsGetRequest = () => {
  return {
    type: PostsActionTypes.POSTS_GET_REQUEST,
  };
};

export const postsGetSuccess = posts => {
  return {
    type: PostsActionTypes.POSTS_GET_SUCCESS,
    posts,
  };
};
