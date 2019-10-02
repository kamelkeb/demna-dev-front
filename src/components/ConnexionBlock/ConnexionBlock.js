import React from 'react';


import classes from './ConnexionBlock.module.css';
import Label from '../UI/Label/Label'
import Field from '../UI/Field/Field'
import Button from '../UI/Button/Button'




const ConnexionBlock = (props) => {

    return (<>
            <Label value={props.labelValue}/>
            <Field mandatory placeholder={props.emailFieldPlaceHolder}/>
            <Field mandatory placeholder={props.passwordFieldPlaceHolder}/>
            <Button>{props.loginButtonName}</Button>
            


            <Button>{props.signUpButtonName}</Button>


            </>
            )
}






export default ConnexionBlock