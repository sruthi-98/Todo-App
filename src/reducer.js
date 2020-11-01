export const initialState = {
    user: null
}

export const reducer = (state, action) => {
    switch(action.type) {
        case 'LOG_IN':
            return {
                ...state,
                user: action.payload.user
            };

        default:
            return state;
    }
}