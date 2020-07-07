import React from 'react';
import Comment from './Comment';

function PostItem({ data }) {

    return (
        <>
            <div className="timeline">
        
                <div className="timeline-item">

                    <div className="timeline-header">
                        <img src={data.author.avatar} className="avatar" alt="" />
                        <span>
                            <strong>{data.author.name}</strong>
                            <small>{data.date}</small>
                        </span>
                    </div>

                    <p className="content">{data.content}</p>
                    <hr />
                    {data.comments.map(comment => <Comment key={comment.id} data={comment} />)}
                </div>
            </div>
        </>
    )
}

export default PostItem;