import React, { useState, useEffect } from 'react';
import ShareModal from './ShareModal';
import { Sparkles, Timer, Trophy, ArrowRight, Mail, Info, Share2, X, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';


const GreetingCardGenerator = () => {
    const [message, setMessage] = useState('');
    const [template, setTemplate] = useState('template1');
    const [showShareModal, setShowShareModal] = useState(false);

    const templates = {
        template1: 'bg-gradient-to-r from-yellow-400 to-orange-500',
        template2: 'bg-gradient-to-r from-purple-500 to-pink-500',
        template3: 'bg-gradient-to-r from-green-400 to-blue-500'
    };

    return (
        <div className="max-w-2xl mx-auto bg-purple-800 p-8 rounded-lg">
            <h3 className="text-2xl mb-6">Create Your Diwali Greeting</h3>

            <select
                value={template}
                onChange={(e) => setTemplate(e.target.value)}
                className="w-full mb-4 p-2 rounded bg-purple-700"
            >
                {Object.keys(templates).map(t => (
                    <option key={t} value={t}>Template {t.slice(-1)}</option>
                ))}
            </select>

            <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter your Diwali wishes..."
                className="w-full p-4 rounded bg-purple-700 mb-4"
                rows="4"
            />

            <div className={`p-8 rounded-lg mb-4 ${templates[template]}`}>
                <div className="text-center text-white">
                    <h4 className="text-2xl mb-2">Happy Diwali</h4>
                    <p>{message || 'Your message will appear here'}</p>
                </div>
            </div>

            <button
                onClick={() => setShowShareModal(true)}
                className="bg-yellow-500 text-black px-6 py-2 rounded-full"
            >
                <Share2 className="inline mr-2" />
                Share Card
            </button>

            <ShareModal
                isOpen={showShareModal}
                onClose={() => setShowShareModal(false)}
                cardData={{ message, template }}
            />
        </div>
    );
};



export default GreetingCardGenerator;