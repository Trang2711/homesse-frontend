const initialUserState = {
    id: 123,
    name: "Trang Trịnh",
}

const userReducer = (state = initialUserState, action) => {
    const { type, payload } = action;
    if (type === 'SET_USER') {
        const newState = { ...state, name: payload.name, id: payload.id };
        return newState;
    }
    return state;
}

export default userReducer;

