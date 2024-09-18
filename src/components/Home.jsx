import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons'; // Importing FontAwesome Power-off icon
import icon from '../assets/superhero-icon.png';

function Home() {
  const containerStyle = {
    display: "flex",
    flexDirection: "column", // Stack the header and the main content vertically
    backgroundColor: "#007BFF", // Blue background
    height: "100vh",
    color: "#fff",
  };

  const headerStyle = {
    display: "flex",
    justifyContent: "space-between", // Space between the icon-heading section and the navbar
    alignItems: "center",
    backgroundColor: "#0056b3", // Slightly darker blue for header
    padding: "10px 50px",
    position: "relative",
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

  const iconAndHeadingStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  };

  const superheroIconStyle = {
    width: "80px", // Adjust the size of the icon
  };

  const headingStyle = {
    marginTop: "10px", // Space below the icon
    fontSize: "24px",
    fontWeight: "bold",
    textAlign: "center",
    color: "#800000", // Maroon color for the heading
  };

  const contentStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexGrow: 1, // Ensures the content grows to fill the rest of the screen
    padding: "50px",
  };

  const textSectionStyle = {
    width: "40%",
    textAlign: "center",
  };

  const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: "#fff", // White button
    color: "#007BFF", // Blue text
    border: "none",
    borderRadius: "5px",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "bold",
    marginTop: "20px", // Adjust the position (lower the button slightly)
  };

  const imageContainerStyle = {
    display: "flex",
    justifyContent: "space-around", // Space between the two images
    alignItems: "center",
    width: "50%",
  };

  const imageStyle = {
    width: "300px", // Adjust the image size
    borderRadius: "50%", // Make the image rounded
    objectFit: "cover", // Prevent full image fit
  };

  const logoutButtonStyle = {
    padding: "10px 20px",
    backgroundColor: "#FF4136", // Red background for logout
    color: "#fff", // White text for logout button
    border: "none",
    borderRadius: "5px",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center", // Align icon and text
  };

  const iconStyle = {
    marginLeft: "8px", // Space between text and icon
  };

  return (
    <div style={containerStyle}>
      {/* Header */}
      <header style={headerStyle}>
        <div style={iconAndHeadingStyle}>
          <img
            src={icon} // Superhero icon
            alt="Superhero Icon"
            style={superheroIconStyle}
          />
          <h1 style={headingStyle}>Superhero Grievance</h1>
        </div>
        <nav style={navbarStyle}>
          <Link to="/" style={linkStyle}>Home</Link>
          <Link to="/about" style={linkStyle}>About</Link>
          <Link to="/grievance" style={linkStyle}>Grievance</Link>
          {/* Logout button with FontAwesome power-off icon */}
          <Link to="/signin" style={logoutButtonStyle}>
            Logout
            <FontAwesomeIcon icon={faPowerOff} style={iconStyle} />
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <div style={contentStyle}>
        <div style={textSectionStyle}>
          <h1>Welcome to the Superhero Grievance Website</h1>
          <p>Tell us your grievances, and our superhero will address them!</p>
          {/* Lowered the "Let's Go" button */}
          <Link to="/superhero-background" style={buttonStyle}>Let's Go</Link>
          </div>
        <div style={imageContainerStyle}>
          <img
            src="https://www.pngarts.com/files/3/Superhero-PNG-Free-Download.png"
            alt="Superhero 1"
            style={imageStyle}
          />
          <img
            src="https://webstockreview.net/images/battle-clipart-superhero-5.png"
            alt="Superhero 2"
            style={imageStyle}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
