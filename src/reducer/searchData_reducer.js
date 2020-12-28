const initialSearchData = {
    type: "",
    price_min: "",
    price_max: "",
    area_min: "",
    area_max: ""
}

const postReducer = (state = initialSearchData, action) => {
    const { type, data } = action;
    if (type === 'SET_DATA') {
        const newState = data;
        return newState;
    }
    return state;
}

export default postReducer;

