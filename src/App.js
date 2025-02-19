import React, { useState, useEffect } from "react";
import './App.css';
import SideBar from './components/Sidebar';
import PageTitle from './components/PageTitle.js'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Nav from './components/Nav.js'
import SubSideBar from './components/SubSidebar.js'


function App() {

    const [category, setCategories] = useState('');
    const handleMessageFromChild = (category) => {
        setCategories(category);}; // 자식에서 받은 메시지 상태 업데이트

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
                                                    <SubSideBar onSendMessage={handleMessageFromChild}/>
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
