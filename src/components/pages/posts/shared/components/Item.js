import React from "react";

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

  const { addFavorite, removeFavorite, changePostStatus, post } = props;

  const changeHandler = (event) => {

    const check = event.target.checked;

    if(check){
      addFavorite(post);
      changePostStatus(id);
    }
    else{
      removeFavorite(id);
      changePostStatus(id);
    }
  
  };
  const checkbox = addFavorite ? <input defaultChecked ={checkFavorite} onClick={changeHandler} type="checkbox" /> : "";

  return (
    <div className="post">
      {checkbox}
      <i>{data_update}</i>
      <span>{likes}</span>
      <h1>{title}</h1>
      <p>{description}</p>
      <b>{user.name}</b>
    </div>
  );
}

export default Item;
