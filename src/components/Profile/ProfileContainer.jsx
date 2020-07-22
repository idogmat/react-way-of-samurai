import React from 'react';
// import c from './Profile.module.css';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redax/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";
import {usersAPI} from "../../api/api";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId);
    }

    render() {
        return (
            <div className='app-wrapper-content'>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}
let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
});

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

export default compose(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    withAuthRedirect
)
(ProfileContainer);