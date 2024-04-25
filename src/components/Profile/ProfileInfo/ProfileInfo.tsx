import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src='https://s1.1zoom.me/big0/821/Austria_Mountains_Lake_Scenery_Panorama_Tyrol_Alps_600571_1280x435.jpg' />
      </div>
      <div className={s.descriptionBlock}>
        ava + description
      </div>
      </div>
  )
}

export default ProfileInfo;