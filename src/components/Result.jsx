import React from 'react'

const Result = ({ selected,cost,exist }) => {
    return (
        <div className='w-[30%] text-center py-2 space-y-5 font-semibold'>
            <div className='border py-2 rounded-md shadow-md space-y-1'>
                <h3>Actors : {selected.length}</h3>
                <div>
                    {selected.map((actor, index) => <p key={index}>{`${index + 1}. ${actor.name}`}</p>)}
                </div>
            </div>
            <div className='border py-2 rounded-md shadow-md space-y-1 underline'>
                <p>Budget : 20000$</p>
                <p>Total Cost : {cost}$</p>
                <p>Remaining Balnece : {exist}$</p>
            </div>
        </div>
    )
}

export default Result
