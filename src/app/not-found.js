'use client'
import { useEffect } from 'react';
import { redirect } from 'next/navigation'
// 
export default ({ error, reset }) =>
{
   useEffect(()=>{
      redirect('/home');
  },[]);
  // 
  return <></>
}