import {CHANGE_SEARCH_FIELD,
    REQUEST_IMAGES_PENDING,
    REQUEST_IMAGES_SUCCESS,
    REQUEST_IMAGES_FAILED
} from "./constans";

export const setSearchField = (text) => ({

    type:CHANGE_SEARCH_FIELD,
    payload:text
})


export const requestImages = () => (dispatch) => {
    console.log('lslsls');
    dispatch({type:REQUEST_IMAGES_PENDING})
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response=> {return response.json();})
        .then(data => dispatch({type: REQUEST_IMAGES_SUCCESS, payload: data}))
        .catch(error=> dispatch({type:REQUEST_IMAGES_FAILED,payload:error}))
}