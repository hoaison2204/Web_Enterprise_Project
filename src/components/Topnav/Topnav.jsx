import React from 'react'

import './Topnav.css'

import Dropdown from '../Dropdown/Dropdown'

import { Link } from 'react-router-dom'

import notifications from '../../assets/JsonData/notification.json'

import user_image from '../../assets/images/avatar.jpg'

import user_menu from '../../assets/JsonData/user_menus.json'

const curr_user = {
    display_name: 'Admin',
    image: user_image
}

const renderUserMenu = (item, index) => (
    <Link to='/' key={index}>
        <div className="notification-item">
            <i className={item.icon}></i>
            <span>{item.content}</span>
        </div>
    </Link>
)

const renderNotificationItem = (item, index) => (
    <div className="notification-item" key={index}>
        <i className={item.icon}></i>
        <span> {item.content}</span>
    </div>
)

const renderUserToggle = (user) => (
    <div className="topnav_right-user">
        <div className="topnav_right-user_image">
            <img src={user.image} alt="" />
        </div>
        <div className="topnav_right-user_name">
            {user.display_name}
        </div>
    </div>
)

const Topnav = () => {
    return (
        <div className="topnav">
            {/* search */}
            <div className="topnav_search">
                <input type="text" placeholder="Search here..." />
                <i className="bx bx-search"></i>
            </div>

            {/* dropdown */}
            {/* user  */}
            <div className="topnav_right">
                <div className="topnav_right-item">
                    <Dropdown
                        customToggle={() => renderUserToggle(curr_user)}
                        contentData={user_menu}
                        renderItems={(item, index) => renderUserMenu(item, index)}
                    />
                </div>

                {/* notifications */}
                <div className="topnav_right-item">
                    <Dropdown
                        icon="bx bx-bell"
                        badge="12"
                        contentData={notifications}
                        renderItems={(item, index) => renderNotificationItem(item, index)}
                        renderFooter={() => <Link to='/'>View all notifications</Link>}
                    />
                </div>
                <div className="topnav_right-item">
                    <Dropdown />
                </div>
            </div>
        </div>
    )
}

export default Topnav