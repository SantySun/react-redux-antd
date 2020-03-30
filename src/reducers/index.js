import { USER_LOGIN } from "../constants/action-types";
import users from '../users.json';
const initState = {
    user: null,
    to_do: []
};

function rootReducer(state = initState, action) {
    if (action.type === USER_LOGIN) {
        const username = action.payload.username;
        if (users[username]) {
            if (users[username]["password"] === action.payload.password) {
                return Object.assign({}, state, {
                    user: users[username]["name"],
                    to_do: users[username]["to_do"]
                });
            }
        }
    }
    return state;
}

export default rootReducer;