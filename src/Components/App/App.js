import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Header from "../Pages/Header/Header";
import Footer from "../Pages/Footer/Footer";
import NotFound from "../Pages/NotFound/NotFound";
import RouterUsers from "../Pages/Users/RouterUsers";
const App = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path="/users/*" element={<RouterUsers />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;