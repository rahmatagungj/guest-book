import React from 'react'

const {useState, useRef} = React

const Form = () => {    
    const [submited, setSubmited] = useState(false)
    const instanceRef = useRef(null)
    const nameRef = useRef(null)
    const handleForm = (e: any) => {
        e.preventDefault()
        setSubmited(true)
    
    }
    

    return (
        <div>
           <input type="text" name="name" id="name" ref={nameRef}/> <br/>
            <input type="text" name="instance" id="instance" ref={instanceRef}/> <br/>
            <button onClick={handleForm}>Tambah</button>
        </div>
    )
}

export default Form
