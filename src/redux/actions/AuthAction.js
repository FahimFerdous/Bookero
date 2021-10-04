import axios from "axios"

const AuthActionType = {
    LOGIN_SUCCESS: "LOGIN_SUCCESS",
    LOGIN_FAILED: "LOGIN_FAILED"
}

const LoginAuthAction = (userCred, history) => {
    return async (dispatch) => {
        try {
            const info = {
                username: userCred.email,
                password: userCred.pass
            }
            const res = await axios.post("http://localhost:8080/api/users/login", info);

            const { data } = res
            dispatch({
                type: AuthActionType.LOGIN_SUCCESS, payload: data
            });
            history.push("/")
        } catch (error) {
            dispatch({ type: AuthActionType.LOGIN_FAILED, payload: {} });
        }



    }
}

export { LoginAuthAction, AuthActionType };