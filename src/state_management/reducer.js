import axios from "axios";

const initialState = {
  tags: [],
  photos: [],
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PUBLIC_PHOTOS":
      axios
        .get(`http://127.0.0.1:8000/public_image`)
        .then((response) => {
          return {
            ...state,
            photos: response.data.items,
          };
        })
        .catch((error) => console.log(error));
    case "GET_PUBLIC_PHOTOS_BY_TAGS":
      axios
        .get(`http://127.0.0.1:8000/public_image/${state.tags}`)
        .then((response) => {
          return {
            ...state,
            photos: response.data.items,
          };
        })
        .catch((error) => console.log(error));

    default:
      return state;
  }
};
