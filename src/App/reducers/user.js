import {
  USER_LOGIN,
  USER_LOGOUT,
  SET_USER_INFORMATION,
} from "../actions/constants";

// Initialization
const defaultUser = {
  token: localStorage.getItem("EnCasaProfessional"),
  information: {},
};

export default function user(state = defaultUser, action = {}) {
  switch (action.type) {
    case USER_LOGOUT:
      return {};
    case USER_LOGIN:
      return action.user;
    case SET_USER_INFORMATION:
      return { ...state, information: action.information };
    default:
      return state;
  }
}
