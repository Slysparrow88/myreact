import { combineReducers } from "redux";
import favorite from "../components/pages/posts/Favorites/reducer";
import posts from "../components/pages/posts/Post/reducer";

export default combineReducers({
  favorite,
  posts
});
