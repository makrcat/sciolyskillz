import React from 'react';

interface TopicCardProps {
  title: string,
  subtext: string
}
export default function TopicCard({ title, subtext }:TopicCardProps) {
  return (

    <div className="rounded-lg p-4 bg-slate-100 text-slate-700 mb-5 shadow-sm" 
    style={{ border: '1px solid oklch(70.4% 0.04 256.788)' }}> 
      {title && <h3>{title}</h3>}

      {subtext}
    </div>

  );
}
