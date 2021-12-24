import * as METHODS from '../methods';
import { baseURL } from '../config';

const URL = `${baseURL}api/v1/user`;

export const loginUser = async (body) => {
    try {
        const response = await fetch(`${URL}/sign-in`, METHODS.POST(body));
        const data = await response.json();
        return data;
    } catch (e) {
        return e.message
    }
}

export const registerUser = async (body) => {
    try {
        const response = await fetch(`${URL}/sign-up`, METHODS.POST(body));
        const data = await response.json();
        return data;
    } catch (e) {
        return e.message
    }
}