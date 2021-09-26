import 'normalize.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/header/Header';
import WhatWeDo from './components/pages/WhatWeDo';
import Home from './components/pages/Home';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Header />
        <h1>Hello TTTech</h1>
      </div>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/what-we-do'>
          <WhatWeDo />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
