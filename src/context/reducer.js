export const actionType={
    
    SET_SIDEBAR_SHOW:"SET_SIDEBAR_SHOW"
};

const reducer=(state,action)=>{
    switch(action.type){
        
        case actionType.SET_SIDEBAR_SHOW:
            return {
                ...state,
                sidebarShow: action.sidebarShow,
            };
      
        default:
            return state;
    }
};

export default reducer;