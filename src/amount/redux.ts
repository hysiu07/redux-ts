const ADD_AMOUNT: string = 'amount/ADD_AMOUNT'
const SUB_AMOUNT:string = 'amount/SUB_AMOUNT'
const REMOVE_AMOUNT:string = 'amount/REMOVE_AMOUNT'

type InitialStateType = {
    amount: number
}
const INITIAL_STATE: InitialStateType = {
    amount: 0
}
export const addAmount = () => ({type: ADD_AMOUNT})
export const subAmount = () => ({type: SUB_AMOUNT})
export const removeAmount = () =>({ type: REMOVE_AMOUNT })


export const reducerAmount = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case ADD_AMOUNT:
            return {
                ...state,
                amount: state.amount + 100
            }
        case SUB_AMOUNT:
            return {
                ...state,
                amount: state.amount - 100
            }
        case REMOVE_AMOUNT:
            return {
                ...state,
                amount: 0
            }
        default:
            return state
    }
}