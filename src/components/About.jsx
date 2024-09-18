import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import icon from '../assets/superhero-icon.png'; // Replace with your icon path

function About() {
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
    padding: "15px 50px", // Adjusted padding for consistency
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)", // Adds a bit of shadow for consistency
  };

  const logoStyle = {
    display: "flex",
    alignItems: "center",
  };

  const logoImageStyle = {
    width: "70px", // Smaller, consistent size
    marginRight: "10px", // Space between icon and heading
  };

  const headingStyle = {
    marginTop: "10px", // Space below the icon
    fontSize: "24px",
    fontWeight: "bold",
    textAlign: "center",
    color: "#800000", // Maroon color for the heading
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

  const contentStyle = {
    display: "flex",
    justifyContent: "space-between",
    padding: "50px",
    flexGrow: 1,
  };

  const textSectionStyle = {
    width: "60%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "left",
  };

  const cardContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "30px",
    gap: "20px", // Add gap between cards for consistent spacing
  };

  const cardStyle = {
    flex: "1",
    padding: "20px",
    backgroundColor: "#f8f9fa",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    color: "#000", // Ensure text is visible on light background
  };

  const imageSectionStyle = {
    width: "35%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const imageStyle = {
    width: "70%",
    borderRadius: "10px",
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
          {/* Logout button styled like Home.jsx */}
          <Link to="/signin" style={logoutButtonStyle}>
            Logout
            <FontAwesomeIcon icon={faPowerOff} style={iconStyle} />
          </Link>
        </nav>
      </header>

      {/* Main Content Section */}
      <div style={contentStyle}>
        {/* Left Text Section */}
        <div style={textSectionStyle}>
          <h1>About Our Superhero</h1>
          <p>
            <h4>
            Our superhero has been solving problems for over a decade, addressing
            various grievances and ensuring peace and harmony in the community.
            </h4>
          </p>

          {/* Cards Section */}
          <div style={cardContainerStyle}>
            <div style={cardStyle}>
              <h3>Grievance Background</h3>
              <p>
                Learn about how the superhero addresses grievances and solves
                complex problems with great efficiency.
              </p>
            </div>
            <div style={cardStyle}>
              <h3>How It Helps</h3>
              <p>
                The superhero listens to all problems and provides the best
                possible solution for the benefit of society.
              </p>
            </div>
            <div style={cardStyle}>
              <h3>What We Can Do</h3>
              <p>
                Submit your grievance and watch the superhero work towards
                providing a fast, effective solution.
              </p>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div style={imageSectionStyle}>
          <img
            src="https://webstockreview.net/images/clipart-fruit-superhero-5.png" // Update with your image
            alt="Superhero"
            style={imageStyle}
          />
        </div>
      </div>
    </div>
  );
}

export default About;
