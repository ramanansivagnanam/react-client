import React from 'react'
import Comments from '../Comments/Comments';
import './PostListItem.css';
export default function PostListItem({title, id}) {
    return (
        <div className="post-list-item-container">
            <h4>{title}</h4>
            <Comments postId={id} />
        </div>
    )
}
