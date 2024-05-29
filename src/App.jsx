import { BrowserRouter as Router } from 'react-router-dom';
import MainRoutes from "./routes/routers.jsx";
import ActionSheetButtons from "@/components/action-sheet-buttons.jsx";
import ActionSheetMenu from "@/components/action-sheet-menu.jsx";
import {useUserStore} from "@/store/user-store.js";
import {useEffect} from "react";

function App() {
    const initUser = useUserStore(state => state.initUser);

    useEffect(() => {
        void initUser();
    }, [initUser]);
    return (
        <>
            <Router>
                <ActionSheetButtons />
                <ActionSheetMenu />
                <MainRoutes />
            </Router>

        </>

    );
}

export default App
