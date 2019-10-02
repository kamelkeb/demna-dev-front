import * as actionTypes from '../actions';


const initialState = {
    alertes: [
        {
            idAppel : 1,
            contenu: "première alerte"
        },
        {
            idAppel : 2,
            contenu: "deuxième alerte"
        },
        {
            idAppel : 3,
            contenu: "troisième alerte"
        }]
};

const reducerAlertes = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.TO_ALERT:
            // Faire qq chose pour créer le state approprié
            return {
                ...state,
            }
        case actionTypes.NOM_ACTION2:
            return {
                ...state,
            }
        default:
            return state;
    }
    
};

export default reducerAlertes;