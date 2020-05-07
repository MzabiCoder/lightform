import { GET_NOTES, DEL_NOTE, UPDATE_NOTE,SEARCH_NOTES, SET_CURRENT, CLEAR_CURRENT,NOTES_ERROR, SET_LOADING, ADD_NOTE } from '../actions/types'
const Istate = {
    notes: null,
    current: null,
    loading: false,
    error:null
}

export default function (state=Istate,action) {
    const { type, payload } = action
    switch (type) {
        case SET_LOADING:
            return {
                ...state,
                loading:true
            }
        case GET_NOTES:
            return {
                ...state,
                notes: payload,
                loading:false
            }
        case NOTES_ERROR:
            console.error(payload)
            return {
                ...state,
                error:payload
            }
        case ADD_NOTE:
            return {
                ...state,
                notes: [...state.notes, payload],
                loading:false
            }
        case DEL_NOTE:
            return {
                ...state,
                notes: state.notes.filter(note => note.id !== payload),
                loading:false
            }
        case SET_CURRENT:
            return {
                ...state,
                current:payload
            }
            case CLEAR_CURRENT:
                return {
                    ...state,
                    current:null
            }
        case UPDATE_NOTE:
            return {
                ...state,
                notes: state.notes.map(note => note.id === payload.id ? payload : note),
                loading:false
            }
        case SEARCH_NOTES:
            return {
                ...state,
                notes: payload,
                loading:false
            }
        default:
            return state
    }
}