import React from 'react';

export interface ListItem {
    rank: number;
    title: string;
    description?: string;
}

interface TopTenListProps {
    title: string;
    items: ListItem[];
}

export default function TopTenList({ title, items }: TopTenListProps) {
    return (
        <div className="p-8 md:p-12 bg-white">
            <h2 className="text-3xl font-serif font-bold mb-10 text-center text-stone-800 border-b-2 border-stone-100 pb-4 inline-block w-full">{title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {items.map((item) => (
                    <div key={item.rank} className="flex items-start p-6 bg-stone-50 rounded-xl border border-stone-100 hover:shadow-md transition-shadow">
                        <span className="text-5xl font-bold text-stone-200 mr-6 font-serif leading-none">
                            {item.rank}
                        </span>
                        <div>
                            <h3 className="text-xl font-bold mb-2 text-stone-900">{item.title}</h3>
                            {item.description && <p className="text-stone-600 text-sm leading-relaxed">{item.description}</p>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
