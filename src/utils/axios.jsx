import axios from "axios";
import { BaseUrl } from "./BaseUrl";
const instance = axios.create({
    baseURL: `${BaseUrl}api/`
})
import { useNavigate } from "react-router-dom";

instance.interceptors.request.use(
    config => {
        const token = localStorage.getItem("token")
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
)
instance.interceptors.response.use(
    response => {
        if (response.status == 401) {
            console.log(response)
            const navi = useNavigate()
            navi("/login")
        }
        return response.data;
    },
    error => {
        return Promise.reject(error);
    }
);
export default instance;