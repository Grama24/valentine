"use client"

import React, { useState } from 'react';
import Confetti from 'react-confetti';
import { useWindowSize } from "react-use"

const ValentinePage = () => {
  const [yesPressed, setYesPressed] = useState(false);
  const [noCount, setNoCount] = useState(0);
  const [emailSent, setEmailSent] = useState(false);
  const { width, height } = useWindowSize();

  const handleYes = () => {
    setYesPressed(true);
    // Logic to send email
    setEmailSent(true);
  };

  const handleNo = () => {
    setNoCount(noCount + 1);
  };

  const getYesButtonSize = () => {
    return 2 + noCount * 0.5;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100">
      {yesPressed && <Confetti width={width} height={height} />}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">My dearest Ada 💖</h1>
        {noCount > 0 && !yesPressed && (
          <p className="text-xl text-red-500 mb-4">Are you {Array(noCount).fill("sure").join(" ")}?</p>
        )}
        {!yesPressed ? (
          <>
            <p className="text-2xl mb-8">Will you be my Valentine? 🌹</p>
            <div className="space-x-4">
              <button
                onClick={handleYes}
                style={{ fontSize: `${getYesButtonSize()}rem` }}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition-all duration-200"
              >
                Yes
              </button>
              <button
                onClick={handleNo}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
              >
                No
              </button>
            </div>
          </>
        ) : (
          <div className="animate-pulse">
            <p className="text-2xl text-red-600 mb-4">
              Of course Pookie said yes! That&apos;s why I already booked a romantic dinner. 🍽️
            </p>
            <p className="text-xl text-red-500">
              {emailSent
                ? "Check your email for the details. 💌"
                : "Oops! There was an issue sending the email. But don&apos;t worry, I&apos;ll tell you all about our plans! 💕"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ValentinePage;

