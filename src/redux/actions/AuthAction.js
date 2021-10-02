import axios from "axios"

const AuthActionType = {
    LOGIN_SUCCESS: "LOGIN_SUCCESS",
    LOGIN_FAILED: "LOGIN_FAILED"
}

const LoginAuthAction = (userCred, history) => {
    return async (dispatch) => {
        try {
            const data = {
                username: userCred.email,
                password: userCred.pass
            }
            const res = await axios.post("http://localhost:8080/api/users/login", data);

            const { resdata } = res
            dispatch({
                type: AuthActionType.LOGIN_SUCCESS, payload: resdata
            });
            history.push("/")
        } catch (error) {
            dispatch({ type: AuthActionType.LOGIN_FAILED, payload: {} });
        }



    }
}

export { LoginAuthAction, AuthActionType };