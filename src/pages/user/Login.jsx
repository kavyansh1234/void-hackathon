import React, { useState } from "react";

export default function Login() {
  const [formState, setFormState] = useState({
    voterId: "",
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

  const handleSubmitVoterId = (e) => {
    e.preventDefault();
    // You might want to add logic here to validate the voterId
    console.log("Voter ID submitted with data:", formState.voterId);
    setIsVoterIdSubmitted(true);
    // Here you can also add logic to fetch the OTP
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
              <label htmlFor="voterId" className="font-semibold text-white">
                Voter ID
              </label>
              <input
                onChange={handleInputChange}
                type="text"
                name="voterId"
                placeholder="Voter ID"
                className="border-[1px] p-2 rounded-md"
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
                placeholder="OTP"
                className="border-[1px] p-2 rounded-md"
              />
              <button type="submit" className="btn">
                Authenticate
              </button>
            </div>
          </form>
        )}
      </div>
    </>
  );
}
