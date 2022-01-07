import React from 'react';
import './NavBar.css';
import {Link} from 'react-router-dom';

export default function NavBar() {
    return (
        <div className="navbar">
            <div className="check">
                <Link className="check-link" to="/">Check22</Link>
            </div>
            <div className="calendar">
                <Link to="/calendar" className="calendar-link">Calendar</Link>
            </div>
        </div>
    )
}
