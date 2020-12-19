const initialState = {
    data: {
        UserId:'xxchon',
        Name:'',
        Profile:'',
        IsLoggedIn:false,
        type:''
    }
}

const Reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'DEL_DATA':
            const deletedState = state
            return deletedState
        case 'ADD_DATA':
            const addedState = {
                data:action.playload
            }
            return addedState
        default:
            break
    }
    return state;
}

export default Reducer;