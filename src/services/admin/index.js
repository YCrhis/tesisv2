import * as METHODS from '../methods';
import { baseURL } from '../config';

const URL = `${baseURL}api/v1`;

export const allUser = async () => {
    try {
        const response = await fetch(`${URL}/user/all`, METHODS.GET());
        const data = await response.json();
        return data;
    } catch (error) {
        return error.message;
    }
}

export const filterUser = async (filter = {}) => {
    try {
        const response = await fetch(`${URL}/user/search`, METHODS.POST(filter));
        const data = await response.json();
        return data;
    } catch (error) {
        return error.message;
    }
}