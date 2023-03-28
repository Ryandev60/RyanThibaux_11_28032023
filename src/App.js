import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Error from './pages/Error';
import About from './pages/About';
import Appartment from './pages/Appartment';

function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route exact path="/appartment" element={<Appartment />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    );
}

export default App;
