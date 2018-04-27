const defaultState = {
    content: "Home Content",
    title : "Home"
}

const CHANGE_CONTENT_TO_CONTENT_ONE  = "CHANGE_CONTENT_TO_CONTENT_ONE";
const CHANGE_CONTENT_TO_CONTENT_TWO  = "CHANGE_CONTENT_TO_CONTENT_TWO";

const homeReducer = (state = defaultState , action : any)=>{
    switch(action.type){
        case CHANGE_CONTENT_TO_CONTENT_ONE :
            return {...state, content:"Home Content One"}
        case CHANGE_CONTENT_TO_CONTENT_TWO :
            return {...state, content:"Home Content Two"}
        default:
            return state;
    }
}

export default homeReducer;