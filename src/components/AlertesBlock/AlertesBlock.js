import React from 'react';


import classes from './AlertesBlock.module.css';
import Label from '../UI/Label/Label'
import Carousel from '../UI/Carousel/Carousel.js'



const AlertesBlock = (props) => {

    return (<>
            <Label value={props.labelValue}/>
            <Carousel items={props.alertes}/>
            </>
            )
}






export default AlertesBlock