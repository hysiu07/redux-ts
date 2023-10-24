

const FETCH_POSTS_REQUESTED = 'posts/FETCH_POSTS_REQUESTED';
const FETCH_POSTS_SUCCEEDED = 'posts/FETCH_POSTS_SUCCEDED';
const FETCH_POSTS_FAILED = 'posts/FETCH_POSTS_FAILED';


export const fetchRequested = ( ) => ({type: FETCH_POSTS_REQUESTED})
export const fetchSucceeded = (data: any) => ({type: FETCH_POSTS_SUCCEEDED, payload: data})
export const fetchFailed = () => ({ type: FETCH_POSTS_FAILED })


export const fetchData = () => { 
    return function (dispatch:any) {
        dispatch(fetchRequested())
        fetch('https://jsonplaceholder.typicode.com/posts').then(
            response => response.json()
        ).then(data => dispatch(fetchSucceeded(data.slice(0,3))))
        .catch(dispatch(fetchFailed()))
    }
}
const INITIAL_STATE = { 
    posts: [],
    isLoading: false,
    isError: false
}
export const reducerPosts = (state= INITIAL_STATE, action : any) => {
    switch (action.type) {
        case FETCH_POSTS_REQUESTED:
        return {
            ...state, 
            isLoading: true,
            isError: false
        }
        case FETCH_POSTS_SUCCEEDED:
        return {
            ...state, 
            posts: action.payload,
            isLoading: false,
            isError: false
        }
        case FETCH_POSTS_FAILED:
        return {
            ...state, 
            isLoading: false,
            isError: true
            }
        default:
            return state
    }
}