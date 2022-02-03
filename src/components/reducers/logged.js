const loggedReducer = (state=false,action)=>{
    switch (action.type){
        case 'user_SIGN_IN':
            return action.payload
        default:return state
    }
}
export default loggedReducer;