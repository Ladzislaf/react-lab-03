import React from 'react'
import './css/Operators.css'

const Operators = ({ country }) => {
    let operators = []
    let inputs = []

    switch (country) {
        case 'by':
            operators.push('MTC')
            operators.push('A1')
            operators.push('life:)')
            break
        case 'ru':
            operators.push('Билайн')
            operators.push('Мегафон')
            operators.push('МТС')
            operators.push('Tele2')
            break
        case 'ua':
            operators.push('Lifecell')
            operators.push('Vodafone')
            operators.push('Київстар')
            break
        case 'pl':
            operators.push('Orange')
            operators.push('Play')
            operators.push('Plus')
            operators.push('T-mobile')
            break
        case 'lit':
            operators.push('Telia')
            operators.push('Bite')
            operators.push('Tele2')
            break
        case 'lat':
            operators.push('LMT')
            operators.push('Tele2')
            operators.push('Bite')
            break
        default:
    }

    for (let i = 0; i < operators.length; i++) {
        let id = `op_${i}`
        inputs.push(
            <div key={i.toString()}>
                <input type="radio" id={id} name="op" />
                <label htmlFor={id}>{operators[i]}</label>
            </div>
        )
    }

    return <div className="choice">{inputs}</div>
}

export default Operators
