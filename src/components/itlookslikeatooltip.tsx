import React from 'react';

export default function TopicCard({ title, subtext }) {
  return (

    <div className="border border-teal-400 rounded-lg p-4 bg-teal-50 text-teal-700 mb-5 " 
    style={{ border: '1px solid rgb(56, 178, 172, 0.5)' }}> 
      {title && <h3>{title}</h3>}

      {subtext}
    </div>

  );
}
