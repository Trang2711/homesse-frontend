const initialSearchData = 10000;

const postPriceReducer = (state = initialSearchData, action) => {
    const { type, data } = action;
    if (type === 'SET_PRICE') {
        const newState = data;
        return newState;
    }
    return state;
}

export default postPriceReducer;

