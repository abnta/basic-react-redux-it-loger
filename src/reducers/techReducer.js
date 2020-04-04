import { GET_TECHS, ADD_TECH, DELETE_TECH, TECH_ERROR } from './../actions/types';

const initialState = {
    techs: null,
    loading: true,
    error: null
}

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_TECHS:
            return {
                ...state,
                techs: action.payload,
                loading:false
            }
        case ADD_TECH:
            return {
                ...state,
                techs: [...state.techs, action.payload]
            }
        case DELETE_TECH:
            return {
                ...state,
                techs: state.techs.filter((tech) => tech.id !== action.payload)
            }
        case TECH_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return state
    }
}