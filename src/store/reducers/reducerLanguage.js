import * as actionTypes from '../actions'
import allTextForLanguage from '../../allTextForLanguage'


const defaultLanguage = "fr"
const defaultText = allTextForLanguage(defaultLanguage)

const initialState = {
    language: defaultLanguage,
    text: defaultText
}

const reducerLanguage = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.NOM_ACTION2:
            // Faire qq chose pour créer le state approprié
            return {
                ...state,
            }
        case actionTypes.NOM_ACTION3:
            return {
                ...state,
            }
        default:
            return state;
    }

    
}

export default reducerLanguage