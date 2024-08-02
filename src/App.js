import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';
import PhimLe from './pages/PhimLe';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/movie" element={<Home />} />
                    <Route path="/movie/:slug" element={<MovieDetail />} />
                    <Route path="/phimle" element={<PhimLe />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
