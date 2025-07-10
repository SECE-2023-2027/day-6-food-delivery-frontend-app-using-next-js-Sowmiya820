/* eslint-disable react/no-unescaped-entities */
export default function Help() {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow">
      <h1 className="text-3xl font-bold mb-6 text-red-500">Help & Support</h1>

      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">How do I place an order?</h2>
        <p className="text-gray-600">
          Browse our food menu on the home page. Click on <strong>Add to Cart</strong> or use the
          + / − buttons to adjust quantity. Then go to the <strong>Cart</strong> page and click
          <em> "Proceed to Checkout"</em>.
        </p>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">How can I contact support?</h2>
        <p className="text-gray-600">
          For any issues or queries, please email us at{' '}
          <a href="mailto:support@myfoodapp.com" className="text-blue-600 underline">
            support@myfoodapp.com
          </a>{' '}
          or call our 24×7 helpline at <strong>1800-123-FOOD</strong>.
        </p>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Can I cancel my order?</h2>
        <p className="text-gray-600">
          Yes, you can cancel your order within 5 minutes after placing it. Go to the cart or
          checkout page and click Cancel Order. Refunds will be processed within 24 hours.
        </p>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Is there a delivery charge?</h2>
        <p className="text-gray-600">
          Delivery is free for orders above ₹200. For smaller orders, a nominal delivery fee of ₹25
          is applied.
        </p>
      </div>

      <p className="text-center mt-10 text-gray-500">
        Still need help? <a href="/contact" className="text-blue-600 underline">Contact us</a>
      </p>
    </div>
  );
}
