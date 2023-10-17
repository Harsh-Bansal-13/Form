export const actionType={
    
    SET_SIDEBAR_SHOW:"SET_SIDEBAR_SHOW",
    SET_BANKDETAILS_SHOW:"SET_BANKDETAILS_SHOW"
};

const reducer=(state,action)=>{
    switch(action.type){
        
        case actionType.SET_SIDEBAR_SHOW:
            return {
                ...state,
                sidebarShow: action.sidebarShow,
            };
      
        case actionType.SET_BANKDETAILS_SHOW:
            return {
                ...state,
                bankdetailsShow: action.bankdetailsShow,
            };
      
        default:
            return state;
    }
};

export default reducer;