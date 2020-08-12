export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null,
    token: null,
    //token: 'BQD46o4_a-yHtg4QulPX0fSOA9s9XEjzUbT1rQOXZCUPCHwa6k…WuOeEzSnP3gNgZSEYeahEBzo_UlMsS-k4d_A9A1ZHFt4uCNDM',
    playlists: null,
    discoverWeekly: null
}

const reducer = (state, action) => {
    console.log(action); //easy for debugging

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }
        case 'SET_DISCOVER_WEEKLY':
        return {
            ...state,
            discoverWeekly : action.discover_weekly
        }
            
        default:
            return state;
    }
}

export default reducer;