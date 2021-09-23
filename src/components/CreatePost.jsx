import React, {useState} from 'react'
import loader from '../assets/img/loader2.svg'

const CreatePost = () => {

    const [state, setState] = useState({
        title: '',
        body: ''
    })
    const [loading, setLoading] = useState(false)

    const inputHandler = event => {
        setState(prev => ({...prev, ...{
                [event.target.name]: event.target.value
            }}))
    }
    const [isSuccess, setIsSuccess] = useState('')

    const submitHandler = async event => {
        event.preventDefault()
        setLoading(true)
        try {
            const response = await fetch('http://jsonplaceholder.typicode.com/posts', {
                method: 'post',
                body: JSON.stringify({
                    title: state.title,
                    body: state.body,
                    userId: 11,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
            })
            const result = await response.json()
            console.log(result)
            setTimeout(() => {
                setLoading(false)
                setIsSuccess('Post successfully created!')
                setTimeout(() => {
                    setIsSuccess('')
                }, 2000)
            }, 1500)

        } catch (error) {
            console.log(error)
            setTimeout(() => {
                setLoading(false)
                setIsSuccess('Something went wrong...')
                setTimeout(() => {
                    setIsSuccess('')
                }, 2000)
            }, 1500)
        }

    }

    return (
        <div className='createPost'>
            <form onSubmit={submitHandler}>
                <input
                    value={state.title}
                    onChange={inputHandler}
                    name='title' type="text"
                    placeholder='Title'
                />
                <textarea
                    cols='40'
                    rows='5'
                    value={state.body}
                    onChange={inputHandler}
                    name='body'
                    placeholder='Body'
                />
                <button
                    disabled={loading}
                    type='submit'>
                    {loading
                        ? <img className='loader2' src={loader} alt='loading...'/>
                        : 'Post'
                    }
                </button>
                {isSuccess && <p style={{textAlign:'center', marginTop: '10px'}}>{isSuccess}</p>}
            </form>
        </div>
    )
}

export default CreatePost
