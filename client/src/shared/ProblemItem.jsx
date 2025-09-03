import React from 'react';

export default function ProblemItem({ problem, completed, onToggle }){
  return (
    <div className="problem">
      <div>
        <div style={{display:'flex', alignItems:'center', gap:8}}>
          <strong>{problem.title}</strong>
          <span className={`chip difficulty-${problem.difficulty?.toLowerCase()||'easy'}`}>{problem.difficulty}</span>
        </div>
        <div style={{marginTop:6, fontSize:13}}>{problem.description}</div>
        <div style={{marginTop:6}}>
          {problem.links?.youtube && <a href={problem.links.youtube} target="_blank" rel="noreferrer">YouTube</a>}
          {problem.links?.leetcode && <a href={problem.links.leetcode} target="_blank" rel="noreferrer" style={{marginLeft:8}}>LeetCode</a>}
          {problem.links?.codeforces && <a href={problem.links.codeforces} target="_blank" rel="noreferrer" style={{marginLeft:8}}>Codeforces</a>}
          {problem.links?.article && <a href={problem.links.article} target="_blank" rel="noreferrer" style={{marginLeft:8}}>Article</a>}
        </div>
      </div>
      <div>
        <input type="checkbox" checked={!!completed} onChange={e => onToggle(problem._id, e.target.checked)} />
      </div>
    </div>
  );
}
