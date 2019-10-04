import React from 'react';

import classes from './Carte.module.css';

import { Card, Label } from 'semantic-ui-react';

const Carte = (props) => {
    // Si urgence de type "alerte", label rouge, sinon (type "info") label bleu
    const color_alerte = (props.alerte == "urgence") ? "red" : "green"
    const label = props.alerte ?
                    <Label as='a' color={color_alerte} attached="top left">{props.alerte}</Label> :
                    null
    return (
        <div className={classes.Carte}>
            <Card>
                <Card.Content>
                    <Card.Header>{props.titre}</Card.Header>
                    <Card.Meta>{props.appelant}</Card.Meta>
                    {props.datefin}
                </Card.Content>
                {label}
            </Card>
        </div>
    );
}

export default Carte;

