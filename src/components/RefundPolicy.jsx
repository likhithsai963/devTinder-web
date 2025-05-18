import React from "react";

const RefundPolicy = () => {
  return (
    <div className="h-screen overflow-y-auto">
      <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
        <h1 className="text-3xl font-bold mb-6">Refund Policy</h1>

        <p className="mb-6">
          This application is created for{" "}
          <strong>educational and development purposes only</strong>. It is not
          intended for commercial use or actual monetary transactions. The
          integration of Razorpay within this project is solely for the purpose
          of demonstrating payment gateway functionality during the development
          process.
        </p>

        <h2 className="text-2xl font-semibold mb-2">1. No Real Payments</h2>
        <p className="mb-6">
          Any payment interactions simulated within this application are not
          real. They are either mock transactions or conducted using Razorpay's
          test mode. No real funds are collected, processed, or transferred.
        </p>

        <h2 className="text-2xl font-semibold mb-2">
          2. No Refunds Applicable
        </h2>
        <p className="mb-6">
          Since no real payments are made, the concept of refunds does not
          apply. This application does not support, offer, or process any kind
          of refund or return requests.
        </p>

        <h2 className="text-2xl font-semibold mb-2">
          3. Razorpay Test Environment
        </h2>
        <p className="mb-6">
          If you are interacting with Razorpay in this application, please be
          aware that it is through their <strong>test environment</strong>. No
          live transactions are enabled. For more information, refer to
          Razorpay’s documentation:
        </p>
        <a
          href="https://razorpay.com/docs/payment-gateway/test-card-upi-details/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline block mb-6"
        >
          https://razorpay.com/docs/payment-gateway/test-card-upi-details/
        </a>

        <h2 className="text-2xl font-semibold mb-2">4. Contact</h2>
        <p className="mb-2">
          If you have any questions or concerns regarding this refund policy,
          please contact the developer at:
        </p>
        <p className="text-gray-700 font-medium">
          <a
            href="mailto:likhithsai963@gmail.com"
            className="text-blue-600 hover:underline"
          >
            likhithsai963@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default RefundPolicy;
