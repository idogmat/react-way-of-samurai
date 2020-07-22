import React from 'react';
import c from './Post.module.css'

const Post = (props) => {
  return (
    <div className={c.item}>
      <div>
        <img src='https://funnyducks.ru/upload/iblock/dac/dacd8a2011591eff1a9ad0bb7eff118c.jpg' alt='pers'></img>
      </div>
      <div>
        <div><p>name:{props.name}</p></div>
        <div><p>age:{props.age}</p></div>
        <div><p>msg:{props.msg}</p></div>
      </div>
      <div>
        <span>Like</span>
        <span>{props.likes}</span>
      </div>
    </div>
  )
}

export default Post;