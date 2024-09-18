import React from "react";
import { Link } from "react-router-dom";

function SuperheroPage() {
  const pageStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "100vh",
    width: "100vw",
    backgroundImage: "url('http://wallpapercave.com/wp/KPaLvzP.jpg')", 
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    color: "#fff",
    textAlign: "center",
    overflowY: "scroll",
    padding: "20px",
  };

  const headingStyle = {
    fontSize: "48px",
    fontWeight: "bold",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
    marginBottom: "20px",
  };

  const subHeadingStyle = {
    fontSize: "32px",
    fontWeight: "600",
    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.6)",
    marginTop: "10px",
  };

  const textStyle = {
    fontSize: "20px",
    marginTop: "20px",
    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.6)",
    lineHeight: "1.5",
    maxWidth: "800px", // Limit the width of the text for better readability
  };

  const listStyle = {
    marginTop: "30px",
    textAlign: "left",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
    padding: "20px",
    borderRadius: "10px",
  };

  const listItemStyle = {
    fontSize: "18px",
    marginBottom: "10px",
  };

  const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: "#fff", 
    color: "#007BFF", 
    border: "none",
    borderRadius: "5px",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "bold",
    marginTop: "40px",
  };

  return (
    <div style={pageStyle}>
      <h1 style={headingStyle}>Superhero Grievance Platform</h1>
      <h2 style={subHeadingStyle}>Your Heroes Are Ready to Help!</h2>
      <p style={textStyle}>
        Welcome to the Superhero Grievance Platform! Here, we connect you with your favorite superheroes
        to help address the challenges you face. Whether you're struggling with everyday problems or 
        need help with world-saving missions, our heroes are ready to step in.
      </p>

      <div style={listStyle}>
        <h3>What We Offer:</h3>
        <ul>
          <li style={listItemStyle}>🦸‍♂️ Superhero Assistance with Daily Grievances</li>
          <li style={listItemStyle}>⚡ Fast and Reliable Solutions to Urgent Problems</li>
          <li style={listItemStyle}>👨‍👩‍👧‍👦 Family Protection Plans with Superhero Backup</li>
          <li style={listItemStyle}>💼 Corporate and Business Security Services</li>
          <li style={listItemStyle}>🌍 Global Disaster Relief and Support</li>
        </ul>
      </div>

      <p style={textStyle}>
        Have a specific issue? Submit a grievance, and our heroes will review it as soon as possible. 
        Our platform ensures a personalized and immediate response to all requests, ensuring that no one 
        is left without help in times of need.
      </p>

      <Link to="/" style={buttonStyle}>Back to Home</Link>
    </div>
  );
}

export default SuperheroPage;
