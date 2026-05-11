'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
        {
            label: 'Dashboard',
            href: '/dashboard'
        },
        {
            label: 'Products',
            href: '/products'
        }
    ];

export function Sidebar(){
    const pathname = usePathname();
    
    return (
        <aside className="w-64 border-r p-6 flex flex-col gap-2">
        <h1 className="text-2xl font-bold mb-6">
             Ecommerce
        </h1>
            {
                links.map((link) => {
                    const active = pathname === link.href;
                    return (
                        <Link key={link.href} href={link.href}
                            className={`p-3 rounded-lg transition ${
                                active
                                    ? 'bg-black text-white'
                                    : 'hover:bg-gray-100'
                                }`}>
                            {link.label}
                        </Link>
                    )
                })
            }
        </aside>
    )
}