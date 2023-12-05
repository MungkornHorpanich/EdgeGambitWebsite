import React, { useEffect } from "react";
import Navbar from "../components/Navbar";

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl pt-[150px] mx-auto">
        <h1 className="text-4xl font-bold">Privacy Policy</h1>

        <p className="mt-7 text-lg font-semibold">Information We Collect</p>
        <p className="mt-7 font-light text-lg">
          When you sign up for the EdgeGambit waitlist, we collect the following
          information:
        </p>
        <p className="mt-7 font-light text-lg">
          -Email Address: We use your email address to notify you about updates,
          news, and when EdgeGambit becomes available.
        </p>

        <p className="mt-7 text-lg font-semibold">
          How We Use Your Information
        </p>

        <p className="mt-7 font-light text-lg">
          We use your email address solely for the purpose of keeping you
          informed about EdgeGambit and related updates. We do not share your
          information with third parties.
        </p>

        <p className="mt-7 text-lg font-semibold">Data Security</p>

        <p className="mt-7 font-light text-lg">
          Your email address is securely stored and protected. We implement
          industry-standard security measures to prevent unauthorized access or
          disclosure of your information.
        </p>

        <p className="mt-7 text-lg font-semibold">Changes to Privacy Policy</p>

        <p className="mt-7 font-light text-lg">
          EdgeGambit reserves the right to update this privacy policy. Any
          changes will be communicated through the email address you provide.
        </p>
      </div>
    </div>
  );
};

export default Privacy;
