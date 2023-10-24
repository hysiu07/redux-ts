

export const FETCH_USERS_REQUESTED = 'users/FETCH_POSTS_REQUESTED';
const FETCH_USERS_SUCCEEDED = 'users/FETCH_POSTS_SUCCEDED';
const FETCH_USERS_FAILED = 'users/FETCH_POSTS_FAILED';


export const fetchRequested = ( ) => ({type: FETCH_USERS_REQUESTED})
export const fetchSucceeded = (data: any) => ({type: FETCH_USERS_SUCCEEDED, payload: data})
export const fetchFailed = () => ({ type: FETCH_USERS_FAILED })


// export const fetchData = () => { 
//     return function (dispatch:any) {
//         dispatch(fetchRequested())
//         fetch('https://jsonplaceholder.typicode.com/users').then(
//             response => response.json()
//         ).then(data => dispatch(fetchSucceeded(data.slice(0,3))))
//         .catch(dispatch(fetchFailed()))
//     }
// }
const INITIAL_STATE = { 
    users: [],
    isLoading: false,
    isError: false
}
export const reducerUsers = (state= INITIAL_STATE, action : any) => {
    switch (action.type) {
        case FETCH_USERS_REQUESTED:
        return {
            ...state, 
            isLoading: true,
            isError: false
        }
        case FETCH_USERS_SUCCEEDED:
        return {
            ...state, 
            users: action.payload,
            isLoading: false,
            isError: false
        }
        case FETCH_USERS_FAILED:
        return {
            ...state, 
            isLoading: false,
            isError: true
            }
        default:
            return state
    }
}