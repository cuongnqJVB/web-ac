import { Routes, Route } from "react-router-dom";
import './styles/style-core.scss';

import Layout from "./components/layout";
import HomePage from "./pages/home";
import ProfilePage from "./pages/profile";
import RecommendPage from "./pages/recommend";

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index path="/" element={<HomePage />}></Route>
                <Route path="/profile" element={<ProfilePage />}></Route>
                <Route path="/recommend" element={<RecommendPage />}></Route>
            </Route>
        </Routes>
    );
}

export default App;
