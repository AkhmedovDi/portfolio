import './App.css';
import AppForiwatch from './components/AppiwatchPage';
import HomePage from './components/HomePage'
import PortfolioPage from './components/PortfolioPage';
import BlogPage from './components/BlogPage'
import RedFlarePage from './components/RedFlarePage'
import ContactPage from './components/ContactPage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  return (   
       <div>
    <Router>
      <Switch>
    <Route path='/' exact>  
     <HomePage />
     </Route>

     <Route path='/portfolio'>
     <PortfolioPage />
     </Route>
     
     <Route path='/app'>
      <AppForiwatch />
     </Route>
     
     <Route path='/blog'>
     <BlogPage />
     </Route>
     
     <Route path='/redflare'>
     <RedFlarePage />
     </Route>
     
     <Route path='/contact'>
     <ContactPage />
     </Route>
     </Switch>
  </Router>   
   </div>
  

  );
}

export default App;
