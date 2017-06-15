/**
 * Created by jaeyoung on 2017. 6. 15..
 */
import * as PostActionTypes from '../actiontypes/posts';


const initialState = {
  posts: [
    {
      id: 62,
      uploaded_date: "2017-04-05T13:23:49.586288Z",
      title: "오늘 저녁 식사를 할 사람",
      content: "나와나",
      author: 1,
    },
  ],
};

export default function Posts(state=initialState, action) {
  switch(action.type) {
    case PostActionTypes.POSTS_GET_REQUEST: {
      return {
        ...state,
      };
    }
    case PostActionTypes.POSTS_GET_SUCCESS: {
      return {
        ...state,
        posts: action.posts,
      };
    }
    default:
      return state;
  }
}
