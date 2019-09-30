import * as actionTypes from '../actions';


const initialState = {
    personnes: []
};

const reducer2 = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.NOM_ACTION1:
            // Faire qq chose pour créer le state approprié
            return {
                ...state,
            }
        case actionTypes.NOM_ACTION3:
            return {
                ...state,
            }
    }

    return state;
};

export default reducer2;