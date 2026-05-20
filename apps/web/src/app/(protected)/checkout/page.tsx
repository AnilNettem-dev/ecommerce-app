'use client';

import { useCartStore } from "@/features/cart/store/cart.store";
import { formatCurrency } from "@/shared/lib/currency";
import { Input } from "@/shared/ui/input";
import { useState } from "react";

export default function CheckoutPage(){
    const items = useCartStore(
        (state) => state.items
    );

    const [form, setForm] = useState({
        fullName: "",
        email: "",
        address: "",
        city: "",
        zipCode: "",
    });

    const [errors, setErrors] = useState({
        fullName: "",
        email: "",
        address: "",
        city: "",
        zipCode: "",
    });

    const [loading, setLoading] = useState(false);
    const totalPrice = items.reduce((acc,item) => acc + item.quantity * item.price, 0);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setForm({
            ...form,
            [name]: value,
        });
        setErrors({
            ...errors,
            [name]: '',
        });
    };

    const validate = () => {
        const newErrors = {
            fullName: form.fullName ? '' : 'Full Name is required',
            email: form.email ? '' : 'Email is required',
            address: form.address ? '' : 'Address is required',
            city: form.city ? '' : 'City is required',
            zipCode: form.zipCode ? '' : 'Zip Code is required',
        };
        setErrors(newErrors);
        return Object.values(newErrors).every((error) => error === '');
    }

    const handlePlaceOrder = () => {
        if (!validate()) return;

        setLoading(true);

        new Promise((resolve) => {
            setTimeout(() => {
                    resolve({ orderId: Date.now() });
                }, 2000);
            })
            .then((response) => {
                console.log('Order placed:', response);
                setForm({
                    fullName: "",
                    email: "",
                    address: "",
                    city: "",
                    zipCode: "",
                });
            })
            .catch((error) => {
                console.error('Order failed:', error);
            })
            .finally(() => {
                setLoading(false);
            });
    }

     return (
            <div className="p-10 grid grid-cols-2 gap-10">
                <div className="flex flex-col gap-4">
                    <h1 className="text-3xl font-bold">
                    Checkout
                    </h1>

                    <div>
                    <Input
                        name="fullName"
                        placeholder="Full Name"
                        value={form.fullName}
                        onChange={handleChange}
                    />

                    {errors.fullName && (
                        <p className="text-red-500 text-sm mt-1">
                        {errors.fullName}
                        </p>
                    )}
                    </div>

                    <div>
                    <Input
                        name="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleChange}
                    />

                    {errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                        </p>
                    )}
                    </div>

                    <div>
                    <Input
                        name="address"
                        placeholder="Address"
                        value={form.address}
                        onChange={handleChange}
                    />

                    {errors.address && (
                        <p className="text-red-500 text-sm mt-1">
                        {errors.address}
                        </p>
                    )}
                    </div>

                    <div>
                    <Input
                        name="city"
                        placeholder="City"
                        value={form.city}
                        onChange={handleChange}
                    />

                    {errors.city && (
                        <p className="text-red-500 text-sm mt-1">
                        {errors.city}
                        </p>
                    )}
                    </div>

                    <div>
                    <Input
                        name="zipCode"
                        placeholder="Zip Code"
                        value={form.zipCode}
                        onChange={handleChange}
                    />

                    {errors.zipCode && (
                        <p className="text-red-500 text-sm mt-1">
                        {errors.zipCode}
                        </p>
                    )}
                    </div>

                    <button
                    onClick={handlePlaceOrder}
                    disabled={loading}
                    className="bg-black text-white p-3 rounded-lg"
                    >
                    {loading
                        ? 'Placing Order...'
                        : 'Place Order'}
                    </button>
                </div>

                <div className="border rounded-xl p-6 h-fit">
                    <h2 className="text-2xl font-bold mb-6">
                    Order Summary
                    </h2>

                    <div className="flex flex-col gap-4">
                    {items.map((item) => (
                        <div
                        key={item.id}
                        className="flex justify-between"
                        >
                        <span>
                            {item.title} ×{' '}
                            {item.quantity}
                        </span>

                        <span>
                            ₹{' '}
                            {item.price *
                            item.quantity}
                        </span>
                        </div>
                    ))}
                    </div>

                    <div className="border-t mt-6 pt-6 flex justify-between text-xl font-bold">
                    <span>Total</span>

                    <span>₹ {formatCurrency(totalPrice)}</span>
                    </div>
                </div>
            </div>
    );
}
