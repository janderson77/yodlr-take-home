const INITIAL_STATE = {}

export default function users(state=INITIAL_STATE, action) {
    switch(action.type) {
        case 'GET_USERS':
            return{...state, ...action.users}
        case 'DELETE_USER':
            const newState = {...state}
            delete newState[action.id]
            return newState
        default:
            return state
    }
}