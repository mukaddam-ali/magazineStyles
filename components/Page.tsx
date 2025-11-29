import React from 'react';

interface PageProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

export default function Page({ children, className = '', id }: PageProps) {
    return (
        <div id={id} className={`w-full max-w-[900px] mx-auto my-8 bg-magazine-paper rounded-lg shadow-xl overflow-hidden min-h-[800px] flex flex-col relative border border-stone-100 ${className}`}>
            {children}
        </div>
    );
}
