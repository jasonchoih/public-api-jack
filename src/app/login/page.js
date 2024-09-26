'use client'
// 
import { useEffect } from 'react';
import { redirect } from 'next/navigation'
import { TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from "react-hook-form";
import { SEND } from '@/store';
// 
export default () =>
{
    const { AuthLoading, Auth, AuthDel } = useSelector((state) => state.models);
    const Auths = useSelector((state) => state.auths);
    // 
    if (!Object.keys(Auths).length == 0) {
        redirect('/admin/api');
    }
    // 
    const dispatch = useDispatch();
    // 
    const { register, handleSubmit, formState: { errors } } = useForm();
    // 
    const onSubmit = (data) => 
    {
        dispatch.models.SET({
            AuthLoading: true
        })
        SEND('auth/login', data)
    }
    // 
    useEffect(()=>{
        if(!Auth) return;
        dispatch.auths.SET({ ...Auth });
    },[Auth])
    // 
    return <div className='size-full fixed'>
        <form onSubmit={handleSubmit(onSubmit)} className='size-full flex items-center justify-center'>
            <div className="flex flex-col gap-3 items-center">
                <div>
                    <img src='/static/images/home/logo.svg' className="h-[65px]" />
                    <h2 className='font-bold'>Public API</h2>
                </div>
                <TextField  
                    {...register('account', {required:true})}
                    error={errors.account}
                    size='small'
                    id="outlined-required"
                    label="Account"
                />
                <TextField
                    {...register('pass', {required:true})}
                    error={errors.pass}
                    id="outlined-password-input"
                    size='small'
                    label="Password"
                    type="password"
                />
                <LoadingButton 
                    type='submit'
                    loading={AuthLoading}
                    variant='contained'
                >
                    Login
                </LoadingButton>
            </div>
        </form>
    </div>
}