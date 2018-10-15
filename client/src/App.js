import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Articles from './pages/Articles';
import Savedarticles from './pages/Savedarticles';
// import Search from './pages/Search';

const App = () => (
   <Router>
    <div>
     <Switch>
     <Route exact path="/" component={Articles} /> 
     <Route exact path="/articles" component={Articles} />
     <Route exact path ="/articles/:id" component={Savedarticles} />
    </Switch>
  </div>
   </Router>

);

export default App; 










// Make sure it is working 
// class App extends Component {
//     render() {
//       return (
//         <p>Hello</p>
//       )
//     }
//   }


// export default App;
