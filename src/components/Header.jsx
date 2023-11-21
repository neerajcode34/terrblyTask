import React from 'react'
import './Header.css'
import CompanyLogo from '../assets/company.svg'

function Header() {
    return (
        <header>
            <div className="header__left">
                <img src={CompanyLogo} alt="company-logo" className='logo' />
                <div className="stories__text">STORIES</div>
            </div>
            <div className="header__right">
                <button className='btn'>Courses</button>
            </div>
        </header>
    )
}

export default Header