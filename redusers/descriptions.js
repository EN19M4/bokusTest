export const SET_DESCRIPTIONS = "SET_DESCRIPTIONS"
export const FETCH_DESCRIPTIONS = "FETCH_DESCRIPTIONS"

const defaultState = { 
    descriptions: [],
    isFetching: true,
}

export default function descriptions(state = defaultState, action) {
    switch (action.type) {
        case SET_DESCRIPTIONS:
            return {
                ...state,
                descriptions:action.payload
            }
        default:
            return state 
    }
}

export const setDescriptions = payload => ({type: SET_DESCRIPTIONS, payload})
export const fetchDescriptions = () => ({type: FETCH_DESCRIPTIONS})