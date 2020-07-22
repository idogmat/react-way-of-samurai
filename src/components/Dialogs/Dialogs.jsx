import React from 'react';
import d from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Messege/DialogsMessage";
import {Redirect} from "react-router-dom";


const Dialogs = (props) => {

    let newMessageElement = React.createRef();
    let addMessage = () => {
        props.addMessage();
    };
    let onMsgChange = (evt) => {
        let action = evt.target.value
        props.onMsgChange(action);
    }
    let dialogsElement = props.dialogs.dialogsPerson
        .map(d => <DialogsItem name={d.name} id={d.id} key={d.id}/>);

    let msgElement = props.dialogs.msgData
        .map(m => <Message msg={m.msg} likes={m.likes} key={m.id}/>);

    if (!props.isAuth) {
        return <Redirect to={"/Login"}/>
    } else {
        return (
            <div>
                <div className={d.content}>
                    <div className={d.dialogs}>
                        {dialogsElement}
                    </div>
                    <div className={d.messeges}>
                        {msgElement}
                    </div>
                </div>
                <div>
                    <div>
                    <textarea ref={newMessageElement}
                              onChange={onMsgChange}
                              value={props.dialogs.newMassage}>

                    </textarea>
                    </div>
                    <div>
                        <button onClick={addMessage}>Add post</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Dialogs;