import * as METHODS from '../methods';
import { baseURL } from '../config';

const URL = `${baseURL}api/v1/enterprise`;


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
        const response = await fetch(`${URL}/by-user/${id}`, METHODS.GET());
        const data = await response.json();
        return data;
    } catch (error) {
        return error.message;
    }
}

export const listCompaniesAll = async (state) => {
    try {
        const response = await fetch(`${URL}/search?limit=1000&page=0`, METHODS.POST(state));
        const data = await response.json();
        return data;
    } catch (error) {
        return error.message;
    }
}

export const listCompaniesPagination = async (state, page) => {
    try {
        const response = await fetch(`${URL}/search?limit=10000&page=${page}`, METHODS.POST(state));
        const data = await response.json();
        return data;
    } catch (error) {
        return error.message;
    }
}

export const acceptCompany = async (id, newData, token) => {
    try {
        const response = await fetch(`${URL}/update-state/${id}`, METHODS.PUT_TOKEN_JSON(newData, token));
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

export const updateEnterprise = async (id, newData, token) => {
    try {
        const response = await fetch(`${URL}/update/${id}`, METHODS.PUT_TOKEN(newData, token));
        const data = await response.json();
        return data;
    } catch (error) {
        return error.message;
    }
}

export const getInterest = async (id) => {
    try {
        const response = await fetch(`${URL}/get-interesteds/${id}`, METHODS.GET());
        const data = await response.json();
        return data;
    }
    catch (error) {
        return error;
    }
}



export const getEnterprisesFiltered = async (filter, page = 0,limit = 9) => {
    try {
        const response = await fetch(`${URL}/search?limit=${limit}&page=${page}`, METHODS.POST(filter));
        const data = await response.json();
        return data;
    } catch (error) {
        return error.message;
    }
}


export const updateCompanyState = async (id, object, token) => {
    try {
        const response = await fetch(`${URL}/update-state/${id}`, METHODS.PUT_TOKEN_JSON(object, token));
        const data = await response.json();
        return data;
    } catch (error) {
        return error.message;
    }
}