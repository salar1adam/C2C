import React from 'react';

const TermsOfUsePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terms of Use</h1>

      <p className="text-sm text-gray-500 mb-8">Effective Date: [01/01/2025]</p>

      <section className="mb-8">
        <p>
          Welcome to Core to Crust. By accessing our website, enrolling in our course, or using any of our services, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
        <p>
          By using this site or purchasing any course, you agree to these Terms of Use. If you do not agree, please do not use our services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Course Access and Use</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Upon enrollment, you are granted a non-transferable, non-exclusive license to access the course materials for personal or professional learning.</li>
          <li>You may not share your login credentials or redistribute any course materials without written permission.</li>
          <li>Lifetime access (if included in your plan) means access for as long as the course is available online and maintained by us.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Payment & Refund Policy</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>All payments are due at the time of purchase unless a payment plan is arranged.</li>
          <li>We do not offer refunds except in rare cases of duplicate charges or errors. Please review all course details before purchasing.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
        <p>
          All content on this site—including videos, graphics, texts, and downloadable materials—is the intellectual property of Salar Mousa Adam or licensed to us.
        </p>
        <p>You may not:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Reproduce or distribute any course content</li>
          <li>Use our name, brand, or materials for commercial purposes</li>
          <li>Reverse engineer or modify platform features</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. User Conduct</h2>
        <p>You agree not to:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Misuse the platform or access it with automated systems (bots, scrapers)</li>
          <li>Post abusive, defamatory, or illegal content in any discussion forums</li>
          <li>Attempt unauthorized access to other users' data or the backend system</li>
        </ul>
        <p>We reserve the right to suspend or terminate access for violations.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Disclaimers</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>We strive for accuracy and practical value in our course, but we do not guarantee specific job outcomes or career advancement.</li>
          <li>Course content is for educational purposes and should not be considered professional legal, geological, or engineering advice.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
        <p>
          Core to Crust and its creators are not liable for any direct, indirect, or incidental damages arising from your use of the course or website.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">8. Modifications</h2>
        <p>
          We may update these terms at any time. Changes will be effective once posted on this page. Continued use of the platform implies acceptance of the updated terms.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">9. Contact</h2>
        <p>For any questions or concerns about these Terms:</p>
        <p>Email: info@coretocrust.com</p>
        <p>Phone: (964) 750-6416103</p>
      </section>
    </div>
  );
};

export default TermsOfUsePage;