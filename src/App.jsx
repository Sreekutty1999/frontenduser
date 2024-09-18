// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./components/Home";
// import About from "./components/About";
// import GrievanceForm from "./components/GrievanceForm";
// import SuperheroDashboard from "./components/SuperheroDashboard";
// import SignupPage from "./components/SignupPage";
// import RegisterPage from "./components/RegisterPage";
// import SuperheroPage from "./components/SuperheroPage";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/grievance" element={<GrievanceForm />} />
//         <Route path="/dashboard" element={<SuperheroDashboard />} />
//         <Route path="/signin" element={<SignupPage />} />
//         <Route path="/register" element={<RegisterPage />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import GrievanceForm from "./components/GrievanceForm";
import SuperheroDashboard from "./components/SuperheroDashboard";
import SignupPage from "./components/SignupPage";
import RegisterPage from "./components/RegisterPage";
import SuperheroPage from "./components/SuperheroPage"; // Import the SuperheroPage

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/grievance" element={<GrievanceForm />} />
        <Route path="/dashboard" element={<SuperheroDashboard />} />
        <Route path="/signin" element={<SignupPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/superhero-background" element={<SuperheroPage />} /> {/* New route for SuperheroPage */}
      </Routes>
    </Router>
  );
}

export default App;
