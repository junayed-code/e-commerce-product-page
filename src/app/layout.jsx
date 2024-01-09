import CartProvider from "@/providers/CartProvider";
import Navbar from "@/components/navbar";
import "./globals.css";

export const metadata = {
  title: "Frontend Mentor - E-commerce product page solution",
  description:
    "This is a solution to the E-commerce product page challenge on Frontend Mentor.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-gray-800">
        <div className="lg:max-w-[1088px] mx-auto">
          <CartProvider>
            <Navbar />
            {children}
          </CartProvider>
        </div>
      </body>
    </html>
  );
}
