const initialState = {
    isLoggedIn:false
}

function authreducer(state=initialState,action){
    if(action.type==="LOGGEDIN"){
        return {...state,isLoggedIn:true}
    }
    if(action.type==='LOGGEDOUT'){
        return {...state,isLoggedIn:false}
    }
    return {...state}
}
export default authreducer