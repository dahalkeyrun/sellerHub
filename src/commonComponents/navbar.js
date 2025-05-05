import { useState } from "react";
import { Bell, ChevronDown, Heart, Search, ShoppingCart, Menu } from 'lucide-react';

export default function Navbar() {
  const [cartCount, setCartCount] = useState(3);
  const [isAuctionsOpen, setIsAuctionsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full border-b bg-white shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <div className="text-xl font-bold text-blue-600">
            <span className="flex items-center">SellerHub</span>
          </div>
        </a>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 text-gray-700" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <Menu className="h-6 w-6" />
          <span className="sr-only">Menu</span>
        </button>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="/" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
            Home
          </a>

          <div className="relative">
            <button
              className="flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsAuctionsOpen(!isAuctionsOpen)}
            >
              Auctions <ChevronDown className="ml-1 h-4 w-4" />
            </button>

            {isAuctionsOpen && (
              <div className="absolute top-full left-0 mt-1 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                <div className="py-1">
                  <a
                    href="/auctions/live"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsAuctionsOpen(false)}
                  >
                    Live Auctions
                  </a>
                  <a
                    href="/auctions/upcoming"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsAuctionsOpen(false)}
                  >
                    Upcoming
                  </a>
                  <a
                    href="/auctions/past"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsAuctionsOpen(false)}
                  >
                    Past Auctions
                  </a>
                </div>
              </div>
            )}
          </div>

          <a href="/categories" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
            Categories
          </a>

          <a
            href="/how-it-works"
            className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
          >
            How It Works
          </a>
        </nav>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 max-w-md mx-4">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="search"
              placeholder="Search for items..."
              className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-4">
          <button className="relative p-2 text-gray-700 hover:text-blue-600">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </button>

          <button className="relative p-2 text-gray-700 hover:text-blue-600">
            <Heart className="h-5 w-5" />
            <span className="sr-only">Wishlist</span>
          </button>

          <button className="relative p-2 text-gray-700 hover:text-blue-600">
            <ShoppingCart className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs font-medium text-white">
                {cartCount}
              </span>
            )}
            <span className="sr-only">Cart</span>
          </button>

          <div className="hidden md:flex items-center space-x-2">
            <button className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50">
              Login
            </button>
            <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-3">
            <div className="relative mb-3">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="search"
                placeholder="Search for items..."
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <a
              href="/"
              className="block py-2 text-base font-medium text-gray-700"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </a>
            <button
              className="flex items-center w-full py-2 text-base font-medium text-gray-700"
              onClick={() => setIsAuctionsOpen(!isAuctionsOpen)}
            >
              Auctions <ChevronDown className={`ml-1 h-4 w-4 ${isAuctionsOpen ? "transform rotate-180" : ""}`} />
            </button>

            {isAuctionsOpen && (
              <div className="pl-4">
                <a
                  href="/auctions/live"
                  className="block py-2 text-sm text-gray-700"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Live Auctions
                </a>
                <a
                  href="/auctions/upcoming"
                  className="block py-2 text-sm text-gray-700"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Upcoming
                </a>
                <a
                  href="/auctions/past"
                  className="block py-2 text-sm text-gray-700"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Past Auctions
                </a>
              </div>
            )}

            <a
              href="/categories"
              className="block py-2 text-base font-medium text-gray-700"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Categories
            </a>
            <a
              href="/how-it-works"
              className="block py-2 text-base font-medium text-gray-700"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <div className="flex space-x-2 mt-3">
              <button className="flex-1 px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50">
                Login
              </button>
              <button className="flex-1 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}