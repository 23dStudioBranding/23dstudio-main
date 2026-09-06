"use client";

import { FiX } from "react-icons/fi";

export default function TermsAndConditionsModal({ open, setOpen }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-xl p-6">
        {/* Close button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          <FiX size={20} />
        </button>

        <div className="max-w-4xl mx-auto text-gray-800">
          <h1 className="text-3xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-sm text-gray-500 mb-6">
            Last updated: August 19, 2025
          </p>

          <p className="mb-4">
            Welcome to <span className="font-semibold">23D Studio</span>. By
            accessing or using our website, you agree to comply with and be
            bound by the following Terms and Conditions. Please read them
            carefully.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">
            1. Use of the Website
          </h2>
          <p className="mb-4">
            You agree to use this website only for lawful purposes and in a way
            that does not infringe the rights of others or restrict their use
            and enjoyment of the website.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">
            2. Intellectual Property
          </h2>
          <p className="mb-4">
            All content on this site, including text, graphics, logos, and
            images, is the property of 23D Studio and is protected by applicable
            copyright and intellectual property laws.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">
            3. Limitation of Liability
          </h2>
          <p className="mb-4">
            We are not responsible for any direct, indirect, incidental, or
            consequential damages that may result from the use of our website or
            services.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">
            4. Changes to Terms
          </h2>
          <p className="mb-4">
            We reserve the right to update or modify these Terms and Conditions
            at any time without prior notice. Continued use of the website
            constitutes your acceptance of any such changes.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">5. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at:
            <br />
            <span className="font-semibold">23D Studio</span>, Nashik,
            Maharashtra, India
            <br />
            📧 info@23dstudio.com
          </p>
        </div>
      </div>
    </div>
  );
}
