'use client';
import { useCart } from '../context/CartContext';

export default function FoodCard({ food }) {
  const { cartItems, addToCart, increaseQty, decreaseQty } = useCart();

  const itemInCart = cartItems.find(item => item.id === food.id);

  return (
    <div className="bg-white shadow rounded overflow-hidden">
      <img src={food.image} alt={food.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold">{food.name}</h3>
        <p className="text-sm text-gray-600">{food.description}</p>
        <div className="mt-2 flex justify-between items-center">
          <span className="text-red-600 font-semibold">₹{food.price}</span>
          <span className="text-yellow-500 text-sm">⭐ {food.rating}</span>
        </div>

        {itemInCart ? (
          <div className="mt-3 flex justify-between items-center">
            <button
              onClick={() => decreaseQty(food.id)}
              className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
            >
              −
            </button>
            <span className="font-semibold">{itemInCart.quantity}</span>
            <button
              onClick={() => increaseQty(food.id)}
              className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
            >
              +
            </button>
          </div>
        ) : (
          <button
            onClick={() => addToCart(food)}
            className="mt-3 w-full bg-red-500 text-white py-1 rounded hover:bg-red-600"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}
