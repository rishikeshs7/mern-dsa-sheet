import React from 'react';
import TopicList from './TopicList';

export default function ChapterList({ chapters }){
  return (
    <div>
      {chapters.map(c => (
        <div key={c._id} className="chapter">
          <h2>{c.title}</h2>
          <p style={{marginTop:6}}>{c.description}</p>
          <TopicList chapterId={c._id} />
        </div>
      ))}
    </div>
  );
}
