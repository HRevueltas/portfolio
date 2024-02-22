import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage } from "../portfolio/pages/HomePage"
import { AboutPage } from "../portfolio/pages/AboutPage"
import { ProjectsPage } from "../portfolio/pages/ProjectsPage"
import { NotFoundPage } from "../portfolio/pages/NotFoundPage"
import { NavBar } from "../ui"
import { Craft } from "../portfolio/pages/Craft"

export const AppRouter = () => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="home" element={<HomePage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path='projects' element={<ProjectsPage />} />
                <Route path='craft' element={<Craft/>} />

                <Route path="/" element={<Navigate to={'/Home'} />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </>
    )
}
