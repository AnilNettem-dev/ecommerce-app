'use client';

import { useCartStore } from '@/features/cart/store/cart.store';
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
        },
        {
            label: 'Cart',
            href: '/cart'
        }
    ];

export function Sidebar(){
    const pathname = usePathname();
    const items = useCartStore((state) => state.items);
    const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
    
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
                                    {link.label === 'Cart' && totalItems > 0 && (
                                        <span className="ml-auto bg-white text-black text-xs px-2 py-1 rounded-full">
                                            {totalItems}
                                        </span>
                                    )}
                        </Link>
                    )
                })
            }
        </aside>
    )
}