import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
const initialState = {
    number: 0,
    cart: [],
    user: null,
    products: [{}, {}]
}

function reducer(state, action){
    switch (action.type) {
        case 'add2ToNumber':
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

const UseReducer = (props) => {
    const [state, exec] = useReducer(reducer, initialState)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />

            <div className="center">
                {state.user ? 
                    <span className="text">{state.user.name}</span>
                    :  <span className="text">Sem usuario conectado</span>
                }
                <span className="text">{state.number}</span>
                <div>
                    <button 
                    className='btn'
                    onClick={() => exec({type: 'add2ToNumber'})}
                    >
                        +2
                    </button>
                    <button 
                    className='btn'
                    onClick={() => exec({type: 'login', name: 'Ryan'})}
                    >
                        login
                    </button>
                </div>
            </div>
            <SectionTitle title="Desafio"/> 
            <div className="center">
                <span className="text">
                    {state.number}
                    <div>
                        <button 
                        className="btn"
                        onClick={() => exec({type: 'x7'})}>
                            x7
                        </button>
                        <button 
                        className="btn"
                        onClick={() => exec({type: '/25'})}>
                            /25
                        </button>
                        <button 
                        className="btn"
                        onClick={() => exec({type: 'int'})}>
                            int
                        </button>
                        <button 
                        className="btn"
                        onClick={() => exec({type: '+n', number: 5})}>
                            +n
                        </button>
                    </div>
                </span>
            </div>
        </div>
    )
}

export default UseReducer
