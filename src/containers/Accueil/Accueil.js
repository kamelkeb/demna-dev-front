import React from 'react'
import classes from './Acceuil.module.css'

import {connect} from 'react-redux'

import AlertesBlock from '../../components/AlertesBlock/AlertesBlock'
import ConnexionBlock from '../../components/ConnexionBlock/ConnexionBlock'

class Accueil extends React.Component {
    render() {
        return (<>
            
                <AlertesBlock alertes={this.props.alertes} labelValue={this.props.alertesBlockLabelValue}/>
                <ConnexionBlock labelValue={this.props.connexionBlockLabelValue}
                    emailFieldPlaceHolder={this.props.emailFieldPlaceHolder}
                    passwordFieldPlaceHolder={this.props.passwordFieldPlaceHolder}
                    loginButtonName={this.props.loginButtonName}
                    signUpButtonName={this.props.signUpButtonName}
                 />

                </>
            
        );
    }
}

const mapStateToProps = state => {
    return {
        alertes: state.alertes.alertes,
        alertesBlockLabelValue: state.language.text.ALERTS_BLOCK_LABEL,
        connexionBlockLabelValue: state.language.text.CONNEXION_BLOCK_LABEL,
        emailFieldPlaceHolder: state.language.text.EMAIL_FIELD_PLACE_HOLDER,
        passwordFieldPlaceHolder: state.language.text.PASSWORD_FIELD_PLACE_HOLDER,
        loginButtonName: state.language.text.LOGIN_BUTTON_NAME,
        signUpButtonName: state.language.text.SIGN_UP_BUTTON_NAME
    }
}


// const mapDispatchToProps = dispatch => {
//     return {
//         onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
//         onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
//         onAddCounter: () => dispatch({type: 'ADD'}),
//         onSubtractCounter: () => dispatch({type: 'SUBTRACT'})
//     }
// }


export default connect(mapStateToProps, null)(Accueil)