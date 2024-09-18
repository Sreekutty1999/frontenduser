// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Assuming you're using React Router for navigation

// const RegisterPage = () => {
//   const [formData, setFormData] = useState({
//     username: '',
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
//     const { username, email, password } = formData;
//     // Basic validation: check if all fields are filled
//     if (!username || !email || !password) {
//       return false;
//     }
//     return true;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       setMessage('Registration successful!');
//       setMessageType('success');
//       // Handle form submission logic here (e.g., send formData to backend)
//     } else {
//       setMessage('Please fill in all fields.');
//       setMessageType('error');
//     }
//   };

//   const handleSignInClick = () => {
//     navigate('/signin'); // Redirect to the sign-in page when clicked
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

//   const signInTextStyle = {
//     textAlign: 'center',
//     marginTop: '20px',
//   };

//   const signInButtonStyle = {
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
//         <h2 style={{ textAlign: 'center',color:'red' }}>Create an Account</h2>
        
//         {/* Display success or error message */}
//         {message && <p style={messageStyle(messageType)}>{message}</p>}

//         <form onSubmit={handleSubmit}>
//           <div style={formGroupStyle}>
//             <label htmlFor="username" style={labelStyle}>Username</label>
//             <input
//               type="text"
//               id="username"
//               name="username"
//               value={formData.username}
//               onChange={handleChange}
//               required
//               style={inputStyle}
//             />
//           </div>
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
//           <button type="submit" style={buttonStyle}>Register</button>
//         </form>

//         {/* Sign In Section */}
//         <div style={signInTextStyle}>
//           <p style={{ color: 'black' }}>Already have an account?</p>
//           <button onClick={handleSignInClick} style={signInButtonStyle}>
//             Sign In
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RegisterPage;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Input from './Input';
// import Message from './Message';
// import { signup } from '../services/api';

// const RegisterPage = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//   });

//   const [message, setMessage] = useState('');
//   const [messageType, setMessageType] = useState('');

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const validateForm = () => {
//     const { username, email, password } = formData;
//     return username && email && password;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       setMessage('Registration successful!');
//       setMessageType('success');
//       try {
//         await new Promise((resolve) => setTimeout(resolve, 1000));
//         navigate('/signin');
//       } catch (error) {
//         setMessage('Error during registration.');
//         setMessageType('error');
//       }
//     } else {
//       setMessage('Please fill in all fields.');
//       setMessageType('error');
//     }
//   };

//   return (
//     <div style={{
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       minHeight: '100vh',
//       width: '100vw',
//       backgroundColor: '#f0f0f0',
//       padding: '20px',
//       boxSizing: 'border-box',
//     }}>
//       <div style={{
//         backgroundColor: 'white',
//         padding: '30px',
//         borderRadius: '10px',
//         boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//         maxWidth: '400px',
//         width: '100%',
//         margin: '0 auto',
//       }}>
//         <h2 style={{ textAlign: 'center', color: 'red' }}>Create an Account</h2>
//         <Message message={message} type={messageType} />
//         <form onSubmit={handleSubmit}>
//           <Input id="username" name="username" value={formData.username} onChange={handleChange} placeholder="Username" required />
//           <Input id="email" name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Email" required />
//           <Input id="password" name="password" value={formData.password} onChange={handleChange} type="password" placeholder="Password" required />
//           <button type="submit" style={{
//             width: '100%',
//             backgroundColor: '#28a745',
//             color: 'white',
//             border: 'none',
//             padding: '10px',
//             borderRadius: '5px',
//             cursor: 'pointer',
//           }}>Register</button>
//         </form>
//         <div style={{ textAlign: 'center', marginTop: '20px' }}>
//           <p style={{ color: 'black' }}>Already have an account?</p>
//           <button onClick={() => navigate('/signin')} style={{
//             background: 'none',
//             border: 'none',
//             color: '#007bff',
//             cursor: 'pointer',
//             textDecoration: 'underline',
//             padding: '0',
//           }}>Sign In</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RegisterPage;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from './Input';
import Message from './Message';
import api from '../services/api'; // Import your Axios API instance

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const { username, email, password } = formData;
    return username && email && password;
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (validateForm()) {
  //     try {
  //       const response = await api.post('/signup', formData); // Replace with your actual signup endpoint
  //       if (response.status === 201) {
  //         setMessage('Registration successful!');
  //         setMessageType('success');
  //         await new Promise((resolve) => setTimeout(resolve, 1000));
  //         navigate('/signin');
  //       }
  //     } catch (error) {
  //       setMessage('Error during registration.');
  //       setMessageType('error');
  //     }
  //   } else {
  //     setMessage('Please fill in all fields.');
  //     setMessageType('error');
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await api.post('/signup', formData); // Correct backend URL
        if (response.status === 201) {
          setMessage('Registration successful!');
          setMessageType('success');
          await new Promise((resolve) => setTimeout(resolve, 1000));
          navigate('/signin');
        }
      } catch (error) {
        setMessage('Error during registration.');
        setMessageType('error');
      }
    } else {
      setMessage('Please fill in all fields.');
      setMessageType('error');
    }
  };
  

  return (
    <div style={styles.pageContainer}>
      <div style={styles.formContainer}>
        <h2 style={{ textAlign: 'center', color: 'red' }}>Create an Account</h2>
        <Message message={message} type={messageType} />
        <form onSubmit={handleSubmit}>
          <Input
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
            required
          />
          <Input
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="Email"
            required
          />
          <Input
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            type="password"
            placeholder="Password"
            required
          />
          <button type="submit" style={styles.button}>
            Register
          </button>
        </form>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <p style={{ color: 'black' }}>Already have an account?</p>
          <button
            onClick={() => navigate('/signin')}
            style={styles.linkButton}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    width: '100vw',
    backgroundColor: '#f0f0f0',
    padding: '20px',
    boxSizing: 'border-box',
  },
  formContainer: {
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    width: '100%',
    margin: '0 auto',
  },
  button: {
    width: '100%',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    padding: '10px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  linkButton: {
    background: 'none',
    border: 'none',
    color: '#007bff',
    cursor: 'pointer',
    textDecoration: 'underline',
    padding: '0',
  },
};

export default RegisterPage;
