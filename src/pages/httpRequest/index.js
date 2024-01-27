import React, { useEffect, useState } from 'react'
import GetData from './getData'
import axios from 'axios'
import PlaceholderLoading from 'react-placeholder-loading'
const HttpRequests = () => {
    const [post, setPost] = useState(null)
    const [getpost, setGetPost] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(function (response) {
                setPost(response?.data)
                setLoading(false)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [getpost])


    console.log("data get", post);

    return (
        <div className=' page_width my-5' >
            <GetData />
            {loading == true ?
                <PlaceholderLoading shape="rect" width='100%' height={300} />
                :
                <div className="container">
                    <div className="row">
                        {post && post != null && post.length > 0 && post.map((item, index) => {
                            return (
                                <div className="col-md-4 col-12">
                                    <div className="card" >
                                        <div className="card-body">
                                            <h5 className="card-title">{item?.title}</h5>
                                            <h6 className="card-subtitle mb-2 text-muted">{item.id}</h6>
                                            <p className="card-text"> {item.body} </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>

            }

        </div>
    )
}

export default HttpRequests