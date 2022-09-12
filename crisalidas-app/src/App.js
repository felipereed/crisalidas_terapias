import logo from './logo.png';
import './App.css';
import Header from './header/header';
import Cards from './cards/cards';
import HomepageImage from './homepage-image/homepage-image';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <HomepageImage></HomepageImage>
      <Cards></Cards>
    </div>
  );
}

export default App;
