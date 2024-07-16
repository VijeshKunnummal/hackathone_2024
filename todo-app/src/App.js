import React from 'react';
import TodoList from './components/TodoList';
import './App.css';
// Bootstrap CSS
//import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
//import "bootstrap/dist/js/bootstrap.bundle.min";
import Layout from './components/Layout';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
//<TodoList />

function App() {
    return (      
        <div className="App">
            <Router>
              <Layout>
              <Route exact path="/" component= {TodoList} />
              {/* />
              <Route path = "/mybooks" component = {MyBooks} />
              <Route path = "/favorites" component = {Favorites} /> */}
              </Layout>
            </Router>
        </div>
    );
}
export default App;