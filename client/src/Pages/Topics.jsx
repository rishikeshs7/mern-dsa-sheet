import React from "react";

const Topics = ({ topics, toggleOpen, toggleDone }) => (
  <div style={{ maxWidth: "900px", margin: "20px auto" }}>
    {topics.map((topic, tIdx) => (
      <div key={tIdx} style={{ marginTop: "20px" }}>
        <div
          onClick={() => toggleOpen(tIdx)}
          style={{
            backgroundColor: "#00bcd4",
            color: "white",
            padding: "10px 20px",
            borderRadius: "8px",
            cursor: "pointer",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span>{topic.name}</span>
          <span>{topic.open ? "▲" : "▼"}</span>
        </div>

        {topic.open && (
          <div style={{ backgroundColor: "#f0f0f0", padding: "15px", borderRadius: "8px", marginTop: "5px" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th style={{ textAlign: "left", padding: "8px" }}>Name</th>
                  <th style={{ textAlign: "left", padding: "8px" }}>LeetCode</th>
                  <th style={{ textAlign: "left", padding: "8px" }}>YouTube</th>
                  <th style={{ textAlign: "left", padding: "8px" }}>Article</th>
                  <th style={{ textAlign: "left", padding: "8px" }}>Level</th>
                  <th style={{ textAlign: "center", padding: "8px" }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {topic.problems.map((p, pIdx) => (
                  <tr key={pIdx} style={{ backgroundColor: p.done ? "#d4edda" : "transparent" }}>
                    <td style={{ padding: "8px" }}>{p.name}</td>
                    <td style={{ padding: "8px" }}><a href={p.leetcode} target="_blank" rel="noreferrer">Practise</a></td>
                    <td style={{ padding: "8px" }}><a href={p.youtube} target="_blank" rel="noreferrer">Watch</a></td>
                    <td style={{ padding: "8px" }}><a href={p.article} target="_blank" rel="noreferrer">Read</a></td>
                    <td style={{ padding: "8px", fontWeight: "bold" }}>{p.level.toUpperCase()}</td>
                    <td style={{ padding: "8px", textAlign: "center" }}>
                      <input type="checkbox" checked={p.done} onChange={() => toggleDone(tIdx, pIdx)} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    ))}
  </div>
);

export default Topics;
