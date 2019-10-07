import React from 'react';


import classes from './ConnexionBlock.module.css';
import Label from '../UI/Label/Label'
import Field from '../UI/Field/Field'
import Button from '../UI/Button/Button'
import ButtonClear from '../UI/ButtonClear/ButtonClear'
import Title from '../UI/Title/Title'
import Separator from '../UI/Separator/Seperator'



const ConnexionBlock = (props) => {

    return (<div className={classes.ConnexionBlock}>
            <Title>{props.labelValue}</Title>
            <Label for={props.emailFieldPlaceHolder}>{props.emailFieldPlaceHolder}</Label>
            <Field
                id={props.emailFieldPlaceHolder}
                mandatory
                placeholder={props.emailFieldPlaceHolder}
            />
            <Label for={props.passwordFieldPlaceHolder}>{props.passwordFieldPlaceHolder}</Label>
            <Field
                id={props.passwordFieldPlaceHolder}
                mandatory
                placeholder={props.passwordFieldPlaceHolder}
            />
            <Button>{props.loginButtonName}</Button>
            <ButtonClear>{props.forgottenPasswordButtonName}</ButtonClear>
            
            <Separator>ou</Separator>

            <Button>{props.signUpButtonName}</Button>


            </div>
            )
}






export default ConnexionBlock