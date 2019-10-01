mport React from 'react';
import classes from './Field.module.css'


const Carousel = (props) => {
    return props.items.map(i => <span id={i.id}> {i.content} </span>)
}


export default Carousel
