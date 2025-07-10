'use client';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { cartItems, increaseQty, decreaseQty, getTotal } = useCart();

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow rounded mt-6">
      <h1 className="text-3xl font-bold text-red-500 mb-6 text-center">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">Your cart is currently empty.</p>
      ) : (
        <>
          <div className="space-y-6">
            {cartItems.map(item => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-center sm:items-start justify-between bg-gray-100 p-4 rounded-lg shadow-sm"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 rounded object-cover mb-4 sm:mb-0"
                />
                <div className="sm:flex-1 sm:ml-4 w-full text-center sm:text-left">
                  <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
                  <p className="text-sm text-gray-600">₹{item.price} × {item.quantity}</p>
                </div>

                <div className="flex items-center justify-center sm:justify-end mt-4 sm:mt-0 space-x-3">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="px-3 py-1 bg-gray-300 text-lg rounded hover:bg-gray-400"
                  >
                    −
                  </button>
                  <span className="font-semibold text-gray-700">{item.quantity}</span>
                  <button
                    onClick={() => increaseQty(item.id)}
                    className="px-3 py-1 bg-gray-300 text-lg rounded hover:bg-gray-400"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t mt-8 pt-6 text-center sm:text-right">
            <p className="text-xl font-bold text-gray-800">
              Total Amount: ₹{getTotal()}
            </p>
            <button className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}
