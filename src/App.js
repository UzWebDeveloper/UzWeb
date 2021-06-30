import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav"
import Home from "./components/pages/Home"
import Resume from "./components/pages/Resume"
import Projects from "./components/pages/Projects"


function App() {
  return (
    <BrowserRouter>
    <div className="no-responsive">
    <p>Iltimos, kengligi 1300 pikseldan yuqori bo'lgan qurilmada oching !!!</p>
      <p>Please open on a device with a width higher than 1300px !!!</p>
      <p>Пожалуйста, откройте на устройстве с шириной более 1300 пикселей !!!</p>
      </div>
    <div className="App">      
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/resume" component={Resume} />
        <Route path="/projects" component={Projects} />
        
      </Switch>
    </div>
  </BrowserRouter>
  );
}

export default App;
