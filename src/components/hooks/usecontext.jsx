import React from 'react';
import { createContext } from 'react';

export const Appcontext = createContext();


const Context = (props) => {
    const im = <img src="/public/logo192.png" alt="liogo" />
    const name = "Raj"
    return (
        <Appcontext.Provider value={name}>
            {props.children}
        </Appcontext.Provider>
    )
}

export default Context;

