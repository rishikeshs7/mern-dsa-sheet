import React, { useEffect, useState } from 'react';
import { api } from '../Api';
import ProblemList from './ProblemList';

export default function TopicList({ chapterId }){
  const [topics, setTopics] = useState([]);
  useEffect(()=> {
    if(!chapterId) return;
    api.get(`/chapters/${chapterId}/topics`).then(r=>setTopics(r.data)).catch(()=>setTopics([]));
  }, [chapterId]);

  return (
    <div>
      {topics.map(t => (
        <div key={t._id} className="topic">
          <h3>{t.title}</h3>
          <p style={{fontSize:13}}>{t.description}</p>
          <ProblemList topicId={t._id} />
        </div>
      ))}
    </div>
  );
}
