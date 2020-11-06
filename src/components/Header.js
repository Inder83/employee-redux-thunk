import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div style={{display: 'inline-flex'}}>
            <div><Link to="/">All Employees</Link></div>
            <div><Link to="/addEmp">Add Employee</Link></div>
        </div>
    );
}

export default Header;