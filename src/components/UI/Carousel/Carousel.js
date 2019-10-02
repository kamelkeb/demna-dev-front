import React from 'react';
import classes from './Carousel.module.css'



const Carousel = (props) => {

    
        return props.items.map(i => <span id={i.idAppel}> {i.contenu} </span>)
    
}



export default Carousel
