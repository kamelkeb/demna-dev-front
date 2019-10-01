import React from 'react';
import { Route, Switch } from 'react-router-dom';

import * as client_routes from './routes/client_routes';

import Acceuil from 'src/containers/Accueil/Accueil';



export const language="fr"

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch> 
          
          <Route path={client_routes.pathHome} exact component={Acceuil} />
        </Switch>
        
      </Layout>
    </div>
  );
}

export default App;
