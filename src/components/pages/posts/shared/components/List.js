import React from "react";
import Item from "./Item";

function List({ posts, addFavorite, removeFavorite, changePostStatus }) {
  return posts.map(post =>
    <Item
      key={post.id}
      post={post}
      addFavorite={addFavorite}
      removeFavorite={removeFavorite}
      changePostStatus={changePostStatus}
    />
  );
}

export default List;
