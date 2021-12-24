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

export { GET, POST, POST_FORM_DATA, PUT, PUT_FORM_DATA, DELETE };