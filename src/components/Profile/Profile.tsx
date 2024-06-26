import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { ProfilePageType } from "../../redux/state";

type ProfilePropsType = {
  state: ProfilePageType
  addPost: (text: string) => void
}

const Profile = (props: ProfilePropsType) => {

  return (
    <div>
      <ProfileInfo/>
      <MyPosts postsData={props.state.postsData} addPost={props.addPost}/>
    </div>
  )
}

export default Profile;