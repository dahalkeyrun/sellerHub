import { useState } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, ArrowRight } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
    // Add your newsletter signup logic here
  };

  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="text-xl font-bold text-blue-600">SellerHub</div>
            <p className="text-gray-600 text-sm">
              The premier platform for online auctions and e-commerce. Find unique items, bid on auctions, and discover amazing deals.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/auctions/live" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                  Live Auctions
                </a>
              </li>
              <li>
                <a href="/categories" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                  Categories
                </a>
              </li>
              <li>
                <a href="/how-it-works" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="/blog" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="/help-center" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="/faq" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/terms" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Stay Updated</h3>
            <p className="text-gray-600 text-sm mb-4">
              Subscribe to our newsletter for the latest auctions, deals, and updates.
            </p>
            <form onSubmit={handleSubmit} className="flex">
              <div className="relative flex-grow">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="w-full pl-10 pr-4 py-2 rounded-l-md border border-gray-300 focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 rounded-r-md flex items-center justify-center"
              >
                <ArrowRight size={18} />
                <span className="sr-only">Subscribe</span>
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-2">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} SellerHub. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/sitemap" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
                Sitemap
              </a>
              <a href="/accessibility" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
                Accessibility
              </a>
              <a href="/cookies" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}