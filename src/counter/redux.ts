const ADD_COUNT = 'count/ADD_COUNT'
const SUB_COUNT = 'count/SUB_COUNT'
const RESET_COUNT = 'count/RESET_COUNT'

export const addCount = () =>  ({type: ADD_COUNT})
export const subCount = () => ({type: SUB_COUNT})
export const resetCount = () => ({ type: RESET_COUNT })

const INITIAL_STATE = {
    count: 0
}

export  const reducerCount = (state= INITIAL_STATE, action : any) => {
    switch (action.type) {
        case ADD_COUNT:
            return {
                ...state,
                count: state.count + 1
            } 
        case SUB_COUNT:
            return {
                ...state,
                count: state.count - 1
            }
        case RESET_COUNT:
            return {
                ...state,
                count: 0
            }
        default: 
            return state
    }
}