import * as METHODS from '../methods';
import { baseURL } from '../config';

const URL = `${baseURL}api/v1/enterprise`;

export const list = async () => {
    try {
        const response = await fetch(`${URL}/all?limit=50&page=0`, METHODS.GET());
        const data = await response.json();
        return data;
    } catch (error) {
        return error.message;
    }
}

export const creatingCompany = async (body) => {
    try {
        const response = await fetch(`${URL}/store`, METHODS.POST(body));
        const data = await response.json();
        return data;
    } catch (error) {
        return error.message;
    }
}

export const showCompany = async (id) => {
    try {
        const response = await fetch(`${URL}/show/${id}`, METHODS.GET());
        const data = await response.json();
        return data;
    } catch (error) {
        return error.message;
    }
}

export const isEnterprise = async (id) => {
    try {
        const response = await fetch(`${URL}/has-enterprise/${id}`, METHODS.GET());
        const data = await response.json();
        return data;
    } catch (error) {
        return error.message;
    }
}

export const deleteEnterprise = async (id) => {
    try {
        const response = await fetch(`${URL}/remove/${id}`, METHODS.DELETE());
        const data = await response.json();
        return data;
    } catch (error) {
        return error.message;
    }
}
