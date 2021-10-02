import { AuthActionType } from "../actions/AuthAction";

const authState = {
    isLoggedIn: false,
    cred: {
        username: " ",
        Password: " "
    }
}

const authreducer = (state = authState, action) => {

    switch (action.type) {
        case AuthActionType.LOGIN_SUCCESS:
            return {
                isLoggedIn: true,
                cred: action.payload
            }
        case AuthActionType.LOGIN_FAILED:
            return state;
            break;

        default:
            break;
    }


}

export default authreducer;