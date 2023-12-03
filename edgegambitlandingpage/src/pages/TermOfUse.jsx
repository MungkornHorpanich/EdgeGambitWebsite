import React from "react";
import Navbar from "../components/Navbar";

const TermOfUse = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl pt-[150px] p-5 mx-auto">
        <h1 className="text-4xl font-bold">Terms of use</h1>

        <p className="mt-7 text-lg font-semibold">Acceptance of Terms</p>
        <p className="mt-7 font-light text-lg">
          By signing up for the EdgeGambit waitlist, you agree to the terms
          outlined in this document.
        </p>

        <p className="mt-7 text-lg font-semibold">Use of Information</p>

        <p className="mt-7 font-light text-lg">
          The email address you provide will be used exclusively for
          communications related to EdgeGambit. We do not sell or share your
          information with third parties.
        </p>

        <p className="mt-7 text-lg font-semibold">Limitation of Liability</p>

        <p className="mt-7 font-light text-lg">
          EdgeGambit is not liable for any direct, indirect, incidental,
          consequential, or special damages arising out of or in any way
          connected with the use of our waitlist.
        </p>

        <p className="mt-7 text-lg font-semibold">Changes to Terms of Use</p>

        <p className="mt-7 font-light text-lg">
          EdgeGambit reserves the right to modify these terms at any time. Users
          will be notified of any changes via the email address provided.
        </p>

        <p className="mt-7 text-lg font-semibold">Contact Information</p>

        <p className="mt-7 font-light text-lg">
          If you have any questions or concerns regarding this privacy policy or
          terms of use, please contact us at support@edgegambit.com
        </p>
      </div>
    </div>
  );
};

export default TermOfUse;
