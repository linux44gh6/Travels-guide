import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import useAxiosSecure from './useAxiosSecure';

const UseBookings = () => {
    const {user}=useContext(AuthContext)
    const axiosSecure=useAxiosSecure()
   const {data:bookings=[],refetch}=useQuery({queryKey:['bookings',user?.emal],queryFn:async()=>{
        const res=await axiosSecure.get(`/allBookings/${user?.email}`)
        return res.data
   }})
   return [bookings,refetch]
};

export default UseBookings;