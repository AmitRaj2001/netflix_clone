import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./componants/Home/Home";
import Header from "./componants/Header/Header";
import Footer from "./componants/Footer/Footer";
function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Footer/>
        </Router>
    );
}

export default App;
