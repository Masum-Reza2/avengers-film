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
    const [cost, setCost] = useState(0)
    const [exist, setExist] = useState(20000)
    const handleSelectedActors = (data) => {
        let newArray = [...selected, data]

        let count = data.salary;

        if (selected.includes(data)) {
            return alert('Already booked')
        }
        else {
            // setSelected(newArray)
            selected.forEach(item => {
                count += item.salary;
            })

            if (count > 20000) {
                alert('tumi fail tumar taka sesh')
            }
            else {
                setSelected(newArray)
                setCost(count)

                let remaining = 20000 - count
                setExist(remaining)
            }
        }
    }



    return (
        <div className='flex gap-2 justify-center w-[90%] mx-auto py-5'>
            <div className=' w-[60%] text-center py-2  grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {actors.map((actor, index) => <Cart key={index} actor={actor} handleSelectedActors={handleSelectedActors} />)}
            </div>
            <Result selected={selected} cost={cost} exist={exist} />
        </div>
    )
}

export default Home