import React from "react";
import { Link } from "react-router-dom";
import qrImage from "../images/qr.jpg";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12 w-full">
      <div className="max-w-7xl mx-auto px-3 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* 1. Company Info */}
        <div>
          <h3 className="text-xl font-bold">UPSTORKS ELEVATORS</h3>
          <p className="text-sm mt-2">
            We specialize in designing and installing high-quality elevators and lifts for residential and commercial projects.
          </p>
        </div>

        {/* 2. Billing Info */}
        <div>
          <h4 className="font-semibold text-lg">Billing Information</h4>
          <p className="mt-3 text-sm leading-6">
            <span className="font-semibold">Buyer (Bill To):</span><br />
            UP STORKS ELEVATORS<br />
            Plot No. 137, Ground Floor,<br />
            Pocket-2, Rohini Sector-22,<br />
            North West DELHI, New Delhi, 110086<br />
            Place of Supply: Delhi
          </p>
        </div>

        {/* 3. Links + Social Media */}
        <div>
          <h4 className="font-semibold text-lg">Company Links</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
            <li><Link to="/projects" className="hover:text-white transition-colors">About Our Project</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Service</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact Page</Link></li>
          </ul>

          {/* Social Media */}
          <div className="flex gap-3 mt-4">
            {/* SVG icons remain unchanged */}
          </div>
        </div>

        {/* 4. Contact + QR */}
        <div className="flex flex-col items-center md:items-end">
          <h4 className="font-semibold text-lg">Contact</h4>
          <p className="mt-2 text-sm">
            <a href="mailto:upstorkselevators@gmail.com" className="hover:text-white transition-colors">
              upstorkselevators@gmail.com
            </a>
          </p>
          <p className="text-sm">
            <a href="tel:+919911408893" className="hover:text-white transition-colors">
              +91 9911408893
            </a>
          </p>

          {/* QR Code */}
          <div className="mt-6 flex flex-col items-center md:items-end p-2">
            <img
              src={qrImage}
              alt="QR Code"
              className="w-36 h-36 md:w-48 md:h-48 object-contain rounded-md shadow-lg"
            />
            <span className="text-xs mt-2 text-gray-400">Scan to connect</span>
          </div>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="text-center text-xs text-gray-500 mt-5 border-t border-gray-700 pt-2">
        © {new Date().getFullYear()} UPSTORKS ELEVATORS. All Rights Reserved.
      </div>
    </footer>
  );
}
