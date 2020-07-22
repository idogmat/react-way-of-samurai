import React from 'react';
import c from './ProfileInfo.module.css'
import Preloader from "../../preloader/preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
if(!props.profile){
    return <Preloader/>
}
  return (
    <div>
      <div>
        <img src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350' alt='person-img'/>
      </div>
      <div className={c.descriptionBlock}>
          <div>{props.profile.aboutMe}</div>
          <img src={props.profile.photos.large}/>
          <div>{props.profile.fullName}</div>
          <div>{props.profile.lookingForAJobDescription}</div>
          <div>lookingForAJob: {props.profile.lookingForAJob ? 'yes' : 'no'}</div>
        ava + description
          <ProfileStatus status={'Hello'}/>
      </div>
    </div>
  )
}

export default ProfileInfo;