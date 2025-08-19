'use client'
import React from 'react';

interface TopicCardProps {
  title: string,
  subtext: string,
  imageAddress: string | null
}
export default function TopicCard({ title, subtext, imageAddress = null }: TopicCardProps) {
  return (

    <div className="rounded-lg bg-slate-100 text-slate-700 mb-5 flex flex-row justify-between "
      style={{ border: '1px solid oklch(70.4% 0.04 256.788)' }}>

      <div className='p-4'>
        {title && <h3 className="font-semibold text-lg">{title}</h3>}
        {subtext}
      </div>


       {imageAddress &&
        <img src={imageAddress} alt={title} 
        className="h-[60px] opacity-50 m-2"/>
      }
    </div>

  );
}
