import React from 'react'

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
    <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
    
    <p className="mb-6">
      This application is developed solely for educational and learning purposes. It is not intended for commercial use or public deployment.
    </p>

    <h2 className="text-2xl font-semibold mb-2">1. Information Collection</h2>
    <p className="mb-4">
      We do not collect any personally identifiable information (PII) unless explicitly provided by the user during interactions with the application.
    </p>
    <p className="mb-4">
      For demonstration purposes, this application integrates Razorpay, a third-party payment gateway. Razorpay may collect:
    </p>
    <ul className="list-disc list-inside mb-4 space-y-1">
      <li>Payment method details (e.g., card or UPI info)</li>
      <li>Billing information</li>
      <li>Contact information (name, email, phone)</li>
    </ul>
    <p className="mb-6 font-medium">
      This application does <span className="text-red-600 font-bold">not</span> store any payment information on its servers.
    </p>

    <h2 className="text-2xl font-semibold mb-2">2. Use of Information</h2>
    <p className="mb-6">
      Any information collected is used solely to simulate a real-world payment process for learning purposes. It is not used for analytics, marketing, or data processing.
    </p>

    <h2 className="text-2xl font-semibold mb-2">3. Third-Party Services</h2>
    <p className="mb-4">
      This app uses Razorpay services. Please refer to Razorpay's privacy policy to understand how your data is used:
    </p>
    <a
      href="https://razorpay.com/privacy/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:underline mb-6 block"
    >
      https://razorpay.com/privacy/
    </a>

    <h2 className="text-2xl font-semibold mb-2">4. Data Security</h2>
    <p className="mb-6">
      Since this application is used only for development purposes, no sensitive data is stored. Razorpay, as a PCI DSS-compliant service provider, handles payment data securely.
    </p>

    <h2 className="text-2xl font-semibold mb-2">5. User Consent</h2>
    <p className="mb-6">
      By using this application, you agree that it is meant for educational use only and does not process real payments.
    </p>

    <h2 className="text-2xl font-semibold mb-2">6. Changes to This Policy</h2>
    <p className="mb-6">
      This policy may be updated in the future to reflect any changes in development requirements or third-party tools.
    </p>

    <h2 className="text-2xl font-semibold mb-2">7. Contact</h2>
    <p className="mb-2">
      If you have any questions or concerns about this privacy policy, please contact the developer at:
    </p>
    <p className="text-gray-700 font-medium">[likhithsai963@gmail.com]</p>
  </div>
  )
}

export default PrivacyPolicy;
