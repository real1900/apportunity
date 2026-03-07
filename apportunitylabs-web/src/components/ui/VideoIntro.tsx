'use client';

import React, { useRef, useState, useLayoutEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface VideoIntroProps {
    onComplete: () => void;
}

export default function VideoIntro({ onComplete }: VideoIntroProps) {
    const vidRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isEnded, setIsEnded] = useState(false);

    // The legacy hack: Force play via ref, handle iOS constraints
    const handlePlayPress = () => {
        if (vidRef.current) {
            vidRef.current.pause();
            vidRef.current.currentTime = 0;
            vidRef.current.muted = false; // Unmute on explicit interaction
            vidRef.current.loop = false;
            vidRef.current.play().catch(e => console.error("Playback failed:", e));
            setIsPlaying(true);
        }
    };

    const handleVideoEnded = () => {
        setIsEnded(true);
        setTimeout(() => {
            onComplete();
        }, 500); // Small buffer for exit animation
    };

    useLayoutEffect(() => {
        const video = vidRef.current;
        if (video) {
            video.onended = handleVideoEnded;
            video.playsInline = true;
            video.muted = true; // Required for autoplay on iOS

            // Attempt autoplay immediately
            video.play().then(() => {
                setIsPlaying(true);
            }).catch(e => {
                console.log("Autoplay blocked, waiting for interaction", e);
            });
        }

        // Cleanup
        return () => {
            if (video) video.onended = null;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <AnimatePresence>
            {!isEnded && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950 cursor-pointer overflow-hidden"
                    onClick={!isPlaying ? handlePlayPress : undefined}
                >
                    <video
                        ref={vidRef}
                        className="w-full h-full object-cover"
                        playsInline
                        muted
                        autoPlay
                        poster="/video/intro.jpg"
                    >
                        <source src="/video/apportunity-intro.mp4" type="video/mp4" />
                    </video>

                    {/* Fallback play button if autoplay absolutely fails and user doesn't know to tap */}
                    {!isPlaying && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                            <div className="w-20 h-20 rounded-full border-2 border-emerald-500/50 flex items-center justify-center bg-black/60 backdrop-blur-md">
                                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                        </div>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );
}
