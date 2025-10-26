import React from "react";
import { Link } from "react-router-dom";
import qrImage from "../images/qr.jpg"; // make sure the path is correct

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
            North West DELHI,New Delhi, 110086<br />
            {/* GSTIN/UIN: <span className="font-semibold">07HTVPK9737D1ZW</span><br /> */}
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
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              {/* Instagram SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.055 1.97.24 2.428.402a4.92 4.92 0 0 1 1.784 1.09 4.92 4.92 0 0 1 1.09 1.784c.162.458.347 1.258.402 2.428.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.055 1.17-.24 1.97-.402 2.428a4.922 4.922 0 0 1-1.09 1.784 4.922 4.922 0 0 1-1.784 1.09c-.458.162-1.258.347-2.428.402-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.055-1.97-.24-2.428-.402a4.922 4.922 0 0 1-1.784-1.09 4.922 4.922 0 0 1-1.09-1.784c-.162-.458-.347-1.258-.402-2.428C2.212 15.584 2.2 15.2 2.2 12s.012-3.584.07-4.85c.055-1.17.24-1.97.402-2.428a4.922 4.922 0 0 1 1.09-1.784 4.922 4.922 0 0 1 1.784-1.09c.458-.162 1.258-.347 2.428-.402C8.416 2.212 8.8 2.2 12 2.2zm0 1.8c-3.157 0-3.534.012-4.776.07-1.065.05-1.644.22-2.028.367a3.12 3.12 0 0 0-1.14.736 3.12 3.12 0 0 0-.736 1.14c-.147.384-.317.963-.367 2.028-.058 1.242-.07 1.619-.07 4.776s.012 3.534.07 4.776c.05 1.065.22 1.644.367 2.028.17.443.403.823.736 1.14.317.317.697.566 1.14.736.384.147.963.317 2.028.367 1.242.058 1.619.07 4.776.07s3.534-.012 4.776-.07c1.065-.05 1.644-.22 2.028-.367a3.12 3.12 0 0 0 1.14-.736 3.12 3.12 0 0 0 .736-1.14c.147-.384.317-.963.367-2.028.058-1.242.07-1.619.07-4.776s-.012-3.534-.07-4.776c-.05-1.065-.22-1.644-.367-2.028a3.12 3.12 0 0 0-.736-1.14 3.12 3.12 0 0 0-1.14-.736c-.384-.147-.963-.317-2.028-.367-1.242-.058-1.619-.07-4.776-.07zm0 3.3a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13zm0 1.8a4.7 4.7 0 1 0 0 9.4 4.7 4.7 0 0 0 0-9.4zm6.4-.9a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"/></svg>
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              {/* Facebook SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.876v-6.987h-2.54v-2.89h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33V21.876C18.343 21.128 22 16.991 22 12z"/></svg>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              {/* LinkedIn SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.762 2.24 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.76-2.238-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.788-1.75-1.756s.784-1.756 1.75-1.756c.967 0 1.75.788 1.75 1.756s-.783 1.756-1.75 1.756zm13.5 10.268h-3v-4.5c0-1.072-.021-2.454-1.496-2.454-1.496 0-1.725 1.17-1.725 2.379v4.575h-3v-9h2.887v1.23h.041c.402-.762 1.382-1.562 2.843-1.562 3.037 0 3.6 2.002 3.6 4.605v4.727z"/></svg>
            </a>
            <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              {/* Pinterest SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12 0 5.012 3.068 9.307 7.406 11.098-.102-.943-.195-2.39.041-3.42.213-.917 1.374-5.84 1.374-5.84s-.35-.701-.35-1.737c0-1.628.943-2.846 2.117-2.846.998 0 1.479.749 1.479 1.644 0 1-.639 2.496-.97 3.883-.276 1.166.586 2.114 1.736 2.114 2.083 0 3.682-2.192 3.682-5.36 0-2.803-2.015-4.762-4.892-4.762-3.334 0-5.278 2.5-5.278 5.082 0 1.004.387 2.08.87 2.667a.35.35 0 0 1 .081.335c-.09.367-.292 1.166-.333 1.327-.052.22-.17.268-.394.162-1.467-.682-2.387-2.814-2.387-4.536 0-3.69 2.681-7.09 7.737-7.09 4.062 0 7.223 2.893 7.223 6.757 0 4.037-2.547 7.282-6.084 7.282-1.188 0-2.304-.616-2.684-1.345l-.73 2.782c-.264 1.012-.977 2.276-1.456 3.05 1.09.336 2.243.518 3.44.518 6.627 0 12-5.373 12-12s-5.373-12-12-12z"/></svg>
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              {/* YouTube SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a2.985 2.985 0 0 0-2.106-2.106C19.72 3.5 12 3.5 12 3.5s-7.72 0-9.392.58a2.985 2.985 0 0 0-2.106 2.106C0 7.86 0 12 0 12s0 4.14.502 5.814a2.985 2.985 0 0 0 2.106 2.106C4.28 20.5 12 20.5 12 20.5s7.72 0 9.392-.58a2.985 2.985 0 0 0 2.106-2.106C24 16.14 24 12 24 12s0-4.14-.502-5.814zM9.75 15.02V8.98l6.5 3.02-6.5 3.02z"/></svg>
            </a>
          </div>
        </div>

        {/* 4. Contact + QR */}
        <div className="flex flex-col items-center md:items-end">
          <h4 className="font-semibold text-lg">Contact</h4>
          <p className="mt-2 text-sm"><a href="mailto:hello@example.com" className="hover:text-white transition-colors">upstorkselevators@gmail.com</a></p>
          <p className="text-sm"><a href="tel:+919911408893" className="hover:text-white transition-colors">+91 9911408893</a></p>
          <div className="mt-4 flex flex-col items-center md:items-end">
            <img src={qrImage} alt="QR Code" className="w-48 h-48 object-contain" />
            <span className="text-xs mt-2">Scan to connect</span>
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
