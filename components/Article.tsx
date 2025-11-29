import React from 'react';

interface ArticleProps {
    title: string;
    body: React.ReactNode;
    imagePlaceholder?: boolean;
    author?: string;
}

export default function Article({ title, body, imagePlaceholder = true, author }: ArticleProps) {
    return (
        <article className="p-8 md:p-16 bg-white">
            {imagePlaceholder && (
                <div className="w-full h-80 bg-stone-200 rounded-lg mb-10 flex items-center justify-center text-stone-400 shadow-sm">
                    <span className="font-mono text-sm uppercase tracking-widest">Image Placeholder</span>
                </div>
            )}
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-stone-900 leading-tight">
                {title}
            </h1>
            {author && (
                <p className="text-stone-500 mb-8 font-sans text-sm uppercase tracking-wider">By {author}</p>
            )}
            <div className="prose prose-lg prose-stone max-w-none font-sans text-stone-700 leading-relaxed">
                {typeof body === 'string' ? <p className="whitespace-pre-line">{body}</p> : body}
            </div>
        </article>
    );
}
