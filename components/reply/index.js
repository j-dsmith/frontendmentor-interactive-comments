import React, { useState } from "react";
import Image from "next/image";
import classes from "./reply.module.css";

function Reply({ currentUser, replyingTo }) {
  const [value, setValue] = useState("@" + replyingTo);

  return (
    <div className={classes.replyContainer}>
      <Image
        src={currentUser.image.png.slice(1)}
        alt={currentUser.username}
        height={30}
        width={30}
      />
      <textarea
        className={classes.replyTextarea}
        name="reply"
        id="reply"
        rows="3"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></textarea>
      <button className={classes.submitReplyBtn}>Reply</button>
    </div>
  );
}

export default Reply;
