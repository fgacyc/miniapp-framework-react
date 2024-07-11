import { Routes, Route } from 'react-router-dom';
import Index from "../pages/index.jsx";
import About from "../pages/framework/about.jsx";
import Settings from "@/pages/framework/settings.jsx";
import PrivacyPolicy from "@/pages/framework/privacy-policy.jsx";
import TermsOfService from "@/pages/framework/terms-of-service.jsx";

export default function MainRoutes(){
    return (
        <Routes>
            <Route path="/:UID" element={<Index />} />
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
    )
}