import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial(num){
    const n = parseInt(num)
    if (n < 0) return -1;
    if (n === 0) return 1;
    return calcFatorial(n -1) * n   
}

const UseEffect = (props) => {
    const [number, setNumber] = useState(1);
    const [fatorial, setFatorial] = useState(1);
    const [resposta, setResposta] = useState('')
    const [number1, setNumber1] = useState(0)
    console.log(typeof(number1));

    useEffect(function(){
        if (number1 % 2 == 0) {
            setResposta('par');
        }else {
            setResposta('impar');

        }
    }, [number1])

    useEffect(function(){
        setFatorial(calcFatorial(number))
    }, [number])
    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle title="Exercicio #01"/>
            <div className="center">
                <div>
                    <span className="text">
                        Fatorial:
                    </span>
                    <span className="text red">
                        {fatorial === -1 ? 'Nao Existe' :  fatorial}
                    </span>
                </div>
                <input 
                type="number" 
                value={number} 
                onChange={e => setNumber(e.target.value)} />
            </div>
            <SectionTitle title="Exercicio #02"/>
            <div className="center">
                <div>
                    <span className="text">Par Ou Impar?</span>
                    <span className="text red">{number1} e {resposta}</span>
                </div>
                <input type="number" value={number1} onChange={e => setNumber1(e.target.value)} />
                
            </div>
        </div>
    )
}

export default UseEffect
