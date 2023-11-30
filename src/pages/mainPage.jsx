import React from "react";
import { createHashRouter as Router, Route, Routes } from "react-router-dom";
import { PAGE } from "./PAGE";
import { FeaturedRoutes } from "../components/ROUTES/featuredRoutes";
import { EarnRoutes } from "../components/ROUTES/earnRoutes";


const MainPage = () => {
    return (
        <>
        <Router>
            <Routes>
                <Route path="/" element={<PAGE />} />
                <Route path="/featured" element={<FeaturedRoutes />} />
                <Route path="/earn" element={<EarnRoutes />} />
            </Routes>
        </Router>
        </>
    )
};
export default MainPage;