import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Borrowers from "../containers/Borrowers";
import NotFoundPage from "./DumbComponents/NotFoundPage";

const App = () => {
    return (
        <>
            {/* <nav>Navbar</nav> */}
            <Router>
                <Routes>
                    <Route exact path="/" element={<Borrowers />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Router>
            {/* <footer>Footer</footer> */}
        </>
    )
}

export default App;
