import React from 'react';
import d from '../Dialogs.module.css';

const Messege = (props) => {
    return (
        <div>
            <div className={d.messege}>{props.msg}</div>
            <span>Like {props.likes}</span>
        </div>

    )
}

export default Messege;