import { Container } from '@mui/material';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './comps/Header';
import SimpleBottomNavigation from './comps/MainNav';
import Movies from './pages/Movies';
import Search from './pages/Search';
import Series from './pages/Series';
import Trending from './pages/Trending';

function App() {
   return (
      <Router>
         <Header />
         <div className="App">
            <Container>
               <Switch>
                  <Route exact path="/">
                     <Trending />
                  </Route>
                  <Route exact path="/movies">
                     <Movies />
                  </Route>
                  <Route exact path="/series">
                     <Series />
                  </Route>
                  <Route exact path="/search">
                     <Search />
                  </Route>
               </Switch>
            </Container>
         </div>
         <SimpleBottomNavigation />
      </Router>
   );
}

export default App;
