import React from 'react';

import classes from './Layout.module.css';

import TopBar from '../../TopBar/TopBar';

class Layout extends React.Component {
    render() {
        return (
            <>
                <TopBar />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </>
        );
    }
}

export default Layout;