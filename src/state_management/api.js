import { fetchPublicPhotos } from "./action";
import axios from "axios";

export const getPublicPhotos = () => {
  return (dispatch) => {
    axios
      .get(`https://flickr-api-gateway.herokuapp.com/public_image`)
      .then((response) => dispatch(fetchPublicPhotos(response.data)))
      .catch((error) => console.error(error));
  };
};

export const getPublicPhotosByTags = (tags) => {
  return (dispatch) => {
    axios
      .get(`https://flickr-api-gateway.herokuapp.com/public_image/${tags}`)
      .then((response) => dispatch(fetchPublicPhotos(response.data)))
      .catch((error) => console.error(error));
  };
};
