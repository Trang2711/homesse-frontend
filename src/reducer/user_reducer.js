const initialUserState = {
    id: 123,
    name: "Trang Trịnh",
}

const userReducer = (state = initialUserState, action) => {
    const { type, payload } = action;
    if (type === 'SET_USER') {
        const newState = { ...state, name: payload };
        return newState;
    }
    return state;
}

export default userReducer;

