import { SET_USER_PROFILE } from "../actions";

const initialState = {
  content: [],
};

const ProfileUserPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_PROFILE:
      return {
        ...state,
        content: action.payload,
      };

    default:
      return state;
  }
};
export default ProfileUserPageReducer;
