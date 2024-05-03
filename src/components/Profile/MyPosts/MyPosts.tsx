import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {

  let postsData = [
    {id: 1, message: 'где я?', likes: 123},
    {id: 2, message: 'здарова', likes: 41}
  ]

  let postsElements = postsData.map( post => <Post message={post.message} likes={post.likes}/>)

    return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
          <button>Remove</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
    )
}

export default MyPosts;