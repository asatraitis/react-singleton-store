export const useStore = (() => {
    let storeInstance;
    let subs = [];

    const createStoreInstance = () => {
        //...
        let store = 'My globalStore!';
        const getStore = () => {
            return store;
        }
        const setStore = (newStore) => {
            store = newStore;
            subs.forEach(fx => fx());
            return store;
        }
        const subscribe = (fx) => {
            subs.push(fx)
        }
        const unsubscribe = (fx) => {
            let index = subs.indexOf(fx)
            subs.splice(index, 1)
        }


        return [getStore, setStore, subscribe, unsubscribe];
    }

    return () => {
        if (!storeInstance) {
            storeInstance = createStoreInstance()
        }
        return storeInstance
    }
})()