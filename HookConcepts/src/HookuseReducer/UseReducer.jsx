import React from 'react'
import { useReducer } from 'react'
import './UseReducer.css'

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 }
        case 'decrement':
            return { count: state.count - 1 }
        default:
            return state
    }
}

const Hookreduce = () => {

    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return (
        <div className="counter-container">
            <h1>useReducer</h1>
            <div className="count-value">{state.count}</div>
            <button className="button" onClick={() => dispatch({ type: 'increment' })}>
                Increment
            </button>
            <button className="button2" onClick={() => dispatch({ type: 'decrement' })}>
                Decrement
            </button>
        </div>
    )
}

export default Hookreduce
