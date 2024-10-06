"use client"
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowPointer, faFloppyDisk, faTag, faSquareCheck, faMoneyBill1, faChartLine } from "@fortawesome/free-solid-svg-icons";
import { CldImage } from 'next-cloudinary';
import { useEffect } from 'react';
import { SEND } from '@/store'
import { useRouter } from 'next/navigation'
// 
export default () =>
{
    const { showSubContent, relatedAPI, reladtedBlog, meta } = useSelector((state) => state.models);
    const { api_favourties } = useSelector((state) => state.apis);
    const dispatch = useDispatch();
    const router = useRouter()
    // 
    useEffect(()=>{
        if(!showSubContent) return;
        SEND('api/related', {api_id: id, tag, title})
        dispatch.models.SET({
            meta: title + ' - API - ' +  ' $' + price + ' ' + description 
            // [Tool Name] API - Pricing, Info & Related APIs
        })
    },[showSubContent])
    // 
    if(!showSubContent) return <></>
    const { id, title, img, category, type, description, tag, external } = showSubContent;
    const { plan, trial, price, calls } = showSubContent.specification;
    // 
    const addFavourites = (v) =>
    {
        let arr = api_favourties;
        if(api_favourties&&api_favourties.find((v=>v==id))) {
            const index = api_favourties.indexOf(id);
            arr.splice(index, 1);
            dispatch.apis.SET({
                api_favourties: arr
            })
            return;
        }
        // 
        dispatch.apis.SET({ 
            api_favourties: [ 
                ...api_favourties&&api_favourties,
                id 
            ]
        })
    }
    // 
    const buttons = [
        ['Use this API', <FontAwesomeIcon size='xs' icon={faArrowPointer} />, ()=>window.open(external, '_blank', 'noopener, noreferrer')],
        [api_favourties&&Object.keys(api_favourties).length!=0&&api_favourties.find((v=>v==id)) ? 'Favourited': 'Add to Favourites', <FontAwesomeIcon size='xs' icon={faFloppyDisk} style={api_favourties&&Object.keys(api_favourties).length!=0&&api_favourties.find((v=>v==id)) ? {color:'none'} : {}} />, ()=>addFavourites()]
    ]
    // 
    const specs = {
        'Plan': [plan, <FontAwesomeIcon size='xs' icon={faTag} />],
        'Trial': [trial, <FontAwesomeIcon size='xs' icon={faSquareCheck} />],
        'Starting Price': ['$'+price, <FontAwesomeIcon size='xs' icon={faMoneyBill1} />],
        'API Calls': [calls || 'Unlimited', <FontAwesomeIcon size='xs' icon={faChartLine} />]
    }
    // 
    return <div className='px-2'>
    <title>{meta}</title>
        <div className='grid grid-cols-1 xl:grid-cols-12 gap-5'>
            <div className='hidden xl:block xl:col-span-1'>
                {/* <img src={'/static/images/api/'+img+'.png'} /> */}
                <CldImage 
                    width="0" 
                    height="0" 
                    // src={'public_api/'+img+'.png'} 
                    src={`https://res.cloudinary.com/ddv2aeipa/image/upload/v1719214653/${img}`}
                    sizes="100vw" alt={img} 
                    className='h-auto w-full'
                />
            </div>
            <div className='xl:col-span-11 flex flex-col gap-3'>
                 <div 
                    className='cursor-pointer hover:underline flex items-center gap-1 text-sm font-extralight mb-2'
                    onClick={()=>dispatch.models.SET({showSubContent:''})}
                >
                    <FontAwesomeIcon size='xs' icon={faArrowLeft} />
                    <div>Go Back</div>
                </div>
                <h3 className='text-3xl font-bold'>{title}</h3>
                <div className='flex flex-col gap-2'>
                    {/* <div className='flex items-center gap-1'> */}
                        {/* <i className='fa fa-xs'>{String.fromCharCode(parseInt(type[1],16))}</i> */}
                        {/* <small>{type}</small> */}
                    {/* </div> */}
                    <div className='flex items-center gap-3 mb-1'>
                        {/* <i className='fa fa-xs'>{String.fromCharCode(parseInt(category[1],16))}</i> */}
                        {/* <small>{category}</small> */}
                        {/* <i className='fa fa-xs'>{String.fromCharCode(parseInt(apis[k]['type'][1],16))}</i> */}
                        {/* <p className='m-0'>{apis[k]['type'][0]}</p> */}
                        {JSON.parse(type).map((v,k)=>(
                            <div key={k} className='text-xs'>
                                {/* <p className='m-0 border px-1 cursor-pointer'>{v}</p> */}
                                <span className='bg-white rounded shadow px-3 py-1 cursor-pointer'>{v}</span>
                             </div>
                        ))}
                    </div>
                    <div className='flex flex-wrap items-center gap-3'>
                        {/* <i className='fa fa-xs'>{String.fromCharCode(parseInt(category[1],16))}</i> */}
                        {/* <small>{category}</small> */}
                        {/* <i className='fa fa-xs'>{String.fromCharCode(parseInt(apis[k]['type'][1],16))}</i> */}
                        {/* <p className='m-0'>{apis[k]['type'][0]}</p> */}
                        {JSON.parse(category).map((v,k)=>(
                            <div key={k} className='text-xs'>
                                <span className='bg-white rounded shadow px-3 py-1 cursor-pointer'>{v}</span>
                            </div>
                            // <p key={k} className='m-0 border px-1 cursor-pointer'>{v}</p>
                        ))}
                    </div>
                </div>
                <div>
                    {description}
                </div>
                <div className='flex items-center gap-2 mb-2'>
                    {buttons.map((v,k)=>(
                        <div 
                            key={k} 
                            className={'flex items-center gap-1 cursor-pointer p-1 px-2 '+(k==0?' bg-black text-white':' text-white bg-red-700')}
                            onClick={v[2]}
                        >
                            <div>{v[1]}</div>
                            <div>{v[0]}</div>
                        </div>
                    ))}
                </div>
                {tag&&<div>
                    <span className='bg-[#f2f2f2] px-2 py-1 shadow border-l-2 mb-2 border-black'>Official API Clients</span>
                    <div className='flex flex-wrap gap-1 mt-3'>
                        {JSON.parse(tag).map((v,k)=>(
                            <div key={k} className='text-xs'>
                                <span className='bg-white rounded shadow px-3 py-1 cursor-pointer'>{v}</span>
                            </div>
                        ))}
                    </div>
                </div>}
                <div className='mt-2'>
                    <span className='bg-[#f2f2f2] px-2 py-1 shadow border-l-2 mb-2 border-black'>API Specification</span>
                    <div className='mt-1'>
                        {Object.keys(specs).map(k=>(
                            <div key={k} className='flex gap-1'>
                                <div className='flex gap-1 items-center'>{specs[k][1]}{k}:</div>
                                <div>{specs[k][0]}</div>
                            </div>
                        ))}
                    </div>
                </div>
                
            </div>
        </div>

        <div className='py-10'>
            <div className='mb-2 text-sm'>
                <span className='bg-[#f2f2f2] px-2 py-1 shadow border-l-2 mb-2 border-black'>Explore More Related API's</span>
            </div>
            {relatedAPI&& relatedAPI.length==0 ? <>No Related API's found.</>:<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'> 
                {relatedAPI&&relatedAPI.map((v,k)=>(
                    <div 
                        key={v['id']} 
                        className='flex flex-col gap-4 rounded bg-white p-4 border cursor-pointer'
                        onClick={()=>dispatch.models.SET({showSubContent:v})}
                    >
                        <div className='flex items-center gap-4'>
                            <div>
                                <CldImage 
                                    width="0" 
                                    height="0" 
                                    // src={'public_api/'+apis[k]['img']+'.png'} 
                                    src={`https://res.cloudinary.com/ddv2aeipa/image/upload/v1719214653/${v['img']}`} 
                                    sizes="100vw" alt={v['img']} 
                                    className='h-auto w-8 m-auto' 
                                />
                            </div>
                            <div>
                                <h3 className='cursor-pointer text-xl font-bold hover:underline'>{v['title']}</h3>
                                <div className='flex flex-col gap-2'>
                                    <div className='flex gap-2'>
                                        {JSON.parse(v['type']).map((v,k)=>(
                                            <p key={k} className='m-0 border px-1 cursor-pointer rounded'>{v}</p>
                                        ))}
                                    </div>
                                    <div className='flex gap-1'>
                                        {JSON.parse(v['category']).length> 4 ? 
                                            JSON.parse(v['category']).slice(0,3).map((v,k)=>(
                                                <p
                                                    key={k} 
                                                    className='m-0 border px-1 cursor-pointer'
                                                    onClick={() => {
                                                        router.push('/'+v.toLowerCase().replace(/ /g, "_"));
                                                        dispatch.models.SET({onCategory:v})
                                                    }}
                                                >{v}1</p>
                                            ))
                                            :  JSON.parse(v['category']).map((v,k)=>(
                                            <p 
                                                key={k} 
                                                className='m-0 border px-1 cursor-pointer rounded'
                                                onClick={() => {
                                                    router.push('/'+v.toLowerCase().replace(/ /g, "_"));
                                                    dispatch.models.SET({onCategory:v})
                                                }}    
                                            >{v}</p>
                                        ))}
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className='text-sm'>
                            <p className='text-[#4e4e4e]'>
                                {v['description'].substring(0,85) + '...'}
                            </p>
                        </div>
                    </div>
                ))}
            </div>}
            
            {/* <div className='mt-10'>
                {reladtedBlog&&<div className='mb-2 text-sm'>
                    <span className='bg-[#f2f2f2] px-2 py-1 shadow border-l-2 mb-2 border-black'>Latest Posts</span>
                </div>}

                <div className="grid grid-cols-3 gap-5">
                    {reladtedBlog&&reladtedBlog.length==0 ?<>No Blog found.</> :
                    
                        reladtedBlog&&reladtedBlog.map((v,k)=>(
                            <Link 
                                key={k} 
                                href={'/blogs'} shallow
                                onClick={()=>dispatch.models.SET({
                                    blogContentID: v[0],
                                    blogTitle: v[1],
                                    blogImage: v[2]
                                })}
                            >
                                <div className="grid grid-cols-12 cursor-pointer rounded shadow overflow-hidden">
                                    <div className="col-span-5 bg-black h-32">
                                    <CldImage width="0" height="0" src={`https://res.cloudinary.com/ddv2aeipa/image/upload/v1719214653/${v[2]}`} alt={v[2]} sizes='100vw' className='size-full' /> 
                                    </div>
                                    <div className="col-span-7 px-3 py-2 bg-white">
                                        <h3 className="font-bold text-md">{v[1]}</h3>
                                        <div className='flex flex-wrap gap-1 mt-3'>
                                            {JSON.parse(v[3]).map((v,k)=>(
                                                <div key={k} className='text-xs'>
                                                    <span className='text-slate-600 rounded shadow px-3 py-1 cursor-pointer'>{v}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div> */}
        </div>
    </div>
}