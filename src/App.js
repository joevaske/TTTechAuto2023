import React, { lazy, Suspense } from 'react';

import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollRestoration from 'react-scroll-restoration';

import 'normalize.css';
import './App.css';

import Header from './components/header/Header';
import TopMenu from './components/header/top-menu/TopMenu';
import Footer from './components/footer/Footer';
import Loading from './components/loading/Loading';
import Blog from './components/pages/Blog';
import SingleBlog from './components/pages/SingleBlog';
import FacultyNoviSad from './components/pages/FacultyNoviSad';
import SchoolOfElectricalEngineering from './components/pages/SchoolOfElectricalEngineering';
import FacultyOfElectricalEngineering from './components/pages/FacultyOfElectricalEngineering';
import FacultyOfElectricalEngineeringBl from './components/pages/FacultyOfElectricalEngineeringBl';

/* import Home from './components/pages/Home';
import WhatWeDo from './components/pages/WhatWeDo';
import BePartOfUs from './components/pages/BePartOfUs';
import ContactAndLocations from './components/pages/ContactAndLocations';
import StudentsCorner from './components/pages/StudentsCorner'; */

const Home = lazy(() => import('./components/pages/Home'));
const WhatWeDo = lazy(() => import('./components/pages/WhatWeDo'));
const BePartOfUs = lazy(() => import('./components/pages/BePartOfUs'));
const ContactAndLocations = lazy(() =>
  import('./components/pages/ContactAndLocations')
);
const StudentsCorner = lazy(() => import('./components/pages/StudentsCorner'));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <ScrollRestoration />
        <div className='App'>
          <TopMenu />
          <Header />
        </div>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/what-we-do' component={WhatWeDo} />
          <Route path='/be-part-of-us' component={BePartOfUs} />
          <Route
            path='/contact-and-locations'
            component={ContactAndLocations}
          />
          <Route path='/students-corner' component={StudentsCorner} />
          <Route path='/faculty-novi-sad' component={FacultyNoviSad} />
          <Route
            path='/school-of-electrical-engineering'
            component={SchoolOfElectricalEngineering}
          />
          <Route
            path='/faculty-of-electrical-engineering'
            component={FacultyOfElectricalEngineering}
          />
          <Route
            path='/faculty-of-electrical-engineering-bl'
            component={FacultyOfElectricalEngineeringBl}
          />

          <Route path='/blog' component={Blog} />
          <Route path='/blog-single/:id' component={SingleBlog} />
        </Switch>

        <Footer />
      </Suspense>
    </Router>
  );
};

export default App;
