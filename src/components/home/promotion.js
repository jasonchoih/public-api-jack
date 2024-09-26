'use client'
import { useSelector } from 'react-redux';
import { usePathname } from 'next/navigation'
// 
export default () =>
{
    const { showSubContent, _category } = useSelector((state) => state.models);
    // 
    const pathname = usePathname()
    if(pathname.split('/')[1]=='admin' || pathname.split('/')[1]=='login' || pathname.split('/')[1]=='learn') return <></>
    // 
    if(showSubContent || !_category) return <></>
    // 
    return <div className='pt-5'>
        <h3 className='text-center text-sm pb-5 cursor-pointer hover:underline'>🔥 WesBos Launch: A course for Gastby to become Master</h3>
    </div>
}