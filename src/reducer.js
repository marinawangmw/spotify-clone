export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null,
    //token: null
    token: 'BQAUk4LuqdntaZofm-GxH0Rr_GEl4I83_sfqxjkPkGv78wnc-OOP1vzXggBTScLYcxaeaDnIfjongR1jTHyu8PXzAdL0wIraSVevZRNx4p8iKlibyIXIFXIs9mpFdwYwBg6uFSex1px8Y1WBENwhmE2Z_q7DwAMxFyXic3pbbbfzinxZyTKG'
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
        default:
            return state;
    }
}

export default reducer;