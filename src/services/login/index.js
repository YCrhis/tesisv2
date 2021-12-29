import * as METHODS from '../methods';
import { baseURL } from '../config';

const URL = `${baseURL}api/v1/user`;

export const loginUserNormal = async (body) => {
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

/* this is for update with token */
export const updateUser = async (body, token, id) => {
    try {
        const response = await fetch(`${URL}/update/${id}`, METHODS.PUT_TOKEN(body, token));
        const data = await response.json();
        return data;
    } catch (e) {
        return e.message
    }
}

export const hasEnterprise = async (id, token) => {
    try {
        const response = await fetch(`${URL}/has-enterprise/${id}`, METHODS.GET_TOKEN(token));
        const data = await response.json();
        return data;
    } catch (e) {
        return e.message
    }
}



