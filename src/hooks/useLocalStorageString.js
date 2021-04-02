import { useState } from 'react';

function useLocalStorageString(localStorageKey, defaultValue) {
    const [state, setState] = useState(() => {
        const stored = localStorage.getItem(localStorageKey);
        return stored ? stored : defaultValue;
    });

    function setLocalState(newState) {
        setState(newState);
        localStorage.setItem(localStorageKey, newState);
    }

    return [state, setLocalState];
}

export default useLocalStorageString;