import React from "react";

function Post({post}) {
    return (
        <>
            {post.image && (
                <img
                    style={{height: 100, width: 200, objectFit: "cover"}}
                    src ={URL.createObjectURL(post.image)}
                    alt="Post Cover"
                />
            )}
            <p>{post.content}</p>
            <div>{post.user}</div> 
        </>

    )
}

export default Post;