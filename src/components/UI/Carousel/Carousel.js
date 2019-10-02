import React from 'react';
import classes from './Carousel.module.css'



const Carousel = (props) => {

    
        return props.items.map(i => <span id={i.idAppel}> {i.contenu} et mon id est {i.idAppel} </span>)
    
}



export default Carousel
