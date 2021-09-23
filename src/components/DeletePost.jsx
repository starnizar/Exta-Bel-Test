import React, {useEffect, useState} from 'react'
import loader from "../assets/img/loader.svg";
import loader2 from "../assets/img/loader3.svg";

const DeletePost = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [deleting, setDeleting] = useState(false)

    useEffect(() => {
        (async function () {
            setLoading(true)
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const result = await response.json()
            setTimeout(() => {
                setPosts(result)
                setLoading(false)
            }, 1500)
        })()
    }, [])

    const deletePost = async id => {
        try {
            setDeleting(true)
            await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
                method: 'DELETE'
            })

            setTimeout(() => {
                const updatedPosts = posts.filter(post => post.id !== id)
                setPosts(updatedPosts)
                setDeleting(false)
            }, 2000)

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            {loading
                ? <img className='loader' src={loader} alt="Data is loading..."/>
                : <div className='allPosts'>
                    {deleting && <img className='loader3' src={loader2} alt="Deleting..."/>}
                    {posts.map(post => (
                        <div className='container' key={post.id}>
                            <ion-icon onClick={() => deletePost(post.id)} name="close-outline"/>
                            <div className={`postWrapper ${deleting ? 'delete' : 'shaking'}`}>
                                <h3>{post.title}</h3>
                                <p>{post.body}</p>
                            </div>
                        </div>
                    ))}
                </div>
            }
        </>
    )
}

export default DeletePost
