import React from "react";
import { PostContext } from "../App";

function CreatePost({user, handleAddPost}) {
    const {dispatch} = React.useContext(PostContext);
    const [content, setContent] = React.useState('');
    const [image, setImage] = React.useState(null);
    const imageInputRef = React.useRef();

    function handleSubmit(event) {
        event.preventDefault();
        //const post = { content: content, image: image, user: user};
        //shortened version of above
        const post = {content, image, user, id: Date.now()};
        dispatch({ type: "ADD_POST", payload: { post }})
        setContent('')
        imageInputRef.current.value = " ";
    }

    return (
        <div>
            <h1>Create New Post</h1>
            <form onSubmit={handleSubmit}>
                <input  
                    type="text"
                    placeholder="Add Post Comment"
                    onChange = {event => setContent(event.target.value)}
                    value={content}
                />
                <input
                    type="file"
                    onChange = {event => setImage(event.target.files[0])}
                    ref={imageInputRef}
                />
                <button type="submit">Submit</button>
            </form>
            
        </div>
    )
}

export default CreatePost;