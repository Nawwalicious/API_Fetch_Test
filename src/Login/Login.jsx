import { AiOutlineGoogle } from "react-icons/ai";
import { ImAppleinc } from "react-icons/im";
import { FaFacebookF } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './Login.scss'
import axios from "axios";
import Error from "./Error";
import Success from "./Success";

function Login({ setIsAuthenticated,setUserDetails }) {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [didSubmit, setDidSubmit] = useState(false);
  const [apiData, setApiData] = useState([]);
  const [error, setError] = useState(null);
  const [success,setSuccess] = useState(null);
  const [stateReset,setStateReset]=useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    // Inside the useEffect hook to make the API request after component mount
    axios.get("https://api-render-tbyl.onrender.com/user")
      .then(function capturedData(response) {
        setApiData(response.data);})
      .catch(function handleError(err) {
        setError(err);});
  }, []); // Empty dependency array means this effect runs once after the initial render

  useEffect(() => {
    console.log(apiData);
  }, [apiData]);// This prints the fetched apiData from the server.

  function forcedFetch()
  {
      // Inside the useEffect hook to make the API request after component mount
      axios.get("https://api-render-tbyl.onrender.com/user")
        .then(function capturedData(response) {
          setApiData(response.data);})
        .catch(function handleError(err) {
          setError(err);});
  }

  function usernameHandler(e) {
    setUsername(e.target.value);
  }

  function passwordHandler(e) {
    setPassword(e.target.value);
  }

  function loginHandler() {
    console.log(`Username and Password are: ${Username} & ${Password}`);
    console.log(apiData);
    setDidSubmit(true);
    if (apiData[0].name === Username && apiData[0].password === Password) {
      setIsAuthenticated(true); // Set isAuthenticated to true after successful login
      setUserDetails(apiData);  //Api Data Is Passes to parent via prop setter function.
      setSuccess(true);
      navigate("/"); // Navigate to home page
    } else {
      setError(true);
    }
  }

  function messageHandler()
  {
    setError(null);
    setSuccess(null);
  }

  return (
    <div>
      {error && <Error/>} {/* Display error component if there's an error */}
      <div className="root-container">
        <div className="login-box">
          <div className="box-top">
            <span className="title">Login</span>
          </div>
          <div className="box-bottom">
            <div className="bottom-input-field">
              <input className="input-field" placeholder="Username" type="text" onClick={() => {messageHandler(); forcedFetch();}} onChange={(e) => {usernameHandler(e);}}></input>
              <input className="input-field" placeholder="Password" type="text" onClick={() => {messageHandler(); forcedFetch();}} onChange={(e) => {passwordHandler(e);}}></input>
              <button className="input-submit" type="submit" onClick={() => loginHandler()}>Login</button>
              <div className="signup-box">
                <p>Don't have an account?</p>
                <button className="input-submit" type="submit"> Sign Up </button>
              </div>
            </div>
            <div className="bottom-socials">
              <div className="icon-box">
                <a href="https://www.apple.com"><ImAppleinc className="icons" /></a>
                <a href="https://www.facebook.com"><FaFacebookF className="icons" /></a>
                <a href="https://www.google.com"><AiOutlineGoogle className="icons" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
