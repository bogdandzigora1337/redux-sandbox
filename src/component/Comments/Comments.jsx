import { useState, useEffect, useDeferredValue } from "react";
import { useDispatch, useSelector } from "react-redux";
import { commentCreate, commentsLoad } from "../redux/actions";
import uniqId from "uniqid";

import SingleComment from "../SingleComment/SingleComment";
import { Spin } from "../Spin/Spin";

import "./Comments.scss";

function Comments() {
  const [textComment, setTextComment] = useState("");

  const error = useSelector((state) => {
    return state.appReducer.error;
  });

  const comments = useSelector((state) => {
    const { commentsReducer } = state;

    return commentsReducer.comments;
  });

  const dispatch = useDispatch();

  const handleClick = (e) => {
    setTextComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const id = uniqId();
    dispatch(commentCreate(textComment, id));
  };

  useEffect(() => {
    dispatch(commentsLoad());
  }, []);

  return (
    <div className="card-comments">
      {error && (
        <div className="card-error">
          <h1>{error}</h1>
        </div>
      )}
      <Spin></Spin>
      <form onSubmit={handleSubmit} className="comments-item-create">
        <input type="text" value={textComment} onChange={handleClick} />
        <input type="submit" hidden />
      </form>
      {Boolean(comments.length) &&
        comments.map((res) => {
          return <SingleComment key={res.id} comment={res} />;
        })}
    </div>
  );
}

export default Comments;
