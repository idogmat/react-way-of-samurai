import React from 'react';
import {addNewMsgText, updateNewMsgTextActionCreator} from "../../redax/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps=(state)=>{
    return{
        dialogs: state.dialogs.dialogs,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps=(dispatch)=> {
    return{
        onMsgChange:(text)=>{
            dispatch(updateNewMsgTextActionCreator(text));
        },
        addMessage:()=>{
            dispatch(addNewMsgText());
        }
    }
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
)(Dialogs);