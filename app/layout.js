import './globals.css';
import Navbar from './components/Navbar';
import { CartProvider } from './context/CartContext';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Navbar />
          <main className="pt-20 max-w-6xl mx-auto px-4">{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}
