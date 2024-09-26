"use client"; 
import { useEffect } from 'react';
import { redirect } from 'next/navigation'
// 
export default () => 
{
  useEffect(()=>{
    redirect('/home')
  },[]) 
  //   
  return <main></main>
}