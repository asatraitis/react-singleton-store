import React from 'react';
import {useStore} from './Store'

const Input = () => {  
    const [store, setStore] = useStore();

    return (
        <div>
            <input onChange={(e) => setStore(e.target.value)} type="text"/>                    
        </div>
    )
}

export default Input;