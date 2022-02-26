import React, { useState } from "react";
import Comment from "../comment";
import Reply from "../reply";
import classes from "./comment-list.module.css";

const data = require("../../data.json");

const { comments, currentUser } = data;

function CommentList() {
  const [replyActive, setReplyActive] = useState(false);

  console.log(replyActive);
  function toggleReplyActive() {
    setReplyActive(!replyActive);
  }

  function renderComments(comments) {
    return comments.map((comment, index) => {
      if (comment.replies && comment.replies.length > 0) {
        return (
          <>
            <Comment comment={comment} currentUser={currentUser} />
            {renderReplyList(comment.replies)}
          </>
        );
      }

      if (replyActive) {
        return (
          <li key={comment.id}>
            <Comment
              comment={comment}
              currentUser={currentUser}
              toggleReplyActive={toggleReplyActive}
            />
            <Reply
              currentUser={currentUser}
              replyingTo={comment.user.username}
            />
          </li>
        );
      }

      return (
        <>
          <li key={comment.id}>
            <Comment
              comment={comment}
              currentUser={currentUser}
              toggleReplyActive={toggleReplyActive}
            />
          </li>
        </>
      );
    });
  }

  function renderReplyList(replies) {
    return <ul className={classes.replyList}>{renderComments(replies)}</ul>;
  }

  return <ul className={classes.commentList}>{renderComments(comments)}</ul>;
}

export default CommentList;
