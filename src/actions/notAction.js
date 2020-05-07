import axios from 'axios'
import { GET_NOTES, DEL_NOTE, UPDATE_NOTE, SEARCH_NOTES,SET_CURRENT, CLEAR_CURRENT,NOTES_ERROR, SET_LOADING, ADD_NOTE } from './types'

// 
export const setLoading = () => {
    return {
     type:SET_LOADING
    }
}

// get notes
export const getNotes = ()=>async dispatch => {
      
    try {
        setLoading()
        const res = await axios.get(`http://note.dev.cloud.lightform.com/notes`)
        dispatch({
            type: GET_NOTES,
            payload:res.data._embedded.notes
        })
    } catch (error) {
        dispatch({
            type: NOTES_ERROR,
            payload:error.response.data
        })
    }
}
// add not
export const addNotes = (note)=>async dispatch => {

    try {
        setLoading()
        const config = {
            headers : {
                'Content-Type':'application/json'
            }
        } 
        const res = await axios.post(`http://note.dev.cloud.lightform.com/notes`,note,config)
        dispatch({
            type: ADD_NOTE,
            payload:res.data
        })
    } catch (error) {
        dispatch({
            type: NOTES_ERROR,
            payload:error.response.data
        })
    }
}

// delete notes

export const delNotes = id => async dispatch => {
    try {
        setLoading()
        await axios.delete(`http://note.dev.cloud.lightform.com/notes/${id}`)
        dispatch({
            type: DEL_NOTE,
            payload:id
        })

    } catch (error) {
        dispatch({
            type: NOTES_ERROR,
            payload:error.response.data
        })
    }
}
// set current 

export const setCurrent = note => {
    return {
        type: SET_CURRENT,
        payload:note
    }
}

export const clearCurrent = () => {
    return {
        type: CLEAR_CURRENT,
        
    }
}

// update note

export const updateNote = note => dispatch => {
    try {
        setLoading()    
     fetch(`http://note.dev.cloud.lightform.com/notes/${note.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
     body: JSON.stringify(note)
      }).then(res => res.json())
      .then(res => dispatch({type:UPDATE_NOTE, payload: res.data}))
      
  
    } catch (error) {
        dispatch({
            type: NOTES_ERROR,
            payload:error.response.data
        }) 
    }
}

export const searchNotes = (text)=>async dispatch => {
      
    try {
        setLoading()
        const res = await axios.get(`http://note.dev.cloud.lightform.com/notes?q=${text}`)
         
        dispatch({
            type: SEARCH_NOTES,
            payload:res.data._embedded.notes
        })
    } catch (error) {
        dispatch({
            type: NOTES_ERROR,
            payload:error.response.data
        })
    }
}
