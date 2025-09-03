import React, { useEffect, useState } from 'react';
import { api } from '../Api';

export default function ProgressBar(){
  const [summary, setSummary] = useState({ total:0, completed:0, percent:0 });
  useEffect(()=> {
    api.get('/progress/summary').then(r=>setSummary(r.data)).catch(()=>{});
  }, []);
  return (
    <div style={{marginTop:12}}>
      <div>Progress: {summary.completed} / {summary.total} ({summary.percent}%)</div>
      <div className="progress-bar"><div className="progress-fill" style={{width: `${summary.percent}%`}}/></div>
    </div>
  );
}
