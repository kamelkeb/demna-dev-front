import React from 'react';

import classes from './TopBar.module.css';

import Menu from 'src/components/Navigation/Menu/Menu';
import Logo from 'src/components/Logo/Logo';
import UserAccount from 'src/components/UserAccount/UserAccount';

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