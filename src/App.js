import './App.css';
import { Routes, Route } from 'react-router-dom';

import Navbar from './Permanent/NavBar/index';
import Home from './Route/Home/index';

function App() {
    return (
        <div className="App">
            <div className="App-container">
                <Navbar />

                <div className="body">
                    <Routes>
                        <Route path="/starbooks-home/" element={<Home />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
