import { useState, useEffect } from 'react';

const getStorageValue = (key: string, defaultValue: any) => {
    // getting stored value
    const saved = localStorage.getItem(key);
    const initial = saved ? JSON.parse(saved) : null;
    return initial || defaultValue;
};

export const useLocalStorage = (key: string, defaultValue: any) => {
    const [value, setValue] = useState(() =>
        getStorageValue(key, defaultValue),
    );

    useEffect(() => {
        // storing input name
        if (value) {
            localStorage.setItem(key, JSON.stringify(value));
        }
    }, [key, value]);

    return [value, setValue];
};
