/* eslint-disable react/no-unescaped-entities */
'use client';
import { useState } from 'react';
import foods from '../data/foods';
import FoodCard from '../components/FoodCard';

export default function SearchPage() {
  const [query, setQuery] = useState('');

  const filteredFoods = foods.filter(food =>
    food.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-red-500">Search Your Favorite Food</h1>

      <input
        type="text"
        placeholder="Type to search (e.g., pizza, dosa)..."
        className="w-full px-4 py-2 border border-gray-300 rounded mb-6 focus:outline-none focus:ring-2 focus:ring-red-400"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {filteredFoods.length === 0 ? (
        <p className="text-gray-500">No food items found matching "{query}"</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredFoods.map(food => (
            <FoodCard key={food.id} food={food} />
          ))}
        </div>
      )}
    </div>
  );
}
