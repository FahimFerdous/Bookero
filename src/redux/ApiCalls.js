import { login, logout } from "./UserSlice";
import axios from "axios"

export const loginUser = async (userCred, dispatch, history) => {
    try {
        const info = {
            username: userCred.email,
            password: userCred.pass
        }
        const res = await axios.post("http://localhost:8080/api/users/login", info);
        const data = res.data

        dispatch(login(data));

        history.push("/bookPage")
    } catch (err) {
        console.log(err)
    }
}