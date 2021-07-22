import React from 'react'

interface UIHeader {
    title: string
}

const Header = ({title}: UIHeader) => {
    return (
        <div>
            <header><h1>{title}</h1></header>
        </div>
    )
}

export default Header
