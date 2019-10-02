/* *** UserAccount ***
Composant présent sur toutes les pages
Deux usages :
- visuellement : indicateur si connecté (icone en plein) ou déconnecté (icône en outline)
- action : accès direct à la fonction de Affichage de son profil (si connecté) ou Connexion (sinon)
*/
import React from 'react'
import { Icon } from 'semantic-ui-react'

const UserAccount = () => {
    return (
        <Icon size="large"
                name="user outline" />
    );
}

export default UserAccount;