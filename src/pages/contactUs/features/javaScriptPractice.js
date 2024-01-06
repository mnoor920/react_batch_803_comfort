import React from 'react'

const JavaScriptPractice = () => {
    var a = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. 98734 wlesldfjasdfj Laboriosam amet quis similique id labore sapiente impedit laudantium minus ea dicta modi nesciunt beatae harum, at rerum cum quibusdam quas praesentium."
    var b = 23 + 78 + "79000";
    const carData = [
        {
            roll_no: '89',
            full_name: 'Hamza',
            day: 'Satur'
        },
        {
            roll_no: '89',
            full_name: 'Hamza',
            day: 'Satur'
        },
        {
            roll_no: '89',
            full_name: 'Hamza',
            day: 'Satur'
        }
    ]

    console.log("Car Data", carData)
    return (
        <div className='page_width' >
            JavaScriptPractice

            <p>{a}</p>
            <p>{b}</p>
        </div>
    )
}

export default JavaScriptPractice