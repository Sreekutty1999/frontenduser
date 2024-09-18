// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Assuming you're using React Router for navigation

// const SignupPage = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });

//   const [message, setMessage] = useState(''); // State to hold success or error message
//   const [messageType, setMessageType] = useState(''); // 'success' or 'error'

//   const navigate = useNavigate(); // Hook to navigate between routes

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const validateForm = () => {
//     const { email, password } = formData;
//     // Basic validation: check if all fields are filled
//     if (!email || !password) {
//       return false;
//     }
//     return true;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       setMessage('Login successful!');
//       setMessageType('success');
//       // Simulate an API call
//       try {
//         // Replace this with your actual API call logic
//         await new Promise((resolve) => setTimeout(resolve, 1000));
//         navigate('/'); // Redirect to the homepage
//       } catch (error) {
//         setMessage('Error during registration.');
//         setMessageType('error');
//       }
//     } else {
//       setMessage('Please fill in all fields.');
//       setMessageType('error');
//     }
//   };

//   const handleRegisterClick = () => {
//     navigate('/register'); // Redirect to the RegisterPage when clicked
//   };

//   // Inline styles
//   const containerStyle = {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     minHeight: '100vh', // Ensure full height of the viewport
//     width: '100vw', // Full width of the viewport
//     backgroundColor: '#f0f0f0', // Light gray background
//     padding: '20px', // Add some padding
//     boxSizing: 'border-box', // Ensure padding doesn't affect the container size
//   };

//   const boxStyle = {
//     backgroundColor: 'white',
//     padding: '30px',
//     borderRadius: '10px',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//     maxWidth: '400px',
//     width: '100%',
//     margin: '0 auto', // Center horizontally
//   };

//   const formGroupStyle = {
//     marginBottom: '15px',
//   };

//   const labelStyle = {
//     display: 'block',
//     fontSize: '14px',
//     color: '#555',
//     marginBottom: '5px',
//   };

//   const inputStyle = {
//     width: '100%',
//     padding: '10px',
//     border: '1px solid #ddd',
//     borderRadius: '5px',
//     backgroundColor: '#dcdcdc', // Ash/Light gray background for input
//     color: '#000', // Black text inside input
//   };
  

//   const buttonStyle = {
//     width: '100%',
//     backgroundColor: '#28a745',
//     color: 'white',
//     border: 'none',
//     padding: '10px',
//     borderRadius: '5px',
//     cursor: 'pointer',
//   };

//   const messageStyle = (type) => ({
//     color: type === 'success' ? 'green' : 'red',
//     textAlign: 'center',
//     marginBottom: '15px',
//   });

//   const registerTextStyle = {
//     textAlign: 'center',
//     marginTop: '20px',
//   };

//   const registerButtonStyle = {
//     background: 'none',
//     border: 'none',
//     color: '#007bff',
//     cursor: 'pointer',
//     textDecoration: 'underline',
//     padding: '0',
//   };

//   return (
//     <div style={containerStyle}>
//       <div style={boxStyle}>
//         <h2 style={{ textAlign: 'center', color: 'red' }}>Sign in Your Account</h2>
        
//         {/* Display success or error message */}
//         {message && <p style={messageStyle(messageType)}>{message}</p>}

//         <form onSubmit={handleSubmit}>
  
//           <div style={formGroupStyle}>
//             <label htmlFor="email" style={labelStyle}>Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               style={inputStyle}
//             />
//           </div>
//           <div style={formGroupStyle}>
//             <label htmlFor="password" style={labelStyle}>Password</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//               style={inputStyle}
//             />
//           </div>
//           <button type="submit" style={buttonStyle}>Sign Up</button>
//         </form>

//         {/* Register Section */}
//         <div style={registerTextStyle}>
//           <p style={{ color: 'black' }}>Don't have an account?</p>
//           <button onClick={handleRegisterClick} style={registerButtonStyle}>
//             Register
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignupPage;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Assuming you're using axios for API calls

const SignupPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [message, setMessage] = useState(''); // State to hold success or error message
  const [messageType, setMessageType] = useState(''); // 'success' or 'error'

  const navigate = useNavigate(); // Hook to navigate between routes

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const { email, password } = formData;
    // Basic validation: check if all fields are filled
    if (!email || !password) {
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        // API call to check if the user is already registered
        const response = await axios.post('http://localhost:3000/api/login', formData); // Replace with your actual API

        if (response.data.isRegistered) {
          // If the user is found, log them in
          setMessage('Login successful!');
          setMessageType('success');
          setTimeout(() => {
            navigate('/'); // Redirect to the homepage after login
          }, 1000);
        } else {
          // If the user is not found, show error message
          setMessage('User not registered. Please sign up.');
          setMessageType('error');
        }
      } catch (error) {
        setMessage('Error during login. Please try again.');
        setMessageType('error');
      }
    } else {
      setMessage('Please fill in all fields.');
      setMessageType('error');
    }
  };

  const handleRegisterClick = () => {
    navigate('/register'); // Redirect to the RegisterPage when clicked
  };

  // Inline styles
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh', // Ensure full height of the viewport
    width: '100vw', // Full width of the viewport
    backgroundColor: '#f0f0f0', // Light gray background
    padding: '20px', // Add some padding
    boxSizing: 'border-box', // Ensure padding doesn't affect the container size
  };

  const boxStyle = {
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    width: '100%',
    margin: '0 auto', // Center horizontally
  };

  const formGroupStyle = {
    marginBottom: '15px',
  };

  const labelStyle = {
    display: 'block',
    fontSize: '14px',
    color: '#555',
    marginBottom: '5px',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    backgroundColor: '#dcdcdc', // Ash/Light gray background for input
    color: '#000', // Black text inside input
  };

  const buttonStyle = {
    width: '100%',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    padding: '10px',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const messageStyle = (type) => ({
    color: type === 'success' ? 'green' : 'red',
    textAlign: 'center',
    marginBottom: '15px',
  });

  const registerTextStyle = {
    textAlign: 'center',
    marginTop: '20px',
  };

  const registerButtonStyle = {
    background: 'none',
    border: 'none',
    color: '#007bff',
    cursor: 'pointer',
    textDecoration: 'underline',
    padding: '0',
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <h2 style={{ textAlign: 'center', color: 'red' }}>Sign in Your Account</h2>

        {/* Display success or error message */}
        {message && <p style={messageStyle(messageType)}>{message}</p>}

        <form onSubmit={handleSubmit}>

          <div style={formGroupStyle}>
            <label htmlFor="email" style={labelStyle}>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>
          <div style={formGroupStyle}>
            <label htmlFor="password" style={labelStyle}>Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>
          <button type="submit" style={buttonStyle}>Sign In</button>
        </form>

        {/* Register Section */}
        <div style={registerTextStyle}>
          <p style={{ color: 'black' }}>Don't have an account?</p>
          <button onClick={handleRegisterClick} style={registerButtonStyle}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
