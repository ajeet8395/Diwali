import React, { useState, useEffect } from 'react';
import { Sparkles, Timer, Trophy, ArrowRight, Mail, Info, Share2, X, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";


const ShareModal = ({ isOpen, onClose, cardData }) => {
    if (!isOpen) return null;

    const shareLinks = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(cardData.message)}`,
        twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(`Happy Diwali! ${cardData.message}`)}`,
        whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(`Happy Diwali! ${cardData.message}`)}`,
        linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent('Happy Diwali!')}&summary=${encodeURIComponent(cardData.message)}`,
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-purple-800 rounded-lg p-6 w-96 relative">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-300 hover:text-white"
                >
                    <X size={24} />
                </button>

                <h3 className="text-xl font-bold mb-4 text-center">Share Your Diwali Wishes</h3>

                <div className="grid grid-cols-2 gap-4">
                    <a
                        href={shareLinks.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition-colors"
                    >
                        <Facebook size={20} />
                        Facebook
                    </a>

                    <a
                        href={shareLinks.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white p-3 rounded-lg transition-colors"
                    >
                        <Twitter size={20} />
                        Twitter
                    </a>

                    <a
                        href={shareLinks.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white p-3 rounded-lg transition-colors"
                    >
                        <FaWhatsapp size={20} />
                        WhatsApp
                    </a>

                    <a
                        href={shareLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white p-3 rounded-lg transition-colors"
                    >
                        <Linkedin size={20} />
                        LinkedIn
                    </a>
                </div>
            </div>
        </div>
    );
};


export default ShareModal;