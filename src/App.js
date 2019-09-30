import React from 'react';
import { Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Layout>
        <Switch> {/* Décommenter en mettant les valeurs appropriée
          <Route path="/path1" component={Compo1} />
          <Route path="/path2" component={Compo2} />
          <Route path="/" exact component={Compo3} /> */}
        </Switch>
        
      </Layout>
    </div>
  );
}

export default App;
