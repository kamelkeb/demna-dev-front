import React from 'react'
import { Route, Switch } from 'react-router-dom'

// Les routes coté client
import * as client_routes from './routes/client_routes'

// Composants internes à l'app
import Accueil from './containers/Accueil/Accueil'
import Layout from './hoc/Layout/Layout'


function App() {
  return (
    <div className="App">
      <Layout>
        <Switch> 
          
          <Route path={client_routes.pathHome} exact component={Accueil} />
        </Switch>
        
      </Layout>
    </div>
  );
}

export default App
