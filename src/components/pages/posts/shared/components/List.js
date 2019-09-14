import React from "react";
import Item from "./Item";

function List({ posts, addFavorite, removeFavorite, changePostStatus,  likePost}) {
  return posts.map(post =>
    <Item
      key={post.id}
      post={post}
      likePost={likePost}
      addFavorite={addFavorite}
      removeFavorite={removeFavorite}
      changePostStatus={changePostStatus}
    />
  );
}

export default List;
