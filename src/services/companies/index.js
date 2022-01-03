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

export const listCompanies = async () => {
    try {
        const response = await fetch(`${URL}/all`, METHODS.GET());
        const data = await response.json();
        return data;
    } catch (error) {
        return error.message;
    }
}

export const newCompany = async (token, body) => {
    try {
        const response = await fetch(`${URL}/store`, METHODS.POST_TOKEN(token, body));
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

export const listCompaniesAll = async (state) => {
    try {
        const response = await fetch(`${URL}/search`, METHODS.POST(state));
        const data = await response.json();
        return data;
    } catch (error) {
        return error.message;
    }
}

export const acceptCompany = async (id, newData, token) => {
    try {
        const response = await fetch(`${URL}/update-state/${id}`, METHODS.PUT_TOKEN(newData, token));
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
