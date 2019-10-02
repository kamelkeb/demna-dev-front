import React from 'react'
import classes from './Acceuil.module.css'

import {connect} from 'react-redux'

import AlertesBlock from '../../components/AlertesBlock/AlertesBlock'

class Accueil extends React.Component {
    render() {
        return (
            
                <AlertesBlock alertes={this.props.alertes} labelValue={this.props.labelValue}/>
            
        );
    }
}

const mapStateToProps = state => {
    return {
        alertes: state.alertes.alertes,
        labelValue: state.language.text.ALERTS_BLOCK_LABEL
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