// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"

function Header() {
    return (
        <nav class="page_route">
            <h1>schedule</h1>
            <ul>
                <li><Link to="/dashboard">ダッシュボード</Link></li>
                <li><Link to="/calender">カレンダー</Link></li>
                <li><Link to="/task">タスク</Link></li>
                <li><Link to="/share">共有</Link></li>
                <li><Link to="/reminder">通知</Link></li>
                <li><Link to="/account">アカウント</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
                <li><Link to="/week">Week</Link></li>
                <li><Link to="/add">Add</Link></li>
            </ul>
        </nav>
    );
}

export default Header;
