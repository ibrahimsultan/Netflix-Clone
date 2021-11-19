import ScrollButton from './components/ScrollButton'
import Navbar from './components/Navbar'
import Home from './components/Home'
import WS from './components/WS'
import Movies from './components/Movies'
import Animated from './components/Animated'
import YoutubeEmbed  from './components/Documentry'
import './App.css';
import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
 <>

<Navbar/>
<Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/movies" component={Movies} />
      <Route exact path="/webseries" component={WS} />
      <Route exact path="/animated" component={Animated} />
      <Route exact path="/document" component={YoutubeEmbed } />
      <Redirect to="/" />
</Switch>
<ScrollButton/>
 </>
  );
}

export default App;
