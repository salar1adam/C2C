import React from 'react';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-8">Effective Date: [Insert Date]</p>

      <p className="mb-4">
        At Core to Crust, we respect your privacy and are committed to protecting your personal information.
        This Privacy Policy outlines how we collect, use, and protect your data when you visit our website or enroll in our course.
      </p>
      <hr className="my-8 border-gray-300" />

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
        <p className="mb-2">We collect information when you:</p>
        <ul className="list-disc list-inside mb-4 ml-4">
          <li>Sign up for the course</li>
          <li>Fill out a form (e.g. contact, support, or scholarship request)</li>
          <li>Make a payment</li>
          <li>Communicate with us (email, chat, etc.)</li>
          <li>Access course materials and platform features</li>
        </ul>
        <p className="mb-2">This information may include:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Name, email, phone number</li>
          <li>Payment information (handled securely by our payment provider)</li>
          <li>Location/IP address (for analytics)</li>
          <li>Course activity and progress</li>
        </ul>
      </section>

      <hr className="my-8 border-gray-300" />

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
        <p className="mb-2">We use the data we collect to:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Provide access to course content</li>
          <li>Process payments securely</li>
          <li>Improve our course and platform experience</li>
          <li>Communicate with you (support, updates, feedback)</li>
          <li>Send relevant announcements or promotional offers (you can opt out at any time)</li>
        </ul>
      </section>

      <hr className="my-8 border-gray-300" />

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. How We Protect Your Data</h2>
        <p className="mb-4">
          We use industry-standard security measures to protect your personal information, including:
        </p>
        <ul className="list-disc list-inside mb-4 ml-4">
          <li>SSL encryption</li>
          <li>Secure payment gateways (e.g., Stripe or PayPal)</li>
          <li>Limited internal access to your data</li>
        </ul>
        <p>We do not sell, rent, or trade your personal data to third parties.</p>
      </section>

      <hr className="my-8 border-gray-300" />

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Third-Party Services</h2>
        <p>
          We may use trusted third-party tools (e.g., analytics, email marketing, payment processors) that may collect
          limited data to improve performance and support. These services are GDPR and CCPA compliant where applicable.
        </p>
      </section>

      <hr className="my-8 border-gray-300" />

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
        <p className="mb-2">You have the right to:</p>
        <ul className="list-disc list-inside mb-4 ml-4">
          <li>Access the data we hold about you</li>
          <li>Request corrections or updates</li>
          <li>Request data deletion (unless required for legal or billing purposes)</li>
          <li>Opt out of marketing emails</li>
        </ul>
        <p>To exercise these rights, contact us at: [Insert your support email]</p>
      </section>

      <hr className="my-8 border-gray-300" />

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Changes will be posted on this page with a new effective date.
        </p>
      </section>

      <hr className="my-8 border-gray-300" />

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">7. Contact</h2>
        <p>
          If you have any questions about this policy or your personal data, please contact us at:
        </p>
        <p>Email: info@coretocrust.com</p>
        <p>Phone: (964) 750-6416103</p>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;