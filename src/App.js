import logo from './logo.svg';
import './App.css';
import SideBar from './components/Sidebar';
import PageTitle from './components/PageTitle.js'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductGroup from './pages/ProductGroup.js'
import ItemMaster from './pages/ItemMaster.js'
import Factory from './pages/Factory.js'
import Line from './pages/Line.js'
import Process from './pages/Process.js'
import Equipment from './pages/Equipment.js'
import Mold from './pages/Mold.js'
import Nav from './components/Nav.js'


function App() {
    return (
        <div className="App">
            <Router>
            <div className="layout">
                <div className="snb">
                    
                        <SideBar />

                    
                </div>
                <div className="main">
                    <div className='main-page'>
                        <Nav className='navbar' />
                        <div className='page'>

                            <div className='contents'>
                                <div className='contents-title'>
                                    
                                        <PageTitle />
                                    
                                </div>
                                <div className='contents-main'>
                                    <div className='contents-group'>
                                        <div className='sub-sidebar'>

                                        </div>
                                        <div className='contents-data'>

                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div>

                        </div>

                    </div>
                </div>
            </div>
            </Router>
        </div>
    );
}

export default App;
