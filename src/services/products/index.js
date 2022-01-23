import * as METHODS from '../methods';
import { baseURL } from '../config';

const URL = `${baseURL}api/v1/product`;

export const listProducts = async (page, name) => {
    try {
        const response = await fetch(`${URL}/search?limit=9&page=${page}`, METHODS.POST(name));
        const data = await response.json();
        return data;
    } catch (error) {
        return error;
    }
}


export const creatingProduct = async (token, body) => {
    try {
        const response = await fetch(`${URL}/store`, METHODS.POST_TOKEN(token, body));
        const data = await response.json();
        return data;
    }
    catch (error) {
        return error;
    }
}


export const enterpriseProducts = async (id) => {
    try {
        const response = await fetch(`${URL}/by-enterprise/${id}?limit=50&page=0`, METHODS.GET(id));
        const data = await response.json();
        return data;
    }
    catch (error) {
        return error;
    }
}

export const filterProducts = async (body) => {
    try {
        const response = await fetch(`${URL}/search?limit=90&page=0`, METHODS.POST(body));
        const data = await response.json();
        return data;
    }
    catch (error) {
        return error;
    }
}

export const interestedProduct = async (body) => {
    try {
        const response = await fetch(`${URL}/interested`, METHODS.POST(body));
        const data = await response.json();
        return data;
    }
    catch (error) {
        return error;
    }
}

export const deleteInterestedProduct = async (id) => {
    try {
        const response = await fetch(`${URL}/delete-interested/${id}`, METHODS.DELETE());
        const data = await response.json();
        return data;
    }
    catch (error) {
        return error;
    }
}

export const getInterestedProduct = async (body) => {
    try {
        const response = await fetch(`${URL}/get-interested-prod`, METHODS.POST(body));
        const data = await response.json();
        return data;
    }
    catch (error) {
        return error;
    }
}



