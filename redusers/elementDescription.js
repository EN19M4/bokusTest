const SET_DESCRIPTION = "SET_DESCRIPTION"

const defaultState = { 
    description: {},
    isFetching: true,
}

export default function description(state = defaultState, action) {
    switch (action.type) {
        case SET_DESCRIPTION:
            return {
                ...state,
                description:action.payload
            }
        default:
            return state 
    }
}

export const setDescription = (description) => ({type: SET_DESCRIPTION, payload:description})