import { fetchPublicPhotos } from "./action";
import axios from "axios";

const getPublicPhotos = () => {
  return (dispatch) => {
    axios
      .get(`http://127.0.0.1:8000/public_image`)
      .then((response) => dispatch(fetchPublicPhotos(response.data)))
      .catch((error) => console.error(error));
  };
};

export default getPublicPhotos;
