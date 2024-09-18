// import { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
// import icon from '../assets/superhero-icon.png'; // Replace with your icon path

// function GrievanceForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     description: "",
//   });

//   const [message, setMessage] = useState(""); // State for feedback message
//   const [messageType, setMessageType] = useState(""); // State for message type (success or error)

//   useEffect(() => {
//     // Dynamically load Tawk.to script
//     const script = document.createElement('script');
//     script.src = 'https://embed.tawk.to/YOUR_TAWKTO_ID/default'; // Replace with your Tawk.to ID
//     script.async = true;
//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script); // Cleanup the script on component unmount
//     };
//   }, []);

//   const containerStyle = {
//     display: "flex",
//     flexDirection: "column",
//     backgroundColor: "#007BFF", // Blue background like Home
//     minHeight: "100vh",
//     color: "#fff",
//   };

//   const headerStyle = {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     backgroundColor: "#0056b3",
//     padding: "15px 50px",
//     boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
//   };

//   const logoStyle = {
//     display: "flex",
//     alignItems: "center",
//   };

//   const logoImageStyle = {
//     width: "70px",
//     marginRight: "10px",
//   };

//   const headingStyle = {
//     marginTop: "10px",
//     fontSize: "24px",
//     fontWeight: "bold",
//     textAlign: "center",
//     color: "#800000",
//   };

//   const navbarStyle = {
//     display: "flex",
//     alignItems: "center",
//   };

//   const linkStyle = {
//     color: "#fff",
//     textDecoration: "none",
//     margin: "0 20px",
//     fontSize: "18px",
//     fontWeight: "bold",
//   };

//   const formContainerStyle = {
//     maxWidth: "500px",
//     margin: "0 auto",
//     padding: "20px",
//     textAlign: "center",
//     backgroundColor: "#f8f9fa",
//     borderRadius: "10px",
//     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//   };

//   const inputStyle = {
//     width: "100%",
//     padding: "10px",
//     margin: "10px 0",
//     borderRadius: "5px",
//     border: "1px solid #ccc",
//     backgroundColor: "#fff",
//     color: "#6c757d",
//     boxSizing: "border-box",
//   };

//   const buttonStyle = {
//     padding: "10px 20px",
//     backgroundColor: "#007BFF",
//     color: "#fff",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//   };

//   const logoutButtonStyle = {
//     color: "#fff",
//     backgroundColor: "#FFA500", // Orange color
//     padding: "10px 20px",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//   };

//   const imageSectionStyle = {
//     width: "35%",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: "20px",
//   };

//   const imageStyle = {
//     width: "70%",
//     borderRadius: "10px",
//   };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   try {
//   //     await axios.post("http://localhost:8080/submit-grievance", formData);
//   //     setMessage("Grievance submitted successfully!");
//   //     setMessageType("success"); // Set message type to success
//   //   } catch (error) {
//   //     console.error("Error submitting grievance:", error.response?.data || error.message);
//   //     setMessage("There was an error submitting your grievance. Please try again.");
//   //     setMessageType("error"); // Set message type to error
//   //   }
//   // };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
    
//     try {
//       const response = await fetch('http://localhost:8080/grievance', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });
  
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
  
//       const data = await response.json();
//       console.log('Grievance submitted:', data);
//       setMessage("Grievance submitted successfully!");
//       setMessageType("success");
//     } catch (error) {
//       console.error('Error submitting grievance:', error);
//       setMessage("There was an error submitting your grievance. Please try again.");
//       setMessageType("error");
//     }
//   };
  
  

//   const messageStyle = {
//     color: messageType === "success" ? "green" : "red", // Green for success, red for error
//     marginTop: "20px",
//   };

//   return (
//     <div style={containerStyle}>
//       {/* Header Section */}
//       <header style={headerStyle}>
//         <div style={logoStyle}>
//           <img
//             src={icon} // Superhero icon
//             alt="Superhero Icon"
//             style={logoImageStyle}
//           />
//           <h1 style={headingStyle}>Superhero Grievance</h1>
//         </div>
//         <nav style={navbarStyle}>
//           <Link to="/" style={linkStyle}>Home</Link>
//           <Link to="/about" style={linkStyle}>About</Link>
//           <Link to="/grievance" style={linkStyle}>Grievance</Link>
//           <Link to="/signin" style={linkStyle}>
//             <button style={logoutButtonStyle}>
//               <FontAwesomeIcon icon={faPowerOff} style={{ marginRight: "8px" }} />
//               Logout
//             </button>
//           </Link>
//         </nav>
//       </header>

