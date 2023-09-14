import React, { useEffect, useState } from 'react'
import Cart from './Cart'
import Result from './Result'

const Home = () => {

    const [actors, setActors] = useState([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/gias-uddin-swe/B8-final-Bpl-team-maker/main/public/data.json')
            .then(res => res.json())
            .then(data => setActors(data))
    }, [])
    // console.log(actors)
    const [selected, setSelected] = useState([])
    const handleSelectedActors = (data) => {
        let newArray = [...selected, data]
        if (selected.includes(data)) {
            return alert('Already booked')
        }
        else {
            setSelected(newArray)
        }
    }



    return (
        <div className='flex gap-2 justify-center w-[90%] mx-auto py-5'>
            <div className=' w-[60%] text-center py-2  grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {actors.map((actor, index) => <Cart key={index} actor={actor} handleSelectedActors={handleSelectedActors} />)}
            </div>
            <Result selected={selected} />
        </div>
    )
}

export default Home