import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div>
            <h4>404 Page not found</h4>
            <Link to="/">Go to Homepage</Link>
        </div>
    )
}

export default NotFoundPage;
