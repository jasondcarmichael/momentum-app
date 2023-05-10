import { useState, useEffect } from 'react';

export default function DateTime() {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        let timer = setInterval(()=>setDate(new Date()), 1000)
        return function cleanup() {
            clearInterval(timer)
        }
    });

    return (
        <div>
            <p>Today is {date.toLocaleDateString()}</p>
        </div>
    )
}