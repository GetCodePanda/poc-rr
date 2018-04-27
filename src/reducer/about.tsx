const defaultState = {
    content: "About Content",
    title : "About"
}

const CHANGE_CONTENT_TO_CONTENT_ONE  = "CHANGE_CONTENT_TO_CONTENT_ONE";
const CHANGE_CONTENT_TO_CONTENT_TWO  = "CHANGE_CONTENT_TO_CONTENT_TWO";

const aboutReducer = (state = defaultState , action : any)=>{
    switch(action.type){
        case CHANGE_CONTENT_TO_CONTENT_ONE :
            return {...state, content:"About Content One"}
        case CHANGE_CONTENT_TO_CONTENT_TWO :
            return {...state, content:"About Content Two"}
        default:
            return state;
    }
}

export default aboutReducer;