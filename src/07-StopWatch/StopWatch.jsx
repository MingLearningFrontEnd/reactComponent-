import React, { useState, useRef } from 'react';

const Stopwatch = () => {
    const [time, setTime] = useState(0); // 时间状态，单位是毫秒
    const [isRunning, setIsRunning] = useState(false); // 是否运行中
    const timerRef = useRef(null); // 用于保存计时器的引用

    // 启动秒表
    const start = () => {
        if (!isRunning) {
            setIsRunning(true);
            timerRef.current = setInterval(() => {
                setTime((prevTime) => prevTime + 10); // 每 10 毫秒更新一次
            }, 10);
        }
    };

    // 暂停秒表
    const pause = () => {
        if (isRunning) {
            clearInterval(timerRef.current); // 清除计时器
            setIsRunning(false);
        }
    };

   

    // 重置秒表
    const reset = () => {
        clearInterval(timerRef.current); // 清除计时器
        setIsRunning(false);
        setTime(0); // 重置时间为 0
    };

    // 格式化时间
    const formatTime = (time) => {
        const milliseconds = time % 1000;
        const seconds = Math.floor((time / 1000) % 60);
        const minutes = Math.floor((time / (1000 * 60)) % 60);
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(Math.floor(milliseconds / 10)).padStart(2, '0')}`;
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Stopwatch</h1>
            <div style={{ fontSize: '2rem', marginBottom: '20px' }}>
                {formatTime(time)}
            </div>
            <div>
                <button onClick={start} disabled={isRunning}>
                    Start
                </button>
                <button onClick={pause} disabled={!isRunning}>
                    Pause
                </button>
                <button onClick={reset}>
                    Reset
                </button>
            </div>
        </div>
    );
};

export default Stopwatch;
