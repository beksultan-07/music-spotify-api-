const initialState = {
    authorize: false,
    userEmail: null,
    userFirebaseId: null,
    userId: 'd5edfd31b9564daf9012d97ec031a0e1',
    userSecret: 'c18d9365349f4b94b5e01f895fd734fd',
    token: null,
    inputVal: null,
    typeTrack: null,
    tracks: {
        tracksName: [],
        tracksUrl: []
    }
}

const reducer  = (state = initialState, action) => {

    switch (action.type) {
        case 'getToken':
            return {...state, token: action.val}
        case 'getInputVal':
            return {...state, inputVal: action.inpVal} 
        case 'ChangeTypeTrack':
                return {...state, typeTrack: action.CTOT} 
        case 'getUserEmail':
            return {...state, userEmail: action.email} 
        case 'authT':
            return {...state, authorize: action.authState} 
        case 'getId':
            return {...state, userFirebaseId: action.userId}
        case 'saveTrack':
            return {...state, tracks: action.valTrack} 
        default:
            return state
    }
}

export default reducer;