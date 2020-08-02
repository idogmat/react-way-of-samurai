import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    profilePage: {
        postsData: [
            {id: '1', age: '28', msg: 'Hi gay', name: 'Jack', likes: '123'},
            {id: '2', age: '32', msg: 'Hi gay', name: 'Dimych', likes: '2'},
            {id: '3', age: '44', msg: 'How is ur it-kamasutra', name: 'Choppy', likes: '23'},
            {id: '4', age: '22', msg: 'How is ur it-kamasutra', name: 'Goggy', likes: '12'},
            {id: '5', age: '30', msg: 'hi yo', name: 'Rufus', likes: '23'},
            {id: '6', age: '34', msg: 'hi yo', name: 'Semen', likes: '42'},
            {id: '7', age: '30', msg: 'hi yo', name: 'Sasha', likes: '2'}
        ],
        newPostText: 'some text',
        profile: null,
        status:""
    }
};
const profileReducer = (state =initialState, action) => {
    let stateCopy ={...state};
    stateCopy.profilePage = {...state.profilePage}
    stateCopy.profilePage.postsData = [...state.profilePage.postsData]

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 45,
                age: 40,
                msg: stateCopy.profilePage.newPostText,
                name: 'Roshar',
                likes: 0
            };
            stateCopy.profilePage.postsData.push(newPost);
            stateCopy.profilePage.newPostText = '';
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            stateCopy.profilePage.newPostText = action.newText;
            return stateCopy;
        }
        case SET_USER_PROFILE: {
            // stateCopy.profilePage.profile = action.profile;
            // return stateCopy;
            return {...state,profile:action.profile}
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;

    }
}

export const addPostActionCreator=()=>{
    return ({type: ADD_POST})
}
export const setUserProfile=(profile)=>{
    return ({type: SET_USER_PROFILE, profile})
}

export const updateNewPostTextActionCreator=(newText)=>{
    return ({type: UPDATE_NEW_POST_TEXT, newText})
}
export const getUserProfile=(userId)=>(dispatch)=>{
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data))
        });
}
export const setStatus=(status)=>{
    return ({type: SET_STATUS, status})
}
export const getStatus=(userId)=>(dispatch)=>{
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data))
        });
}
export const updateStatus=(status)=>(dispatch)=>{
    profileAPI.updateStatus(status)
        .then(response => {
            if(response.data.resultCode === 0){
                dispatch(setStatus(response.data))
            }
        });
}
export default profileReducer;
