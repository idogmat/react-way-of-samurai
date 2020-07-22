import React from "react";
import MyPosts from "./MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redax/profile-reducer";
import {connect} from "react-redux";


let mapStateToProps=(state)=>{

    return{
        profilePage:state.profilePage.profilePage,
    }
}
let mapDispatchToProps=(dispatch)=> {
    return{
        updateNewPostText:(text)=>{
            dispatch(updateNewPostTextActionCreator(text));
        },
        addPost:()=>{
            dispatch(addPostActionCreator());
        }
    }
}
const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)

export default MyPostsContainer;