import {CHANGE_SEARCH_FIELD,
    REQUEST_IMAGES_PENDING,
    REQUEST_IMAGES_SUCCESS,
    REQUEST_IMAGES_FAILED
} from "./constans";

const initialStateSearch = {
    searchField:''
}

export const searchImages = (state=initialStateSearch,action={})=>{
    console.log('action type')
    console.log(action.type)

    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({},state,
                {searchField: action.payload})
        default: return state;
    }
}

const initialStateImages = {
    images: [],
    isPending: true,
    error:''
}

export const requestImages = (state=initialStateImages, action={}) => {
    switch (action.type) {
        case REQUEST_IMAGES_PENDING:
            console.log('1 REQUEST_IMAGES_PENDING')
            return Object.assign({}, state, {isPending: true})
        case REQUEST_IMAGES_SUCCESS:
            console.log('2 REQUEST_IMAGES_SUCCESS')
            console.log(action.payload)
            return Object.assign({}, state, {images: action.payload, isPending: false})
        case REQUEST_IMAGES_FAILED:
            console.log('3 REQUEST_IMAGES_FAILED')
            console.log(action.payload)
            return Object.assign({}, state, {error: action.payload, isPending: false})
        default:
            return state
    }
}