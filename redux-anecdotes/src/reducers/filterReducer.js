const initialFilter = ''

export const changeFilter = (filter) => {
    return{
        type: 'CHANGE_FILTER',
        data: filter
    }
}

const filterReducer = (state = initialFilter, action) => {
    if (action.type === 'CHANGE_FILTER') {return action.data}
    return state
}

export default filterReducer