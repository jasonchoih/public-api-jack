'use client'
import dynamic from 'next/dynamic'
// 
const Category = dynamic(() => import('@/components/home/category'), {ssr:false})
// 
import { usePathname } from 'next/navigation'
// 
export default () =>
{
    const pathname = usePathname()
    if(pathname.split('/')[1]=='admin' || pathname.split('/')[1]=='login') return <></>
    // 
    const year = new Date().getFullYear()
    //
    return <footer className="border-t-2 py-5 bg-[#fafbfc] px-2">
        <div className="xl:w-[1400px] m-auto flex flex-col gap-10">
            <Category />
            <div>
                © Copyright 2014-{year}. All Rights Reserved.
            </div>
        </div>
    </footer>
}