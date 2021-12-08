import '../App.css';
import React, { useState } from 'react'
import axios from "axios"
import { navigate, Link } from "@reach/router";


const AuthorForm = (props) => {
    // const { hasBeenSubmitted, setHasBeenSubmitted } = props;
    const [errors, setErrors] = useState({});
    const [name, setName] = useState("")


    const createAuthor = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/authors", {name})
            .then((res) => {
                console.log(res);
                setName("");
                navigate("/");
                // setHasBeenSubmitted(!hasBeenSubmitted);
                })
            .catch((err) => {
            console.log(err);
            setErrors(err.response.data.errors)});
            
        };

    return (
        <div>
            <h1>Favorite Authors</h1>
            <h4>Add a new Author</h4>
            <form className="create" onSubmit={createAuthor}>
                <label>Author Name</label>
                <input type="text" name="name" value={name.name} onChange={(e) => setName(e.target.value)} />
                {
                    errors.name?
                    <p>{errors.name.message}</p>
                    :null
                }
                <input type="submit" placeholder="Submit" />
            </form>
            <button onClick={() => navigate("/")}>Cancel</button>
            <h1><Link to="/">Home</Link></h1>
        </div>
    )
}

export default AuthorForm
