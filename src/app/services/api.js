import axios from "axios";

const api_advice = axios.create({
    baseURL:"https://api.adviceslip.com/advice",
});

export default api_advice;
