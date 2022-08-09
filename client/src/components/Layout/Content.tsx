import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import FrontPage from "../Pages/FrontPage";

interface Props {}

const Content: FC<Props> = () => {
    return (
        <>
        <Routes>
            <Route path="/" element={ <FrontPage /> } />
        </Routes>
        </>
    )
}

export default Content;