import React, { useRef } from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import { PostType } from "../../../redux/state";

type MyPostsPropsType = {
  postsData: Array<PostType>
  addPost: (text: string) => void
}

const MyPosts = (props: MyPostsPropsType) => {

  let postsElements = props.postsData.map( post => <Post message={post.message} likes={post.likes}/>)

  let newPostElement = useRef<HTMLTextAreaElement>(null)

  let addPost = () => {
    if (newPostElement.current !== null) {
      props.addPost('дароу')
    }
  }

    return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
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