import React, {useRef, useState} from 'react'
import loader from '../assets/img/loader2.svg'

const MyPosts = () => {

    const [state, setState] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const inputRef = useRef()

    const getUserPosts = async () => {
        try {
            setLoading(true)
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${inputRef.current.value}`)
            const result = await response.json()
            if (result.length) {
                setState(result)
                setTimeout(() => {
                    setLoading(false)
                }, 2000)
            } else {
                setTimeout(() => {
                    setLoading(false)
                    setState([])
                    setError('No such a User!')
                    setTimeout(() => {
                        setError('')
                    }, 2000)
                }, 2000)
            }


        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className='myPosts'>
            <input ref={inputRef} type="text" placeholder='Enter user id'/>
            <button
                disabled={loading}
                onClick={getUserPosts}
            >
                {loading
                    ? <img className='loader2' src={loader} alt='loading...'/>
                    : 'Get posts'
                }
            </button>
            {error && <p style={{marginTop: '10px', color: 'red', fontWeight: 'bold'}}>{error}</p>}
            {!loading && <div className="usersPosts">
                            {state.map(post => (
                                <div key={post.id} className='postWrapper'>
                                    <h3>{post.title}</h3>
                                    <p>{post.body}</p>
                                </div>
                            ))}
                        </div>
            }

        </div>
    )
}

export default MyPosts
