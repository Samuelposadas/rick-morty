import { ACTIONS } from "../actions/fetch"

export const initialState = {
    loading: true,
    error: false,
    data: {}
}

export const fetchReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.SET_DATA:
            return {
                ...initialState,
                loading: false,
                data: {
                    info: action.payload.info,
                    results: action.payload.results
                }
            }

            case ACTIONS.SET_ERROR : 
            return {
                ...initialState,
                error : true ,
                loading : false
            }
        default:
            return state
    }

}