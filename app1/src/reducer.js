import { GET_REACT, GET_REACT_ERROR, GET_REACT_SUCCESS, GetReactAction} from "./action"

export const initialState = {
    loading: false,
    error: null,
    data: []
}

export const techReducer = (state = initialState, action) =>{  
    console.log("Reducer")  
    switch(action.type){
        case GET_REACT:            
            return {...state, loading: true}
        case GET_REACT_ERROR:
            return {...state, loading: false, data: action.payload}        
        case GET_REACT_SUCCESS:
            return {...state, loading: false, data: action.payload}  
        default:
            return []
    }    
}

