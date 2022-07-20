import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import {initialState, reducer} from '../../store';
import { numberAdd2, login } from '../../store/actions';

const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)

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
                    onClick={() => numberAdd2(dispatch)}
                    >
                        +2
                    </button>
                    <button 
                    className='btn'
                    onClick={() => login(dispatch, 'Ryan')}
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
                        onClick={() => dispatch({type: 'x7'})}>
                            x7
                        </button>
                        <button 
                        className="btn"
                        onClick={() => dispatch({type: '/25'})}>
                            /25
                        </button>
                        <button 
                        className="btn"
                        onClick={() => dispatch({type: 'int'})}>
                            int
                        </button>
                        <button 
                        className="btn"
                        onClick={() => dispatch({type: '+n', number: 5})}>
                            +n
                        </button>
                    </div>
                </span>
            </div>
        </div>
    )
}

export default UseReducer
