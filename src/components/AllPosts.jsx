import React, {useEffect, useState} from 'react'
import loader from '../assets/img/loader.svg'

const AllPosts = () => {

    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        (async function () {
            setLoading(true)
            const response = await fetch('http://jsonplaceholder.typicode.com/posts')
            const result = await response.json()
            setTimeout(() => {
                setPosts(result)
                setLoading(false)
            }, 1500)
        })()
    }, [])

    console.log(posts)

    return (
        <>
            {loading
                ? <img className='loader' src={loader} alt="Data is loading..."/>
                : <div className='allPosts'>
                    {posts.map(post => (
                        <div className='postWrapper' key={post.id}>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                        </div>
                    ))}
                </div>
            }
        </>
    )
}

export default AllPosts
