import React from 'react'

const Nav = ({state, setState}) => {

    const routes = [
        'All posts',
        'Create post',
        'Delete post',
        'My posts'
    ]

    return  (
        <nav>
            <ul>
                {routes.map((route, index) => (
                    <li key={index}>
                        <a
                            style={(state === route) ? {borderBottom: '3px solid black'} : null}
                            onClick={() => setState(route)}
                            href="#"
                        >
                            {route}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Nav
