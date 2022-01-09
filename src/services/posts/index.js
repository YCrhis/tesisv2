import * as METHODS from '../methods';
import { baseURL } from '../config';

const URL = `${baseURL}api/v1`;

export const sendPost = async (body) => {
    try {
        const response = await fetch(`${URL}/post/store`, METHODS.POST(body));
        const data = await response.json();
        return data;
    } catch (e) {
        return e.message
    }
}

export const myList = async (id) => {
    try {
        const response = await fetch(`${URL}/post/by-user/${id}?limit=10&page=0`, METHODS.GET());
        const data = await response.json();
        return data;
    } catch (e) {
        return e.message
    }
}

export const removePost = async (id) => {
    try {
        const response = await fetch(`${URL}/post/remove/${id}`, METHODS.DELETE());
        const data = await response.json();
        return data;
    } catch (e) {
        return e.message
    }
}

export const searchPost = async (body) => {
    try {
        const response = await fetch(`${URL}/post/search`, METHODS.POST(body));
        const data = await response.json();
        return data;
    } catch (e) {
        return e.message
    }
}


export const sendComment = async (body) => {
    try {
        const response = await fetch(`${URL}/comment/store`, METHODS.POST(body));
        const data = await response.json();
        return data;
    } catch (e) {
        return e.message
    }
}


export const loadComments = async (body) => {
    try {
        const response = await fetch(`${URL}/comment/by-user-post`, METHODS.POST(body));
        const data = await response.json();
        return data;
    } catch (e) {
        return e.message
    }
}
