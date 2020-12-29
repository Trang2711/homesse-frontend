export const setUser = (newInfo) => {
    return {
        type: 'SET_USER',
        payload: newInfo
    }
}

export const initUser = (newUser) => {
    return {
        type: 'INIT_USER',
        payload: newUser,
    }
}