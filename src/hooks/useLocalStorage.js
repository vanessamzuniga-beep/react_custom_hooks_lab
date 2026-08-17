import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue = null) {
    // Create state
    const [state, setState] = useState(() => {

        // Check local storage
        const storedValue = localStorage.getItem(key)

        // If found something in localStorage, use as starting state
        if(storedValue !== null) {
            return storedValue
        }
        // If nothing found, use initialValue as starting state
        return initialValue
    })

    // After component renders, save current state into localStorage using the key
    useEffect(() => {
        localStorage.setItem(key, state)
    }, [key, state]) //runs useEffect again if key or state changes

    // Gives value back to whatever component uses the hook
    return [state, setState]

}
