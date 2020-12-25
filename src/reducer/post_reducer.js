const initialPortState = {
    currentId: 1,
}

const postReducer = (state = initialPortState, action) => {
    const { type, data } = action;
    if (type === 'CHANGE_POST') {
        const newState = { ...state, currentId: data };
        return newState;
    }
    return state;
}

export default postReducer;

