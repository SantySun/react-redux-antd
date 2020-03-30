import { USER_LOGIN } from "../constants/action-types";
const initState = {
  user: null,
  to_do: []
};

function rootReducer(state = initState, action) {
  if (action.type === USER_LOGIN) {
    return Object.assign({}, state, {
      user: action.payload.username,
      to_do: action.payload["to_do"]
    });
  }
  return state;
}

export default rootReducer;