import axios from "axios";
import constant from '../src/config/constant';
// import { API_URL } from "../../constant/api/apiConstants";
const access_token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InF1YW5kaW5oIiwiZW1haWwiOiJoYWlxdWFuNTM5NkBnbWFpbC5jb20iLCJyb2xlIjoidXNlciIsImFjdGl2ZSI6dHJ1ZSwiYmFsYW5jZSI6MCwicmVmZXJyYWxfY29kZSI6bnVsbCwicGxhbiI6eyJwbGFuX3R5cGUiOiJwcm8iLCJkdWVfZGF0ZSI6MH0sIm5hbWUiOiJxdWFuZGluaCIsInBob25lIjoiMDEyMzQ1Njc4OSIsImJpcnRoZGF5IjoiMDEvMDEvMTk3MCIsInVzZXJfaWQiOiI1ZjJiNmU1NzE5ZWRhNDBmZWY0YjcwMzciLCJleHAiOjE2NTI1Mzk1NTN9.TtzqMXSTr4yTmT0W9tY-iZsVHAoXthw-RaNdvnS-tdI';

const initApi = (setAccessHeader = true, setRefreshToken = false) => {
    if (setAccessHeader) {
        axios.defaults.headers.common['Authorization'] = access_token;
    }
    //axios.defaults.header.common['content/type']
    axios.defaults.baseURL = constant.API_URL;

    return axios;
};

export default initApi;
