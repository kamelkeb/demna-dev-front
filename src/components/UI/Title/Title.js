import React from 'react';
import classes from './Title.module.css'

import { Header } from 'semantic-ui-react'


const Title = (props) => {
    return (
        <Header sub>{props.titreSection}</Header>
    )
}


export default Title
