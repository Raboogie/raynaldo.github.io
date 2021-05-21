import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./components/Homepage";
import Projects from "./pages/Projects";
import Error from "./pages/Error";
import Contacts from "./pages/Contacts";
import Menu from "./components/Menu";
//import logo from "./Raynaldo.jpg";
//import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      {/* switch will look for the first part that matches and then it will render that path */}
      <Menu />
      <Switch>
        {/* path is for what you want to show in the address bar for that page */}
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="contact-me">
          <Contacts />
        </Route>
        {/* * means the path will always match */}
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
