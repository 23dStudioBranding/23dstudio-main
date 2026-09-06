"use client";

import { FiX } from "react-icons/fi";

export default function PrivacyPolicyModal({ open, setOpen }) {
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

        <div className="max-w-4xl mx-auto p-6 text-gray-800">
          <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-sm text-gray-500 mb-6">
            Last updated: August 19, 2025
          </p>

          <p className="mb-4">
            At <span className="font-semibold">23D Studio</span>, we value your
            privacy. This Privacy Policy explains how we collect, use, and
            protect your information when you use our website or services.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">
            1. Information We Collect
          </h2>
          <p className="mb-4">
            We may collect basic personal information such as your name, email
            address, phone number, or any details you provide through forms on
            our website.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">
            2. How We Use Information
          </h2>
          <p className="mb-4">
            We use your information to provide and improve our services, respond
            to inquiries, and communicate updates or promotional offers where
            applicable.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">3. Data Security</h2>
          <p className="mb-4">
            We take reasonable measures to protect your personal data. However,
            no method of transmission over the Internet is 100% secure.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">
            4. Third-Party Services
          </h2>
          <p className="mb-4">
            Our website may contain links to third-party sites. We are not
            responsible for the privacy practices or content of those websites.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">
            5. Updates to this Policy
          </h2>
          <p className="mb-4">
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with the updated date.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">6. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, you can contact
            us at:
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
