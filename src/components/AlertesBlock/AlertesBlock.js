import React from 'react';


import classes from './AlertesBlock.module.css';
import Label from '../UI/Label/Label'
import Carousel from '../UI/Carousel/Carousel.js'
import Title from '../UI/Title/Title'



const AlertesBlock = (props) => {

    return (<div className={classes.AlertesBlock}>
            <Title>{props.labelValue}</Title>
            <Carousel items={props.alertes}/>
            </div>
            )
}






export default AlertesBlock