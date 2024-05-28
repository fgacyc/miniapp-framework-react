import { Routes, Route } from 'react-router-dom';
import Index from "../pages/index.jsx";
import About from "../pages/about.jsx";
import Settings from "@/pages/settings.jsx";

export default function MainRoutes(){
    return (
        <Routes>
            <Route path="/:UID" element={<Index />} />
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/settings" element={<Settings />} />
        </Routes>
    )
}