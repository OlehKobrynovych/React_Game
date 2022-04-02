
const initialState = {
    // computer: false,  //++
    change: null,
    items: [
        {id: 1, user: null},
        {id: 2, user: null},
        {id: 3, user: null},
        {id: 4, user: null},
        {id: 5, user: null},
        {id: 6, user: null},
        {id: 7, user: null},
        {id: 8, user: null},
        {id: 9, user: null},
    ],

}

const gameReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case 'SET__CHANGE': 
            return {
                ...state,
                change: actions.payload
            }
        // case 'SET__CHANGE': 
        //     return {
        //         ...state,
        //         change: actions.payload.id,
        //         computer: actions.payload.computer,
        //     }
        case 'SET_ITEM_ID': 
            return {
                ...state,
                items: state.items.map(el=>{
                   return el.id === actions.payload.id ? {id: el.id, user: actions.payload.user} : el
                })
            }
        case 'SET_CHANGE': 
            return {
                ...state,
                change: actions.payload === 1 ? 2 : 1
            }
        case 'SET_RESTART_ITEMS': 
            return {
                ...state,
                items: initialState.items,
                change: null,
            }
        default: 
            return state;
    }
}


export default gameReducer;