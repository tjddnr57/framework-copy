import logo from './logo.svg';
import './App.css';
import SideBar from './components/Sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductGroup from './pages/ProductGroup.js'
import ItemMaster from './pages/ItemMaster.js'
import Factory from './pages/Factory.js'
import Line from './pages/Line.js'
import Process from './pages/Process.js'
import Equipment from './pages/Equipment.js'
import Mold from './pages/Mold.js'

function App() {
    return (
        <div className="App">
            <div className="layout">
                <div className="snb">
                <Router>
                    <SideBar />
                    
                    </Router>
                </div>
                <div className="main">

                </div>
            </div>
        </div>
    );
}

export default App;
