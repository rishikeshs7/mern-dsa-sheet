import React from "react";

const Progress = ({ topics }) => {
  const total = topics.reduce((sum, topic) => sum + topic.problems.length, 0);
  const done = topics.reduce(
    (sum, topic) => sum + topic.problems.filter((p) => p.done).length,
    0
  );
  const percent = total === 0 ? 0 : Math.round((done / total) * 100);

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Your Progress</h2>
        <p style={styles.subtitle}>
          {done} of {total} problems completed
        </p>
        <div style={styles.progressBar}>
          <div style={{ ...styles.progressFill, width: `${percent}%` }}></div>
        </div>
        <p style={styles.percent}>{percent}% Completed</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "50px",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    width: "400px",
    padding: "30px 25px",
    borderRadius: "20px",
    backgroundColor: "#fff",
    boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
    textAlign: "center",
  },
  title: {
    marginBottom: "15px",
    color: "#333",
  },
  subtitle: {
    marginBottom: "20px",
    color: "#555",
  },
  progressBar: {
    width: "100%",
    height: "25px",
    backgroundColor: "#f0f0f0",
    borderRadius: "15px",
    overflow: "hidden",
    marginBottom: "10px",
  },
  progressFill: {
    height: "100%",
    background: "linear-gradient(to right, #6a11cb, #2575fc)",
    borderRadius: "15px 0 0 15px",
    transition: "width 0.5s ease-in-out",
  },
  percent: {
    fontWeight: "bold",
    color: "#333",
  },
};

export default Progress;
