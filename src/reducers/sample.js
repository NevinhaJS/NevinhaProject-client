const screens = (state = [], action) => {
    switch (action.type) {
        case 'GET_SCREENS':
            return [
                ...state,
                {
                    id: 2,
                }
            ]
        default:
            return state
    }
}

export default screens