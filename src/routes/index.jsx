import Pages from "../pages"
import { BrowserRouter, Route, Routes } from "react-router-dom"

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Pages.Auth/>}/>
                <Route path="/dashboard" element={<Pages.Dashboard/>}/>
                <Route path="*" element={<Pages.NotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp