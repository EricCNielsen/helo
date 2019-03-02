const initialState = {
    id: 0,
    username: '',
    profilePic: ''
}

const UPDATE_USER = 'UPDATE_USER'

export function updateUser(user) {
    return {
        type: UPDATE_USER,
        payload: user
    }
}

export default function reducer(state = initialState, action) {
    const {type, payload} = action

    switch (type) {
        case UPDATE_USER:
            const {id, username} = payload
            const profilePic = payload.profile_pic
            return {...state, id, username, profilePic}
            
        default: 
            return state
    }
}