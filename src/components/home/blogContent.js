'use client'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SEND } from '@/store'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { CldImage } from 'next-cloudinary';
// 
import Loader from '@/components/loading'
// 
export default () =>
{
    const { blogContentID, blogContent, blogTitle, blogImage, blogContentLoading } = useSelector((state) => state.models);
    // 
    const dispatch = useDispatch();
    // 
    useEffect(()=>{
        dispatch.models.SET({
            blogContentLoading:true
        })
        SEND('blog/blog_content', { blog_id: blogContentID})
    },[])
    // 
    if(blogContentLoading) return <Loader />
    if(!blogContentID || !blogContent) return <></>
    // 
    return <div className='py-16 bg-white px-2'>
        <div className='xl:w-[1400px] m-auto'>
            <div 
                className='cursor-pointer hover:underline flex items-center gap-1 text-sm font-extralight mb-2'
                onClick={()=>dispatch.models.SET({blogContentID:'', blogContent:'', blogTitle:''})}
            >
                <FontAwesomeIcon size='xs' icon={faArrowLeft} />
                <div>Go Back</div>
            </div>
            <div className='flex flex-col gap-3 items-center mb-5'>
                <h2 className='flex justify-center text-4xl mb-5'>{blogTitle}</h2>
                <CldImage width="0" height="0" src={`https://res.cloudinary.com/ddv2aeipa/image/upload/v1719214653/${blogImage}`}  alt={blogImage} sizes='100vw' className='h-auto w-[50%]' /> 
            </div>
            <div dangerouslySetInnerHTML={{__html:blogContent||''}} />
        </div>
    </div>
}