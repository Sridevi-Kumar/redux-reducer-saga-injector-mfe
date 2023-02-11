export const GET_REACT = "GET_REACT"
export const GET_REACT_SUCCESS = "GET_REACT_SUCCESS"
export const GET_REACT_ERROR = "GET_REACT_ERROR"


export const getReact = () =>{
    return{
        type: GET_REACT
    }
}

export const getReactSuccess = (data) => {
    console.log("getReact Action called", data)
    return{
        type: GET_REACT_SUCCESS,
        data: data
    }
}

export const getReactError = (message) => {
    console.log("getVue Action called", data)
    return{
        type: GET_REACT_ERROR,
        data: message
    }
}