//       {/* Main Content Section */}
//       <div style={{ display: "flex", flexDirection: "row", padding: "50px" }}>
//         {/* Form Section */}
//         <div style={{ flex: "1" }}>
//           <div style={formContainerStyle}>
//             <h1 style={{ color: "black" }}>Submit Your Grievance</h1>
//             <form onSubmit={handleSubmit}>
//               <input
//                 type="text"
//                 placeholder="Name"
//                 required
//                 value={formData.name}
//                 onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                 style={inputStyle}
//               />
//               <input
//                 type="email"
//                 placeholder="Email"
//                 required
//                 value={formData.email}
//                 onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                 style={inputStyle}
//               />
//               <textarea
//                 placeholder="Describe your issue"
//                 required
//                 value={formData.description}
//                 onChange={(e) => setFormData({ ...formData, description: e.target.value })}
//                 style={{ ...inputStyle, height: "150px", resize: "vertical" }}
//               />
//               <button type="submit" style={buttonStyle}>
//                 Submit
//               </button>
//             </form>
//             {message && <p style={messageStyle}>{message}</p>} {/* Display feedback message */}
//           </div>
//         </div>

//         {/* Right Image Section */}
//         <div style={imageSectionStyle}>
//           <img
//             src="https://webstockreview.net/images/clipart-fruit-superhero-5.png"
//             alt="Superhero"
//             style={imageStyle}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default GrievanceForm;

import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import icon from '../assets/superhero-icon.png'; // Replace with your icon path

function GrievanceForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });

  const [message, setMessage] = useState(""); // State for feedback message
  const [messageType, setMessageType] = useState(""); // State for message type (success or error)

  useEffect(() => {
    // Dynamically load Tawk.to script
    const script = document.createElement('script');
    script.src = 'https://embed.tawk.to/YOUR_TAWKTO_ID/default'; // Replace with your Tawk.to ID
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Cleanup the script on component unmount
    };
  }, []);

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#007BFF", // Blue background like Home
    minHeight: "100vh",
    color: "#fff",
  };

  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#0056b3",
    padding: "15px 50px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
  };

  const logoStyle = {
    display: "flex",
    alignItems: "center",
  };

  const logoImageStyle = {
    width: "70px",
    marginRight: "10px",
  };

  const headingStyle = {
    marginTop: "10px",
    fontSize: "24px",
    fontWeight: "bold",
    textAlign: "center",
    color: "#800000",
  };

  const navbarStyle = {
    display: "flex",
    alignItems: "center",
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    margin: "0 20px",
    fontSize: "18px",
    fontWeight: "bold",
  };

  const formContainerStyle = {
    maxWidth: "500px",
    margin: "0 auto",
    padding: "20px",
    textAlign: "center",
    backgroundColor: "#f8f9fa",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px",
    border: "1px solid #ccc",
    backgroundColor: "#fff",
    color: "#6c757d",
    boxSizing: "border-box",
  };

  const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  const logoutButtonStyle = {
    color: "#fff",
    backgroundColor: "#FFA500", // Orange color
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  const imageSectionStyle = {
    width: "35%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px",
  };

  const imageStyle = {
    width: "70%",
    borderRadius: "10px",
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await fetch('http://localhost:8080/grievance/submit', { // Updated URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      console.log('Grievance submitted:', data);
      setMessage("Grievance submitted successfully!");
      setMessageType("success");
    } catch (error) {
      console.error('Error submitting grievance:', error);
      setMessage("There was an error submitting your grievance. Please try again.");
      setMessageType("error");
    }
  };
  

  const messageStyle = {
    color: messageType === "success" ? "green" : "red", // Green for success, red for error
    marginTop: "20px",
  };

  return (
    <div style={containerStyle}>
      {/* Header Section */}
      <header style={headerStyle}>
        <div style={logoStyle}>
          <img
            src={icon} // Superhero icon
            alt="Superhero Icon"
            style={logoImageStyle}
          />
          <h1 style={headingStyle}>Superhero Grievance</h1>
        </div>
        <nav style={navbarStyle}>
          <Link to="/" style={linkStyle}>Home</Link>
          <Link to="/about" style={linkStyle}>About</Link>
          <Link to="/grievance" style={linkStyle}>Grievance</Link>
          <Link to="/signin" style={linkStyle}>
            <button style={logoutButtonStyle}>
              <FontAwesomeIcon icon={faPowerOff} style={{ marginRight: "8px" }} />
              Logout
            </button>
          </Link>
        </nav>
      </header>

      {/* Main Content Section */}
      <div style={{ display: "flex", flexDirection: "row", padding: "50px" }}>
        {/* Form Section */}
        <div style={{ flex: "1" }}>
          <div style={formContainerStyle}>
            <h1 style={{ color: "black" }}>Submit Your Grievance</h1>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                style={inputStyle}
              />
              <input
                type="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                style={inputStyle}
              />
              <textarea
                placeholder="Describe your issue"
                required
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                style={{ ...inputStyle, height: "150px", resize: "vertical" }}
              />
              <button type="submit" style={buttonStyle}>
                Submit
              </button>
            </form>
            {message && <p style={messageStyle}>{message}</p>} {/* Display feedback message */}
          </div>
        </div>

        {/* Right Image Section */}
        <div style={imageSectionStyle}>
          <img
            src="https://webstockreview.net/images/clipart-fruit-superhero-5.png"
            alt="Superhero"
            style={imageStyle}
          />
        </div>
      </div>
    </div>
  );
}

export default GrievanceForm;


