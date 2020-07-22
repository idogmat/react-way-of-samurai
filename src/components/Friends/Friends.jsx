import React from 'react';

import {connect} from "react-redux";
import FriendsBlock from "./FriendsElement";


let mapStateToProps = (state) => {

    return {
        sidebar: state.sidebar.sidebar,
    }
}
const FriendsBlockContainer = connect(mapStateToProps)(FriendsBlock);
export default FriendsBlockContainer;