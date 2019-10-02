import * as actionTypes from '../actions';


const initialState = {
    alertes: [
        {
            idAppel : 1,
            contenu: "première alerte",
            titre: "A+ demandé à Saint Louis",
            appelant: "Particulier1",
            datefin: "20/10/2019",
            alerte: "urgence"
        },
        {
            idAppel : 2,
            contenu: "deuxième alerte",
            titre: "O- demandé à La pitié",
            appelant: "Particulier2",
            datefin: "02/12/2019",
            alerte: ""
        },
        {
            idAppel : 3,
            contenu: "troisième alerte",
            titre: "AB+ demandé à Saint Louis",
            appelant: "Particulier3",
            datefin: "20/12/2019",
            alerte: "urgence"
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