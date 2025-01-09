import { useRef, useCallback } from 'react';

const useDebounce = (fn, delay) => {
    // 使用 useRef 存储 timer，避免每次渲染时重新初始化
    const timer = useRef(null);

    // 返回防抖后的函数
    const debouncedFn = useCallback((...args) => {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = setTimeout(() => {
            fn(...args); // 调用原始函数
        }, delay);
    }, [fn, delay]);

    return debouncedFn;
};

export default useDebounce;

