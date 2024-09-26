import { useEffect } from 'react';
import { redirect } from 'next/navigation'
// 
import { useSelector, useDispatch } from 'react-redux';
// 
export default ({ children }) => 
{
    const Auth = useSelector((state) => state.auths);
    const dispatch = useDispatch();
    // 
    if (!Object.keys(Auth).length == 0) return children; 
    // 
    useEffect(()=>{
        // if(Object.keys(Auth).length == 0 || Auth) return;
        // dispatch.models.SET({
        //     M:{c:"You are unauthorised to view this page"}
        // })
        redirect('/');
    },[]);
    //
    return <></>
};