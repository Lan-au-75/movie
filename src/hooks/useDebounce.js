import { useEffect, useState } from 'react';

function useDebounce(value, delay) {
    const [debounce, setDebounce] = useState(value);

    useEffect(() => {
        const timeID = setTimeout(() => {
            setDebounce(value);
        }, delay);

        return () => clearTimeout(timeID);
    }, [value, delay]);

    return debounce;
}

export { useDebounce };
