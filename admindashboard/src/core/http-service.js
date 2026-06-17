const BASE_URL = 'https://react-mini-projects-api.classbon.com';
import axios from "axios";
export const httpService = axios.create({
    baseURL: BASE_URL,
})