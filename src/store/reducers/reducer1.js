import * as actionTypes from '../actions';


const initialState = {
    appels: []
};

const reducer1 = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.NOM_ACTION1:
            // Faire qq chose pour créer le state approprié
            return {
                ...state,
            }
        case actionTypes.NOM_ACTION2:
            return {
                ...state,
            }
    }
    return state;
};

export default reducer1;