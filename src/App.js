import { useState } from "react";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import supabase from "./config/supabaseClient";

// Import your login and signup page components
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Stu_SignupPage from "./pages/Stu_SignupPage";
import Stu_LoginPage from "./pages/Stu_LoginPage";
// Import other pages
import Home from "./pages/All_researches";
import Home2 from "./pages/All_projects";
import Home3 from "./pages/Homepage";
import Home4 from "./pages/Stu_Homepage";
import Research from "./pages/Create_Research";
import Update from "./pages/Update_Research";
import Project from "./pages/Create_Project";
import LandingPage from "./pages/LandingPage";

function App() {
  const [Faculty_Profile, setFaculty_Profile] = useState(null);
  const [Student_Profile, setStudent_Profile] = useState(null);

  const handleLogin = async (email, password) => {
    try {
      const { data, error } = await supabase
        .from("Faculty_Profile")
        .select("*")
        .eq("Email", email)
        .eq("Password", password)
        .single();
      if (error) {
        console.error("Login error:", error.message);
        throw new Error("An error occurred during login.");
      }
      if (!data) {
        console.error("Invalid email or password.");
        throw new Error("Invalid email or password.");
      }
      setFaculty_Profile(data);
    } catch (error) {
      console.error("Login error:", error.message);
      throw new Error("An error occurred during login.");
    }
  };
  const handleStu_LoginPage = async (Email, Password) => {
    try {
      const { data, error } = await supabase
        .from("Student_Profile")
        .select("*")
        .eq("Email", Email)
        .eq("Password", Password)
        .single();
      if (error) {
        console.error("Login error:", error.message);
        throw new Error("An error occurred during login.");
      }
      if (!data) {
        console.error("Invalid email or password.");
        throw new Error("Invalid email or password.");
      }
      setStudent_Profile(data);
    } catch (error) {
      console.error("Login error:", error.message);
      throw new Error("An error occurred during login.");
    }
    
  };

  const handleSignup = async (Email, Password, Faculty_Name, Designation, School, Domain, Contact_Number, LinkedIn_ID) => {
    try {
      const { data, error } = await supabase
        .from("Faculty_Profile")
        .insert({ Email, Password, Faculty_Name, Designation, School, Domain, Contact_Number, LinkedIn_ID })
        .single();
      if (error) {
        console.error("Signup error:", error.message);
        throw new Error("An error occurred during signup.");
      }
      setFaculty_Profile(data);
    } catch (error) {
      console.error("Signup error:", error.message);
      throw new Error("An error occurred during signup.");
    }
  };
  const handleStu_SignupPage = async (Registration_Number,Student_Name,Email,Contact_Number,Skill_Sets,Technical_Languages
,Passing_Out_Year,Gender,Programme,School,Password,GitHub_ID,LinkedIn_ID) => {
    try {
      const { data, error } = await supabase
        .from("Student_Profile")
        .insert({Registration_Number,Student_Name,Email,Contact_Number,Skill_Sets,Technical_Languages
          ,Passing_Out_Year,Gender,Programme,School,Password,GitHub_ID,LinkedIn_ID })
        .single();
      if (error) {
        console.error("Signup error:", error.message);
        throw new Error("An error occurred during signup.");
      }
      setStudent_Profile(data);
    } catch (error) {
      console.error("Signup error:", error.message);
      throw new Error("An error occurred during signup.");
    }
  };


  return (
    <BrowserRouter>
<nav>
  <h1>VITalized</h1>
  {Faculty_Profile || Student_Profile ? (
    <>
      {Faculty_Profile && <Link to="/home3">Home</Link>}
      {Student_Profile && <Link to="/home4">Home</Link>}
      {Faculty_Profile && <Link to="/Research">List Researches</Link>}
      <Link to="/Project">List Project</Link>
      <Link to="/Home">All Research</Link>
      <Link to="/Home2">All Project</Link>
    </>
  ) : (
    <>
       <div className="login-box">
          <button onClick={() => window.location.href = '/login'}>Faculty Login</button>
          <button onClick={() => window.location.href = '/Stu_LoginPage'}>Student Login</button>
        </div>
    </>
  )}
</nav>



      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Research" element={<Research />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Home2" element={<Home2 />} />
        <Route path="/:id" element={<Update />} />
        <Route
          path="/login"
          element={<LoginPage onLogin={handleLogin} />}
        />
        <Route
          path="/Stu_LoginPage"
          element={<Stu_LoginPage onLogin={handleStu_LoginPage} />}
        />
        <Route
          path="/signup"
          element={<SignupPage onSignup={handleSignup} />}
        />
        <Route
          path="/stu_signupPage"
          element={<Stu_SignupPage onSignup={handleStu_SignupPage} />}  
        />
        <Route
          path="/home3"
          element={<Home3 Faculty_Profile={Faculty_Profile} />}
        />
        <Route
          path="/home4"
          element={<Home4 Student_Profile={Student_Profile} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;