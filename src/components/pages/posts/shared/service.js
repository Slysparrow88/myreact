import { BASE_URL, CLIENT_ID } from "../../../../system/settings";

export const listPosts = () => {

  return fetch(BASE_URL).then(response => {

    return response.json();

  });
};
export const updataPosts = data => {

  return fetch(`${BASE_URL}/update/${data.id}`, {
    method: "POST",
    body: JSON.stringify(data),
  }).then(response => {
    return response.json();
  });
};