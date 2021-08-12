// imports
import React from 'react';
import './css/App.css';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch 
} from 'react-router-dom';
import HomePage from './components/HomePage';
import Chats from './components/Chats';
import ChatScreen from './components/ChatScreen';

// component
const App: React.FC = () => {

  // template
  return (
    <div className="app">
      <Router>
      <Switch>
        <Route 
        path='/chats/:friend'
        component={ChatScreen}
        />
        <Route
        path='/chats'
        component={Chats} 
        />
        <Route
        path='/'
        exact
        component={HomePage}
        />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
