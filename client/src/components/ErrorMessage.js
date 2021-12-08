import React from 'react'
import { Link } from "@reach/router";

const ErrorMessage = () => {
    return (
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <p>Author not found. Would you like to add an author?</p>
            <Link to={"/api/authors"}>Create an Author</Link>
            <img src="https://images.squarespace-cdn.com/content/v1/5b91bd6acc8fed4c7369f9ba/1546808344343-YN8LUW7FJGQ91MWDYW28/Absent+Author+%28front%29.jpg" alt="404" />
        </div>
    )
}

export default ErrorMessage
