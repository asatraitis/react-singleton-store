import React, {useState, useEffect} from 'react';
import {useStore} from './Store'

const Display = () => {
    const [state, setState] = useState('');
    const [store, setStore, subscribe, unsubscribe] = useStore();

    const storeToState = () => {
        setState(store())
    }

    useEffect(() => {
        //...sub here
        subscribe(storeToState);

        return () => {
            unsubscribe(storeToState)
            //..unsub here
        }
    }, [])

    return (
        <div>            
            {state}
            <button onClick={() => unsubscribe(storeToState)}>Unsub</button>    
        </div>
    )
}

export default Display