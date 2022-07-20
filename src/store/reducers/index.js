export function reducer(state, action){
    switch (action.type) {
        case 'numberAdd2':
            return {...state, number: state.number + 2}
        case 'x7':
            return {...state, number: state.number * 7}
        case '/25': 
            return {...state, number: state.number / 25}
        case 'int':
            return {...state, number: parseInt(state.number)}
        case '+n':
            return {...state, number: state.number + action.number}
        case 'login':
            return {...state, user: {name: action.name}}
        default:
            return state
            break;
    }
}