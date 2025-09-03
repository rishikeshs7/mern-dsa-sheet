import React from "react";

const Navbar = ({ onSelect, onLogout }) => {
  return (
    <div style={{
      backgroundColor: "#007bff",
      color: "white",
      padding: "10px 20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontFamily: "'Segoe UI', sans-serif"
    }}>
      <div style={{ fontWeight: "bold", fontSize: "18px" }}>Dashboard</div>
      <div style={{ display: "flex", gap: "20px" }}>
        <button style={navButtonStyle} onClick={() => onSelect("profile")}>Profile</button>
        <button style={navButtonStyle} onClick={() => onSelect("topics")}>Topics</button>
        <button style={navButtonStyle} onClick={() => onSelect("progress")}>Progress</button>
        <button style={navButtonStyle} onClick={onLogout}>Logout</button>
      </div>
    </div>
  );
};

const navButtonStyle = {
  background: "none",
  border: "none",
  color: "white",
  fontSize: "16px",
  cursor: "pointer"
};

export default Navbar;
