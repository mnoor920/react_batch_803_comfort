import React, { useState } from 'react'

const JavaScriptPractice = () => {
    const [user, setUser] = useState(true)
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

    const person = {
        firstName: "John",
        lastName: "Doe",
        age: 50,
        eyeColor: "blue"
    };

    function toCelsius(fahrenheit) {
        var degre = (5 / 9) * (fahrenheit - 32)
        // alert("Degree", degre)
        return degre;
    }

    const degreeValue = toCelsius(87)

    const testString = `${user} Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, quidem modi aut ea inventore incidunt magni aliquam provident laudantium quibusdam odit deserunt ex dolore obcaecati? Obcaecati rem mollitia nulla earum.`

    console.log("Car Data", carData)
    const books = [
        {
            title: 'Title',
            pages: 190,
            author: [
                'Yetp', 'React JS'
            ],
            author_detail: {
                name: 'Muhammad Noor',
                age: ''
            }
        },
        {
            title: 'Title one',
            pages: 190,
            author: [
                'Yetp', 'React JS'
            ],
            author_detail: {
                name: 'Muhammad Noor',
                age: ''
            }
        },
        {
            title: 'Title Three',
            pages: 190,
            author: [
                'Yetp', 'React JS'
            ],
            author_detail: {
                name: 'Muhammad Noor',
                age: ''
            }
        },
        {
            title: 'Title Four',
            pages: 190,
            author: [
                'Yetp', 'React JS'
            ],
            author_detail: {
                name: 'Muhammad Noor',
                age: ''
            }
        },
        {
            title: 'Title Four',
            pages: 190,
            author: [
                'Yetp', 'React JS'
            ],
            author_detail: {
                name: 'Muhammad Noor',
                age: ''
            }
        },
        {
            title: 'Title Four',
            pages: 190,
            author: [
                'Yetp', 'React JS'
            ],
            author_detail: {
                name: 'Muhammad Noor',
                age: ''
            }
        },
        {
            title: 'Title Four',
            pages: 190,
            author: [
                'Yetp', 'React JS'
            ],
            author_detail: {
                name: 'Muhammad Noor',
                age: ''
            }
        },
        {
            title: 'Title Four',
            pages: 190,
            author: [
                'Yetp', 'React JS'
            ],
            author_detail: {
                name: 'Muhammad Noor',
                age: ''
            }
        },
        {
            title: 'Title Four',
            pages: 190,
            author: [
                'Yetp', 'React JS'
            ],
            author_detail: {
                name: 'Muhammad Noor',
                age: ''
            }
        },
        {
            title: 'Title Four',
            pages: 190,
            author: [
                'Yetp', 'React JS'
            ],
            author_detail: {
                name: 'Muhammad Noor',
                age: ''
            }
        },
        {
            title: 'Title Four',
            pages: 190,
            author: [
                'Yetp', 'React JS'
            ],
            author_detail: {
                name: 'Muhammad Noor',
                age: ''
            }
        },
        {
            title: 'Title Four',
            pages: 190,
            author: [
                'Yetp', 'React JS'
            ],
            author_detail: {
                name: 'Muhammad Noor',
                age: ''
            }
        },
        {
            title: 'Title Four',
            pages: 190,
            author: [
                'Yetp', 'React JS'
            ],
            author_detail: {
                name: 'Muhammad Noor',
                age: ''
            }
        },
        {
            title: 'Title Four',
            pages: 190,
            author: [
                'Yetp', 'React JS'
            ],
            author_detail: {
                name: 'Muhammad Noor',
                age: ''
            }
        },
        {
            title: 'Title Four',
            pages: 190,
            author: [
                'Yetp', 'React JS'
            ],
            author_detail: {
                name: 'Muhammad Noor',
                age: ''
            }
        },
        {
            title: 'Title Four',
            pages: 190,
            author: [
                'Yetp', 'React JS'
            ],
            author_detail: {
                name: 'Muhammad Noor',
                age: ''
            }
        },
        {
            title: 'Title Four',
            pages: 190,
            author: [
                'Yetp', 'React JS'
            ],
            author_detail: {
                name: 'Muhammad Noor',
                age: ''
            }
        },
        {
            title: 'Title Four',
            pages: 190,
            author: [
                'Yetp', 'React JS'
            ],
            author_detail: {
                name: 'Muhammad Noor',
                age: ''
            }
        },
        {
            title: 'Title Four',
            pages: 190,
            author: [
                'Yetp', 'React JS'
            ],
            author_detail: {
                name: 'Muhammad Noor',
                age: ''
            }
        },
        {
            title: 'Title Four',
            pages: 190,
            author: [
                'Yetp', 'React JS'
            ],
            author_detail: {
                name: 'Muhammad Noor',
                age: ''
            }
        },
        {
            title: 'Title Four',
            pages: 190,
            author: [
                'Yetp', 'React JS'
            ],
            author_detail: {
                name: 'Muhammad Noor',
                age: ''
            }
        },
        {
            title: 'Title Four',
            pages: 190,
            author: [
                'Yetp', 'React JS'
            ],
            author_detail: {
                name: 'Muhammad Noor',
                age: ''
            }
        },
        {
            title: 'Title Four',
            pages: 190,
            author: [
                'Yetp', 'React JS'
            ],
            author_detail: {
                name: 'Muhammad Noor',
                age: ''
            }
        },
        {
            title: 'Title Four',
            pages: 190,
            author: [
                'Yetp', 'React JS'
            ],
            author_detail: {
                name: 'Muhammad Noor',
                age: ''
            }
        },
    ]


    var settings = {
        tile: '',
        name: '',
        age: '',
    }
    var settingsOne = {
        tile: '',
        name: '',
        age: '',
    }

    const allSettigns = { ...settings, ...settingsOne }


    return (
        <div className={`${user == true ? 'page_width' : ''}`} >
            JavaScriptPractice

            <p>Welcome to</p>

            <p>{a}</p>
            <p>{b}</p>
            {/* <p>{degreeValue}</p> */}
            <p>{user == true && toCelsius(87)}</p>
            <p>First Name: {person.firstName}</p>
            <p>Last Name: {person.lastName}</p>
            <p>{testString}</p>
            <p>String Length: {testString.length}</p>
            <p>String Length: {testString.slice(0, 100)} {testString.slice(100)} </p>
            <p>String Length: {testString.slice(100)}</p>


            {books.map((item, index) => {
                return (
                    <>
                        <p>Title: {item.title}</p>
                        <p>Author Name: {item != null && item != '' && item != undefined && item?.author_detail?.name}</p>
                    </>

                )
            })}


        </div>
    )
}

export default JavaScriptPractice