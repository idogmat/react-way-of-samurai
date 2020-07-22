import React from 'react';
import c from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {

    let newPostElement =React.createRef();
    let onAddPost = ()=>{
        props.addPost();
    };
    let onPostChange =()=>{
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };
  let postElement = props.profilePage.postsData
      .map(p=><Post msg={p.msg} name={p.name} age={p.age} likes={p.likes} key={p.id}/>);
  return (
    <div className={c.postsBlock}>
      My posts
      <div>
        <div>
        <textarea ref={newPostElement} onChange={onPostChange} value={props.profilePage.newPostText}></textarea>
        </div>
        <div>
        <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div className={c.content}>
        {postElement}
      </div>
    </div>
  )
}

export default MyPosts;