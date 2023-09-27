import {
  COMMENT_CREATE,
  COMMENT_DELETE,
  COMMENT_UPDATE,
  COMMENTS_LOAD,
} from "./types";

import uniqId from "uniqid";

const initialState = {
  comments: [],
};

export const commentsReducer = (state = initialState, action) => {
  const { data } = action;
  const { comments } = state;

  switch (action.type) {
    case COMMENT_CREATE:
      return {
        ...state,
        comments: [...state.comments, action.data],
      };
    case COMMENT_UPDATE:
      const itemIndex = comments.findIndex((res) => res.id === data.id);
      const newComments = [
        ...comments.slice(0, itemIndex),
        data,
        ...comments.slice(itemIndex + 1),
      ];
      return {
        ...state,
        comments: newComments,
      };

    case COMMENT_DELETE:
      const itemIndexDelete = comments.findIndex((res) => res.id === data.id);

      const deleteComment = [
        ...comments.slice(0, itemIndexDelete),
        ...comments.slice(itemIndexDelete + 1),
      ];

      return {
        ...state,
        comments: deleteComment,
      };

    case COMMENTS_LOAD:
      const commentNew = data.map((res) => {
        return {
          text: res.name.slice(0, 10) + "...",
          id: uniqId(),
        };
      });

      return {
        ...state,
        comments: commentNew,
      };

    default:
      return state;
  }
};
