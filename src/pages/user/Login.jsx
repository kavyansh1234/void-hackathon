import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [formState, setFormState] = useState({
    voterid: "",
    otp: "",
  });
  const [isVoterIdSubmitted, setIsVoterIdSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmitVoterId = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/api/user/registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          voterid: formState.voterid,
        }),
      });

      if (response.ok) {
        setIsVoterIdSubmitted(true);
        let otp = document.getElementById("otp");
        otp.value="";  
        // You can add logic here to fetch the OTP if needed
      } else {
        // Handle error scenarios
        console.error('Failed to submit Voter ID');
      }
    } catch (error) {
      console.error('Error submitting Voter ID:', error);
    }
  };

  const handleSubmitOtp = (e) => {
    e.preventDefault();
    console.log("OTP submitted with data:", formState.otp);
    // Add your submission logic here
  };

  return (
    <>
      <div className="absolute top-0 left-0 w-screen h-screen login-bg "></div>
      <div className="h-[93vh] w-screen flex flex-col items-center py-16">
        <h1 className="text-5xl font-semibold mt-20 text-white">Join Us</h1>
        {!isVoterIdSubmitted ? (
          <form onSubmit={handleSubmitVoterId} className="mt-10 w-[400px]">
            <div className="flex flex-col gap-3">
              <label htmlFor="voterid" className="font-semibold text-white">
                Voter ID
              </label>
              <input
                onChange={handleInputChange}
                type="text"
                name="voterid"
                placeholder="Voter ID"
                className="border-[1px] p-2 rounded-md text-black"
              />

              <button type="submit" className="btn">
                Submit Voter ID
              </button>
            </div>
          </form>
        ) : (
          <form onSubmit={handleSubmitOtp} className="mt-10 w-[400px]">
            <div className="flex flex-col gap-3">
              <label htmlFor="otp" className="font-semibold text-white">
                Submit your otp
              </label>

              <input
                onChange={handleInputChange}
                type="text"
                name="otp"
                id="otp"
                placeholder="OTP"
                className="border-[1px] p-2 rounded-md text-black"
              />
              <Link to={"/home"}>
                <button type="submit" className="btn">
                  Authenticate
                </button>
              </Link>
            </div>
          </form>
        )}
      </div>
    </>
  );
}
