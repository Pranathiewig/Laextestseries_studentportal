import React from 'react'
import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import DesktopHeader from './containers/Header';
import Home from'./pages/Home/Home';
import ContactUs from './pages/ContactUs/ContactUs';
import Institute from './pages/Institute/Institute';
import SignIn from './pages/SignIn/SignIn';
import TestSeries from './pages/TestSeries/TestSeries';
import Scholarship from './pages/Scholarship/Scholarship';
import Page404 from './pages/Page404/Page404';

const loading = () => (
  <p className="animated fadeIn pt-3 text-center">Loading...</p>
);

function App() {
  return (
    <Router>
     <div className="App">
       <DesktopHeader/>
       <React.Suspense fallback={loading()}>
       <Switch>
         <Route path='/' exact component={Home}/>
         <Route path='/home' exact component={Home}/>
         <Route path='/contactus' exact component={ContactUs}/>
         <Route path='/institute' exact component={Institute}/>
         <Route path='/scholarship' exact component={Scholarship}/>
         <Route path='/signin' exact component={SignIn}/>
         <Route path='/testseries' exact component={TestSeries}/>
         <Route path="*" component={Page404} />
        </Switch>
        </React.Suspense>
      </div>
    </Router>
  );
}

export default App;
