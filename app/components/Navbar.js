'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto">
        <span className="text-2xl font-bold text-red-500">MyFoodApp</span>
        <div className="space-x-6 font-medium text-gray-700">
          <Link href="/">Home</Link>
          <Link href="/help">Help</Link>
          <Link href="/search">Search</Link>
          <Link href="/cart">Cart</Link>
        </div>
      </div>
    </nav>
  );
}
