export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // //remove after finished developing
    // token:
    // "BQDdT1XtJWb9c6Y1y8ku5WU_JV1sFbrEshKRkOD00ZUK6x-f8cznG8IG7Oftg_cjIaPHDqMeibxLf_TgaHN_gYEFnynd0U1pKjrF-KMkfsS9-haIdVGZX-A1UbuA6z7c4ceVjZEbCiXONNnN5J7GcCEp-PDsZI1Pv65QEyR8gUgSPi1w",
};

const reducer = (state, action) => {
console.log(action);

// Action -> type, [payload]

switch (action.type) {
    case 'SET_USER':
        return {
            ...state,
            user:action.user
        };
        case 'SET_TOKEN':
            return {
                ...state, 
                token: action.token
            };
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists:action.playlists,
            };
        default:
            return state;
}


}

export default reducer;