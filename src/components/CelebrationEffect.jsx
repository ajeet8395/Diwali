import React, { useState, useEffect } from 'react';
import { Sparkles, Timer, Trophy, ArrowRight, Mail, Info } from 'lucide-react';

const CelebrationEffect = () => (
    <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
            <div
                key={i}
                className="absolute animate-sparkle"
                style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`
                }}
            >
                <Sparkles className="text-yellow-400" size={24} />
            </div>
        ))}
    </div>
);


export default CelebrationEffect;