
import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom";




import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Landing from "./components/Layout/Landing"
import Register from "./components/UserManagement/Register";
import Login from "./components/UserManagement/Login";
import BookPage from './components/Layout/BookPage';


function App() {


  return (



    <Router>
      <div className="App">
        <Header />
        {
          //Public Routes
        }

        <Route exact path="/" component={Landing} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />

        <Route exact path="/bookPage" component={BookPage} />


        {
          //Private Routes
        }


        <Footer />
      </div>
    </Router>



  );
}

export default App;
