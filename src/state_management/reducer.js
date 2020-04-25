import { FETCH_PUBLIC_IMAGES } from "./action";

const initialState = {
  tags: [],
  photos: [],
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PUBLIC_IMAGES:
      return {
        ...state,
        photos: action.photos.items,
      };
    default:
      return state;
  }
};
