import React from 'react';

function Comment({ data }) {
    return (
        <>
            <div className="comments">
                <img src={data.author.avatar} className="avatar" alt="" />
                <span>
                    <p>
                        <strong>{data.author.name}</strong> {data.content}
                    </p>
                </span>
            </div>
        </>
    )
}

export default Comment;