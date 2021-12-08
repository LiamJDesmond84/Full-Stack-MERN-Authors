import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate, Link } from "@reach/router";

const AuthorDetails = (props) => {
    const { id } = props;
    const [name, setName] = useState({})
    // const [oneProduct, setOneProduct] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res => {console.log(res.data);
                setName(res.data);})
            .catch(err => {console.log(err);navigate('/error');})
    }, [id])
    return (
        <div>
            <h1>Author Name:</h1>
            <p>{name.name}</p>
            <h1>First Book Published On:</h1>
            <p>{name.createdAt}</p>
            <hr/>
            <h3><Link to="/">Home</Link></h3>
        </div>
    )
}

export default AuthorDetails
