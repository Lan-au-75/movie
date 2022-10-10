const initialState = {
    currentUsers: JSON.parse(localStorage.getItem('user')) || null,
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'users/login':
            return {
                currentUsers: action.payload,
            };

        case 'users/signUp':
            return {
                currentUsers: action.payload,
            };

        case 'users/logout':
            return {
                currentUsers: null,
            };

        default:
            return state;
    }
};

export { initialState };

export default rootReducer;
