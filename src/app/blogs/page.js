'use client'
import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useSelector, useDispatch } from 'react-redux';
import { CldImage } from 'next-cloudinary';
import { Pagination } from '@mui/material';
import { SEND } from '@/store';
// 
const Loader = dynamic(() => import('@/components/loading'), {ssr:false})
const BlogContent = dynamic(() => import('@/components/home/blogContent'), {ssr:false, loading:()=><Loader />})
// 
export default () =>
{
    const { blogList, blogContentID } = useSelector((state) => state.models);
    // 
    const dispatch = useDispatch()
    // 
    useEffect(()=>{
        if(blogContentID) return;
        // dispatch.models.SET({
        //     blogContentID:''
        // })
        // if(blogList) return;
        SEND('blog/list', {page: 1})
    },[])
    // 
    if(blogContentID) return <BlogContent />
    // 
    return <div className='py-12 px-2'>
        <div className='xl:w-[1400px] m-auto'>
            <div className='flex flex-col gap-5'>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                    {blogList&&blogList[1].map((v,k)=>(
                        <div key={k} 
                            className="grid grid-cols-12 cursor-pointer rounded shadow"
                            onClick={()=>dispatch.models.SET({
                                blogContentID: v[0],
                                blogTitle: v[1],
                                blogImage: v[2]
                            })}
                        >
                            <div className="col-span-5 bg-black h-32">
                            {/* <CldImage width="0" height="0" src={'public_api/'+v[2]+'.png'} alt={v[2]} sizes='100vw' className='size-full' />  */}
                                <CldImage width="0" height="0" src={`https://res.cloudinary.com/ddv2aeipa/image/upload/v1719214653/${v[2]}`}  alt={v[2]} sizes='100vw' className='size-full' /> 
                            </div>
                            <div className="col-span-7 p-3 bg-white">
                                <h3 className="font-bold text-lg">{v[1]}</h3>
                                <div className='flex flex-wrap gap-1 mt-3'>
                                    {JSON.parse(v[3]).map((v,k)=>(
                                        <div key={k} className='text-xs'>
                                            <span className='text-slate-600 rounded shadow px-3 py-1 cursor-pointer'>{v}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            
                        </div>
                    ))}
                </div>
                {blogList&&<Pagination 
                    className='flex justify-center'
                    current={blogList&&blogList[0][0] || 1} 
                    count={blogList&&blogList[0][2]} 
                    onChange={(event, value) => {
                        if((blogList&&blogList[0] ||1)==value) return
                        SEND('blog/list', {page: value})
                    }}
                />}
            </div>
        </div>
    </div>
}