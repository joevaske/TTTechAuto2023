import 'normalize.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/header/Header';
import TopMenu from './components/header/top-menu/TopMenu';
import Footer from './components/footer/Footer';

import Home from './components/pages/Home';
import WhatWeDo from './components/pages/WhatWeDo';
import BePartOfUs from './components/pages/BePartOfUs';
import ContactAndLocations from './components/pages/ContactAndLocations';
import StudentsCorner from './components/pages/StudentsCorner';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <TopMenu />
        <Header />
      </div>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/what-we-do'>
          <WhatWeDo />
        </Route>
        <Route path='/be-part-of-us'>
          <BePartOfUs />
        </Route>
        <Route path='/contact-and-locations'>
          <ContactAndLocations />
        </Route>
        <Route path='/students-corner'>
          <StudentsCorner />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
