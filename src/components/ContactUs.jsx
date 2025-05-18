import React from 'react';

const ContactUs = () => {
  return (
    <div className="h-screen overflow-y-auto">
      <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

        <p className="mb-4">
          Thank you for using this application. If you have any questions, feedback, or encounter any issues, feel free to reach out.
        </p>

        <div className="mb-4">
          <h2 className="text-2xl font-semibold mb-2">Developer Contact</h2>
          <p className="mb-1">Email:</p>
          <a
            href="mailto:likhithsai963@gmail.com"
            className="text-blue-600 hover:underline font-medium"
          >
            likhithsai963@gmail.com
          </a>
        </div>

        <div className="mb-4">
          <h2 className="text-2xl font-semibold mb-2">Support Hours</h2>
          <p>Monday – Friday: 10:00 AM – 6:00 PM IST</p>
          <p>Emails will be responded to within 24–48 hours.</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Purpose of Contact</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Questions about the Razorpay integration (demo/testing only)</li>
            <li>Suggestions for improving the application</li>
            <li>Reporting bugs or UI issues</li>
            <li>Learning resource recommendations</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
