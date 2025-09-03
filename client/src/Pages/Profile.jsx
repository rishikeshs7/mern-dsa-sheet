import React from "react";

const Profile = ({ user, onLogout }) => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.avatar}>
          <span role="img" aria-label="user" style={{ fontSize: "50px" }}>
            👤
          </span>
        </div>
        <h2 style={styles.name}>Welcome, {user.name} 🎉</h2>
        <p style={styles.email}>Email: {user.email}</p>
        <button style={styles.button} onClick={onLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(to right, #11998e, #38ef7d)",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    backgroundColor: "#fff",
    padding: "40px 30px",
    borderRadius: "20px",
    boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
    textAlign: "center",
    width: "350px",
    transition: "transform 0.3s",
  },
  avatar: {
    backgroundColor: "#f0f0f0",
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto 20px auto",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
  },
  name: {
    margin: "10px 0",
    color: "#333",
  },
  email: {
    color: "#555",
    marginBottom: "30px",
  },
  button: {
    padding: "12px 25px",
    borderRadius: "10px",
    border: "none",
    backgroundColor: "#11998e",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
    transition: "0.3s",
  },
};

export default Profile;
