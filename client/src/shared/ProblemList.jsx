import React, { useEffect, useState } from 'react';
import { api } from '../Api';
import ProblemItem from './ProblemItem';

export default function ProblemList({ topicId }){
  const [problems, setProblems] = useState([]);
  const [completedSet, setCompletedSet] = useState(new Set());

  useEffect(()=> {
    if(!topicId) return;
    api.get(`/topics/${topicId}/problems`).then(r=>setProblems(r.data)).catch(()=>setProblems([]));
    api.get('/progress/user').then(r=> setCompletedSet(new Set(r.data)) ).catch(()=>setCompletedSet(new Set()));
  }, [topicId]);

  const handleToggle = (id, checked) => {
    api.post('/progress/toggle', { problemId: id, completed: checked })
      .then(()=> {
        setCompletedSet(prev => {
          const copy = new Set(prev);
          if(checked) copy.add(id); else copy.delete(id);
          return copy;
        });
      }).catch(err => {
        alert('Could not save progress');
      });
  };

  return (
    <div>
      {problems.map(p => (
        <ProblemItem key={p._id} problem={p} completed={completedSet.has(p._id)} onToggle={handleToggle} />
      ))}
    </div>
  );
}
