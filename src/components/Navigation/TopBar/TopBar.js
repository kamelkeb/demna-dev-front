import React from 'react'
import classes from './TopBar.module.css'

import Menu from '../Menu/Menu'
import Logo from '../../Logo/Logo'
import UserAccount from '../../UserAccount/UserAccount'

const TopBar = () => {
    return (
        <header className={classes.Header} >
            <Menu />
            <Logo />
            <UserAccount />
        </header>
    );
}

export default TopBar;