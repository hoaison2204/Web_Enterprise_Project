import React from 'react'

import './layout.css'
import Sidebar from '../sidebar/Sidebar'
import Topnav from '../Topnav/Topnav'
import Routes from '../layout/Routes'

import { BrowserRouter, Route } from 'react-router-dom'

const Layout = () => {
    return (
        <BrowserRouter>
            <Route render={(props) => (
                <div className='layout'>
                    <Sidebar {...props} />
                    <div className='layout_content'>
                        <Topnav/>
                        <div className='layout_content-main'>
                            <Routes />
                        </div>
                    </div>
                </div>
            )}>
            </Route >
        </BrowserRouter >
    )
}

export default Layout