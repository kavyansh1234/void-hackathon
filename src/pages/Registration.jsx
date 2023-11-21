import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';
 const Registration= () => {
    
  const history = useHistory();
  const [formData, setFormData] = useState({
    email: '',
    voterid: '',
    aadhaarid: '',
    mob: ''
  });
  const [opt, setOtp] = useState({
    otp: "",
  })
  const [status, setStatus] = useState(0); // 0: Failed, 1: Enter OTP, 2: Redirect to new form

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
        email: '',
        voterid: '',
        aadhaarid: '',
        mob: ''
      });
  };


//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Simulate API call (Replace this with your actual API call)
//       // For example, assuming you send formData to an API endpoint
//       const response = await fetch('your_api_endpoint_here', {
//         method: 'POST',
//         body: JSON.stringify(formData),
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       });
//       const result = await response.json();

//       // Handle different API responses
//       if (result.status === 0) {
//         // Failed
//         setStatus(0);
//       } else if (result.status === 1) {
//         // Enter OTP
//         setStatus(1);
//         // Here you may want to show OTP input field and handle OTP validation
//         // Once OTP is validated, trigger another API call or action
//         // For simplicity, let's assume validation succeeded and API responds with 2
//         
//         }if (result.status === 2) {
    //     // Redirect to a new route using history.push
    //     history.push('/new-form-route'); // Replace '/new-form-route' with your actual route
    // }, 2000); // Simulating 2 seconds delay before redirecting to the new form
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

  if (status === 0) {
    return (
      <div>
        <p>Failed. Please try again.</p>
        <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="voterId">Voter ID:</label>
        <input
          type="text"
          id="voterId"
          name="voterId"
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="aadhaar">Aadhaar Number:</label>
        <input
          type="text"
          id="aadhaar"
          name="aadhaar"
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          pattern="[0-9]{10}"
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
        
      </div>
    );
  } else if (status === 1) {
    return (
      <div>
        <p>Enter OTP</p>
        <form onSubmit={handleSubmit} >
        <label htmlFor="otp">otp</label>
        <input
          type="text"
          id="otp"
          name="otp"
          onChange={handleChange}
          required
        />
        </form>
      </div>
    );
  } 

  return null; // Default case
};


export default Registration;