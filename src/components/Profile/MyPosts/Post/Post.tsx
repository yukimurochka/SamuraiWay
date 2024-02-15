import React from "react";
import s from './Post.module.css';

type PostPropsType = {
    message: string
    likes: number
}

const Post = (props: PostPropsType) => {
    return (
        <div className={s.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSufzULpJG7qfRxKTxP9VKzNbPh1mOZRnJH2zRedvp2LiTYtDwVZsyofFwVJ_NkjMs8uCk&usqp=CAU"/>
            {props.message}
            <div>
                <span>Like({props.likes})</span>
            </div>
        </div>

    )
}

export default Post;