import React from 'react'
import './Post.css'

function Post(props) {
    return (
        <article className = "Post" onClick={props.Clicked}>
            <h1>{props.title}</h1>
            <div className = "Info">
                <div className = "Author">{props.author}</div>
            </div>
        </article>
    )
}
export default Post