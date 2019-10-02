import React from 'react';


import classes from './ConnexionBlock.module.css';
import Label from '../UI/Label/Label'
import Field from '../UI/Field/Field'
import Button from '../UI/Button/Button'
import Title from '../UI/Title/Title'



const ConnexionBlock = (props) => {

    return (<div className={classes.ConnexionBlock}>
            <Title>{props.labelValue}</Title>
            <Field mandatory placeholder={props.emailFieldPlaceHolder}/>
            <Field mandatory placeholder={props.passwordFieldPlaceHolder}/>
            <Button>{props.loginButtonName}</Button>
            


            <Button>{props.signUpButtonName}</Button>


            </div>
            )
}






export default ConnexionBlock