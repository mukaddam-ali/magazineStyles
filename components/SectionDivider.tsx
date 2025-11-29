import React from 'react';

interface SectionDividerProps {
    title: string;
    subtitle?: string;
}

export default function SectionDivider({ title, subtitle }: SectionDividerProps) {
    return (
        <div className="w-full py-24 bg-stone-100 text-center my-12 shadow-inner">
            <h2 className="text-5xl font-serif font-bold text-stone-800 mb-6 tracking-tight">{title}</h2>
            {subtitle && <p className="text-2xl text-stone-500 font-sans font-light uppercase tracking-widest">{subtitle}</p>}
        </div>
    );
}
