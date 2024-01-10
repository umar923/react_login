import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  const styles = {
    main_div: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      margin: "auto",
      textAlign: "center",
      marginTop: 280,
    },

    inputContainer: {
      display: "flex",
      alignItems: "center",
      margin: "10px 0",
      borderRadius: 15,
      height: 25,
      backgroundColor: "lightgray",
      padding: 5,
    },

    inputUser: {
      border: "none",
      backgroundColor: "transparent",
      flex: 1,
      outline: "none",
    },

    inputPassword: {
      border: "none",
      backgroundColor: "transparent",
      flex: 1,
      outline: "none",
    },

    loginBtn: {
      width: "168px",
      margin: "10px 0",
      borderRadius: 15,
      height: 28,
      backgroundColor: "pink",
      cursor: "pointer",
      transition: "background-color 0.3s",
      fontSize: "16px",
    },

    icon: {
      color: "gray",
      margin: "0 5px 0 7px",
      fontSize: "13px",
    },

    forgotPassword: {
      color: "blue",
      cursor: "pointer",
      transition: "color 0.3s",
      marginTop: "10px",
    },

    signUpParagraph: {
      marginTop: "10px",
      color: "darkcyan", // Different color for the paragraph
      fontSize: "14px",
    },

    signUpLink: {
      color: "darkorchid", // Different color for the link
      cursor: "pointer",
      textDecoration: "none", // Remove underline
      transition: "color 0.3s",
    },
  };

  const handleLogin = () => {
    // Your login logic here
    console.log("Login button clicked!");
  };

  const handleForgotPassword = () => {
    // Handle logic for forgot password
    console.log("Forgot Password clicked!");
  };

  const handleSignUp = () => {
    // Handle logic for sign up
    console.log("Sign Up clicked!");
  };

  return (
    <>
      <div style={styles.main_div}>
        <div style={styles.inputContainer}>
          <FontAwesomeIcon style={styles.icon} icon={faUser} />
          <input
            style={styles.inputUser}
            type="text"
            id="username"
            name="username"
            placeholder="UserName"
            required
          />
        </div>

        <div style={styles.inputContainer}>
          <FontAwesomeIcon style={styles.icon} icon={faLock} />
          <input
            style={styles.inputPassword}
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required
          />
        </div>

        <button
          style={styles.loginBtn}
          type="submit"
          onClick={handleLogin}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "lightcoral")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "pink")}
        >
          Login
        </button>

        <div
          style={styles.forgotPassword}
          onClick={handleForgotPassword}
          onMouseEnter={(e) => (e.currentTarget.style.color = "darkblue")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "blue")}
        >
          Forgot Password?
        </div>

        <p style={styles.signUpParagraph}>
          Don't have an account?{' '}
          <a
            href="#"
            style={styles.signUpLink}
            onClick={handleSignUp}
            onMouseEnter={(e) => (e.currentTarget.style.color = "darkviolet")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "darkorchid")}
          >
            Sign Up
          </a>
        </p>
      </div>
    </>
  );
};

export default Login;
