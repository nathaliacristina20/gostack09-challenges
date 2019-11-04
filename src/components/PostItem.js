import React from 'react';
import PropTypes from 'prop-types';

function PostItem({ data }) {
    
    return (
       
        <>
            <div className="timeline-item">

                <div className="timeline-header">
                    <img src={data.author.avatar} className="avatar" alt="" />
                    <strong>{data.author.name}</strong>
                    <small>{data.date}</small>
                    <p>{data.content}</p>
                </div>
                

            </div>
        </>
    )
}

export default PostItem;