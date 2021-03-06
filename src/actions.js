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

    dispatch({type:REQUEST_IMAGES_PENDING})
    // fetch('https://jsonplaceholder.typicode.com/photos')
    // https://picsum.photos/v2/list?page=1&limit=100
    fetch('https://picsum.photos/v2/list?page=2&limit=70')
        .then(response=> {return response.json();})
        .then(data => dispatch({type: REQUEST_IMAGES_SUCCESS, payload: data}))
        .catch(error=> dispatch({type:REQUEST_IMAGES_FAILED,payload:error}))
}