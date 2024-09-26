'use client'
import { useEffect } from 'react';
import dynamic from 'next/dynamic'
import { OutlinedInput, InputAdornment, Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import LoadingButton from '@mui/lab/LoadingButton';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form"
import { SEND } from '@/store';
import { CldImage } from 'next-cloudinary';
// 
const Loader = dynamic(() => import('@/components/loading'), {ssr:false});
const Table = dynamic(() => import('@/components/table'), {ssr:false, loading:()=><Loader />})
const AddBlog = dynamic(() => import('@/components/forms/add/blog'), {ssr:false, loading:()=><Loader />})
const EditBlog = dynamic(() => import('@/components/forms/edit/blog'), {ssr:false, loading:()=><Loader />})
// 
export default () =>
{
    const { blogList, blogReloadList, blogListLoading } = useSelector((state) => state.models);
    const dispatch = useDispatch()
    // 
    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = (data) => {
        dispatch.models.SET({
            blogListLoading: true
        })
        SEND('blog/list', data)
    }
    //
    const columns = [
        [ 'ID' ],
        [ 'Title' ],
        // [ 'Content' ],
        // [ 'Image', v => <CldImage width="0" height="0" src={'public_api/'+v[2]+'.png'} sizes="100vw" alt={v[2]} className='h-auto w-8 m-auto' /> ] , 
        [ 'Image', v => <CldImage width="0" height="0" src={`https://res.cloudinary.com/ddv2aeipa/image/upload/v1719214653/${v[2]}`} sizes="100vw" alt={v[2]} className='h-auto w-16 m-auto' /> ] ,
        [ 'Delete' , v=> <FontAwesomeIcon icon={faTrashCan} color='#E32636'  className='cursor-pointer' onClick={()=>SEND('blog/del', {id:v[0], title:v[1] })} />],
        [ 'Edit' , v=> <FontAwesomeIcon icon={faPenToSquare} className='cursor-pointer' onClick={()=>dispatch.models.SET({M:{c:<EditBlog data={v} /> }})} />]
    ];
    // 
    const searches = [
        [columns[1][0], 'col-span-4'], 
        // [columns[2][0], 'col-span-4'], 
    ]
    // 
    const getD = (v) => 
    {
        dispatch.models.SET({
            blogListLoading: true
        })
        SEND('blog/list', v)
    }
    useEffect(() => getD(), []);
    // 
    useEffect(() => 
    {
        if(!blogReloadList) return;
        getD()
        dispatch.models.SET({ blogReloadList: '' });
    }, [blogReloadList]);
    // 
    return <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col gap-3'>
            <div className='flex justify-between'>
                <div className='grid grid-cols-12 gap-3 items-center'>
                    {searches.map((v,k)=>(
                        <div key={k} className={v[1]}>
                            <OutlinedInput
                                style={{paddingRight:0}}
                                fullWidth
                                size="small"
                                {...register(v[0])}
                                startAdornment={ 
                                    <InputAdornment className='mr-1' position="start">
                                        {v[0]}
                                    </InputAdornment>
                                }
                            />
                        </div>
                    ))}
                    <div className='col-span-2'>
                        <LoadingButton 
                            fullWidth
                            loading={blogListLoading}
                            variant="contained" 
                            type="submit"
                        >
                            Search
                        </LoadingButton>
                    </div>
                </div>

                <div className='justify-end flex gap-1'>
                    <Button 
                        variant="contained" 
                        onClick={()=>dispatch.models.SET({M:{c:<AddBlog />}})}
                    >
                        Create
                    </Button>
                </div>
            </div>
            
            <Table 
                columns={columns} 
                data={ blogList&&[
                    [blogList[0]||1,500, blogList[0][2]],
                    blogList[1]
                ]||[] }
                pageChange={getD}
            />

        </div>
    </form>
}