import React, { Component } from 'react';
import Navbar from './navbar';
import Home from './home';
import Linux from './linux';
import Web from './web';
import Django from './django';
import NotFound from './notFound';
import WebContent from './webContent';
import { Routes, Route, Navigate } from 'react-router-dom';

class App extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div className='container'>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/linux' element={<Linux />} >
                            <Route path='homework' element={<h4>homework</h4>}></Route>
                            <Route path='terminal' element={<h4>terminal</h4>}></Route>
                            <Route path='*' element={<h4>other</h4>}></Route>
                        </Route>
                        <Route path='/django' element={<Django id='hhh' />} />
                        <Route path='/web' element={<Web />} />
                        <Route path='/web/content' element={<WebContent />} />
                        <Route path='/404' element={<NotFound />} />
                        <Route path='*' element={<Navigate replace to='/404' />} />
                    </Routes>
                </div>
            </React.Fragment>);
    }
}

export default App;