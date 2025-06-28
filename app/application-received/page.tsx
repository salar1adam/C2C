"use client";

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

export default function ApplicationReceivedPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ApplicationReceivedContent />
    </Suspense>
  );
}

// Create a new component to hold the page content that uses useSearchParams
function ApplicationReceivedContent() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name');

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container py-8 px-6 md:px-8 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">
          Application Received!
        </h1>
        <p className="text-slate-600 mb-8">
          {name ? `Thank you, ${name}, for your application!` : "Thank you for your application!"} We have received your submission and are currently reviewing your eligibility for the Core to Crust course. You will receive an email notification regarding your eligibility shortly.
        </p>

        <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 mb-6" role="alert">
          <p className="font-bold">Want to Fast-Track Your Application and Secure Your Spot?</p>
          <p>While we review your eligibility, you have the option to complete your payment now. Paying immediately will:</p>
          <ul className="list-disc list-inside mt-2">
            <li>Expedite your eligibility review: Your application will be moved to the front of the queue.</li>
            <li>Secure your spot: Guarantee your enrollment in the upcoming cohort.</li>
          </ul>
          <p className="mt-4">To proceed with payment now, please use one of the options below:</p>
        </div>

        {/* Manual PayPal Payment Options */}
        <div id="ittxej" className="bg-white rounded-lg shadow-sm p-8">
          <p id="is8pwm" className="mb-6 text-slate-600">
            Go to:&nbsp; &nbsp;
            <a href="https://www.paypal.com/ncp/payment/TU2SEBJPTSEA6" target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:underline">
              https://www.paypal.com/ncp/payment/TU2SEBJPTSEA6
            </a>
            &nbsp; &nbsp; and follow the instructions from the payment provider.<br/><br/>
            Or scan the following PayPal QR code and follow the instructions.
          </p>
          <img
            src="https://www.az-ecosys.com/docs/736/Fees_Payment-qrcode_payfees.avif"
            loading="lazy"
            id="i0kvm4"
            className="mb12 mx-auto" // Added mx-auto to center the image if needed
            alt="PayPal QR Code"
          />

          <p id="i9ayhl" className="mb12 text-slate-600">Or click the following button to submit (PayPal)</p>
          <form // Removed unnecessary enctype
            encType="multipart/form-data"
            action="https://www.paypal.com/ncp/payment/TU2SEBJPTSEA6"
            target="_top"
            id="iod2v3"
            className="no_generic_submission flex flex-col items-center" // Adjusted class for centering
          >
            <img
              src="https://www.paypalobjects.com/images/Debit_Credit_APM.svg"
              id="ih5oj3"
              className="mb-4" // Added margin-bottom, removed col4 as it's not a standard Tailwind class
              alt="Debit and Credit Cards accepted by PayPal"
            />
            <input type="submit" value="Pay Now to Expedite & Secure Spot" id="iaqbzk" className="pointer bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded-lg cursor-pointer transition duration-200 ease-in-out" /> {/* Added some Tailwind classes for styling, updated value */}
          </form>
        </div>
      </div>
    </div>
  );
}