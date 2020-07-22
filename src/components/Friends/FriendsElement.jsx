import React from 'react';
import fr from './Friend.module.css';

const FriendsBlock = (props) => {
    let frendItem = props.sidebar.map(f => <FrItem img={f.img} name={f.name} key={f.id}/>)

    return <div className={fr.block}>
        <h3>Friends</h3>
        <div>
            {frendItem}
        </div>
    </div>
}
const FrItem = (props) => {
    return (
        <div className={fr.frItem}>
            <img className={fr.img} src={props.img}></img>
            <p className={fr.text}>{props.name}</p>
        </div>)
}


export default FriendsBlock;