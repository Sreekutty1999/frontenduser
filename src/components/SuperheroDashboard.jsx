import { useEffect, useState } from "react";
import axios from "axios";

function SuperheroDashboard() {
  const [grievances, setGrievances] = useState([]);

  const containerStyle = {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
    textAlign: "center",
  };

  const listItemStyle = {
    backgroundColor: "#f9f9f9",
    padding: "15px",
    marginBottom: "10px",
    borderRadius: "5px",
    textAlign: "left",
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/get-grievances")
      .then((response) => setGrievances(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div style={containerStyle}>
      <h1>Grievances Dashboard</h1>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {grievances.map((grievance) => (
          <li key={grievance._id} style={listItemStyle}>
            <strong>Name:</strong> {grievance.name}
            <br />
            <strong>Email:</strong> {grievance.email}
            <br />
            <strong>Description:</strong> {grievance.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SuperheroDashboard;
