import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const FOLLOWING_IS_PROGRESS = 'FOLLOWING_IS_PROGRESS';
let initialState = {
    users: [],
    pageSize: 7,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};
const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUserCount: action.count
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case FOLLOWING_IS_PROGRESS:
            return {
                ...state,
                followingInProgress: action.Following
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id =>id !== action.userId)
            }
        default:
            return state;

    }
}
export const followSuccses = (userId) => ({type: FOLLOW, userId})
export const unfollowSuccses = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingInProgress = (Following,userId) => ({type: FOLLOWING_IS_PROGRESS, Following, userId})
export const getUsers=(currentPage,pageSize)=> {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(currentPage,pageSize).then(data => {
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
            dispatch(toggleIsFetching(false));
        });
    }
}
export const follow=(id)=> {
    return (dispatch) => {
        dispatch(toggleFollowingInProgress(true,id))
        usersAPI.FollowUnfollow('Follow', id)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followSuccses(id));
                }
                dispatch(toggleFollowingInProgress(false,id));
            });
    }
}
export const unfollow=(id)=> {
    return (dispatch) => {
        dispatch(toggleFollowingInProgress(true,id))
        usersAPI.FollowUnfollow('Unfollow', id)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollowSuccses(id));
                }
                dispatch(toggleFollowingInProgress(false,id));
            });
    }
}
export default usersReducer;