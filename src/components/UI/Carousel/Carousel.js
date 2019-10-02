import React from 'react';
import classes from './Carousel.module.css'
import Carte from '../Carte/Carte'

//<span id={i.idAppel}> {i.contenu} et mon id est {i.idAppel} </span>


const Carousel = (props) => {
    
        return props.items.map(i => <Carte {...i}/>)
    
}



export default Carousel
