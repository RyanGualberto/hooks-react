import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

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
        </div>
    )
}

export default UseReducer
