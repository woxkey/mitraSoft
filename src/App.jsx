import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Posts from "./containers/Posts";
import User from "./containers/User";
import AboutMe from "./containers/AboutMe";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Layout />}>
                    <Route index element={<Posts />} />
                    <Route path="about-me" element={<AboutMe />} />
                </Route>
                <Route path="/:id" element={<User />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;

