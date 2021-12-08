// import React from 'react'
import React, { useState, useEffect } from 'react'
import { Link } from "@reach/router";
import axios from "axios"

const AuthorList = (props) => {
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    const [authors, setAuthors] = useState([])

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/authors")
            .then((response) => {
            console.log(response.data);
            setAuthors(response.data);
            })
                .catch((err) => console.log(err));
        }, [hasBeenSubmitted]);

    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8000/api/authors/' + authorId)
            .then(res => {console.log(res)})
            .catch(err => console.log(err))
            setHasBeenSubmitted(!hasBeenSubmitted)
    }

    return (
        <div className="table">
            <h1>Favorite Authors</h1>
            <Link to="/api/authors">Add an Author</Link>
            <h1>We have quotes by:</h1>
            <table>
                <thead>
                        <tr>
                            <th>Author</th>
                            <th>Details</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                </thead>
            {authors.map((x,i) => {
                return (
                        <tbody key={i}>
                            <tr>
                                <td>{x.name}</td>
                                <td><Link to={`/api/author/${x._id}`}>Details</Link></td>
                                <td><Link to={`/api/author/edit/${x._id}`}>Edit</Link></td>
                                <td><button onClick={(e)=>{deleteAuthor(x._id)}}>Delete</button></td>
                            </tr>
                        </tbody>
)})}
            </table>
        </div>
    )
}

export default AuthorList
