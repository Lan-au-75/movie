const login = (payload) => ({
    type: 'users/login',
    payload,
});

const subscribed = (payload) => ({
    type: 'users/signUp',
    payload,
});

const logout = (payload) => ({
    type: 'users/logout',
    payload,
});

export { login, subscribed, logout };
