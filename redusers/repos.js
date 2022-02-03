const SET_USER = "SET_USER"

const defaultState = { 
    user: "",
    isFetching: true,
}

export default function repos(state = defaultState, action) {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user:action.payload
            }
        default:
            return state 
    }
}

export const setUser = (user) => ({type: SET_USER, payload:user})