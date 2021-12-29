const GET = () => {
    return {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    };
};

const POST = body => {
    return {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'Application/json',
        },
        body: JSON.stringify(body),
    };
};

const POST_FORM_DATA = body => {
    return {
        method: 'POST',
        headers: {
            Accept: 'application/json',
        },
        body: body,
    };
};

const PUT = body => {
    return {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify(body),
    };
};

const PUT_FORM_DATA = body => {
    return {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
        },
        body: body,
    };
};


const DELETE = () => {
    return {
        method: 'DELETE'
    };
};


/* for token */
const PUT_TOKEN = (body, token) => {
    return {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'Application/json',
            'Authorization': 'Bearer' + token,
        },
        body: body
    };
};

const GET_TOKEN = body => {
    return {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'Application/json',
            'Authorization': 'Bearer' + body,
        },
    };
};


export { GET, POST, POST_FORM_DATA, PUT, PUT_FORM_DATA, DELETE, PUT_TOKEN, GET_TOKEN };