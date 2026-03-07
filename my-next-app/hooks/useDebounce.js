import {useRef, useCallback, useEffect} from 'react';

export default function useDebounce({fn,delay}) {
    const timeout = useRef();

    const debouncedFn = useCallback((...args) => {
        clearTimeout(timeout.current);
        timeout.current = setTimeout(() => {
            fn(...args);
        }, delay);
    }, [fn, delay]);

    useEffect(() => {
        return () => clearTimeout(timeout.current);
    }, []);

    return debouncedFn;
}