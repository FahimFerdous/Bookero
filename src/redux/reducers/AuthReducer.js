import { AuthActionType } from "../actions/AuthAction";

const authState = {
    isLoggedIn: false,
    cred: {
        username: " ",
        Password: " "
    }
}

export const authreducer = (state = authState, action) => {

    switch (action.type) {
        case AuthActionType.LOGIN_SUCCESS:

            const newAuthState = {
                isLoggedIn: true,
                cred: action.payload
            }
            return newAuthState;

        case AuthActionType.LOGIN_FAILED:
            return state;


        default:
            break;
    }


}

export default authreducer;