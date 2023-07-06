import { Routes, Route } from "react-router-dom";
import './styles/style-core.scss';

import HomePage from "./pages/home";

function App() {
    return (
        // <div className="App">
        //     <header className="App-header">
        //         <h1 class="text-3xl font-bold underline text-gray-100">
        //             Hello world!
        //         </h1>
        //     </header>
        // </div>
        // <div>
        //     <Routes>
        //         {/* <Route path="/" element={<Layout layout="layout-home" />}> */}
        //         <Route path="/">
        //             <Route index element={<HomePage />}></Route>
        //         </Route>
        //     </Routes>
        // </div>
        <HomePage />
    );
}

export default App;
