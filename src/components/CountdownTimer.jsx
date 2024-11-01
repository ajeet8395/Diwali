import React, { useState, useEffect } from 'react';

// Countdown Timer Component
const CountdownTimer = () => {
    const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const targetDate = new Date('2025-10-21T00:00:00');

        const updateCountdown = () => {
            const now = new Date();
            const difference = targetDate - now;

            setCountdown({
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((difference % (1000 * 60)) / 1000)
            });
        };

        const timer = setInterval(updateCountdown, 1000);
        updateCountdown();
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Countdown to Diwali End 2025</h2>
            <p className="text-lg mb-4">October 21, 2025</p>
            <div className="flex justify-center gap-8">
                {Object.entries(countdown).map(([unit, value]) => (
                    <div key={unit} className="bg-purple-800 p-4 rounded-lg">
                        <div className="text-3xl font-bold">{value}</div>
                        <div className="text-sm">{unit.charAt(0).toUpperCase() + unit.slice(1)}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default CountdownTimer;