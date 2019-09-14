import React from "react";
import {link} from 'react-router-dom';

function Item(props) {
  const {
    id,
    title,
    description,
    likes,
    user,
    data_create,
    checkFavorite,
    data_update
  } = props.post;

  const { addFavorite, removeFavorite, changePostStatus, post, likePost } = props;

  const changeHandler = (event) => {

    const check = event.target.checked;

    if (check) {
      addFavorite(post);
      changePostStatus(id);
    }
    else {
      removeFavorite(id);
      changePostStatus(id);
    }

  };

  const likeHandler = () => {
    likePost(props.post);
  }

  const checkbox = addFavorite ? <input defaultChecked={checkFavorite} onClick={changeHandler} type="checkbox" /> : "";
  const like = likePost ?  <span onDoubleClick={likeHandler}>{likes}</span> : "";

  return (
    <div className="post">
      {like}
      {checkbox}
      <i>{data_update}</i>
      <h1>{title}</h1>
      <p>{description}</p>
      <b>{user.name}</b>
      {/* <br> */}
      {/* <Link to={`/post/${id}`}>Details ...</Link> */}
    </div>
  );
}

export default Item;
