import React from 'react';
// import c from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {
  return(
    <div className='app-wrapper-content'>
    <ProfileInfo profile={props.profile}
                 status={props.status}
                 updateStatus={props.updateStatus}/>
    <MyPostsContainer/>
  </div>
  )
}

export default Profile;
