import React, { useEffect, useState } from "react";

export default function CommentsList({ id }) {
  const [comments, updateComments] = useState([]);

  const getComments = async () => {
    const res = await fetch(`http://localhost:5000/posts/${id}/comments`);
    const data = await res.json();
    updateComments(data);
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <div className="comments-container">
      {comments.map(({ id, comment }) => (
        <ul key={id}>
          <li>{comment}</li>
        </ul>
      ))}
    </div>
  );
}
