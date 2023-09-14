import React from 'react'

const Cart = ({ actor, handleSelectedActors }) => {
    let { name, country, image, role, salary } = actor;
    return (
        <div className='flex flex-col items-center justify-center space-y-3 border py-4 shadow-lg rounded-md'>
            <img className='w-[100px] rounded-full' src={image} alt="" />
            <p className='font-bold'>Name : {name}</p>
            <p>Role : {role}</p>
            <p>Country : {country}</p>
            <p className='font-bold'>Salary : {salary}</p>
            <button className='border px-3 py-1 rounded-md shadow-md shadow-gray-400' onClick={() => handleSelectedActors(actor)}>Select</button>
        </div>
    )
}

export default Cart
