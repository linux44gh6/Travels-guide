import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import StarRatings from 'react-star-ratings';
const Comment = ({review}) => {
    const {photoURL,displayName,rating,comment}=review
   const ret=parseFloat(rating)
    return (
        <div className='mb-10 mt-2'>
            <div className="flex items-center gap-5 ">
                <img className="rounded-full" src={photoURL} alt="" />
                <h1 className="text-xl font-semibold font-font-1">{displayName}</h1>
                <StarRatings rating={ret}
                starRatedColor='orange'
                starDimension="20px"
                starSpacing="1px"
                ></StarRatings>
            </div>
            <p className='translate-x-12 text-lg'>{comment}</p>
        </div>
    );
};

export default Comment;