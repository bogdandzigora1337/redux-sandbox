import { useState, useEffect } from "react";
import { commentUpdate, commentDelete } from "../redux/actions";
import { useDispatch } from "react-redux";

import "../SingleComment/SingleComment.scss";

const SingleComment = ({ comment }) => {
  const [commentText, setCommentText] = useState("");
  const { text, id } = comment;
  const dispatch = useDispatch();

  useEffect(() => {
    if (text) {
      setCommentText(text);
    }
  }, [text]);

  const handleInput = (e) => {
    setCommentText(e.target.value);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(commentUpdate(commentText, id));
  };

  const handleDelete = () => {
    dispatch(commentDelete(id));
  };

  return (
    <form className="comments-item" onSubmit={handleUpdate}>
      <div className="comments-item-delete" onClick={handleDelete}>
        &times;
      </div>
      <input type="text" value={commentText} onChange={handleInput} />
      <input type="submit" hidden />
    </form>
  );
};

export default SingleComment;
