const initialUserState = null;

const userReducer = (state = initialUserState, action) => {
    const { type, payload } = action;
    if(type === "INIT_USER") {
        const newState = { 
            firstName: payload.firstName,
            lastName: payload.lastName,
            id: payload.id,
            role: payload.role
        };
        return newState;
    }
    if (type === 'SET_USER') {
        const newState = { 
            ...state, 
            firstName: payload.firstName,
            lastName: payload.lastName,
            id: payload.id,
            role: payload.role
        };
        return newState;
    }
    return state;
}

export default userReducer;

