import logo from './logo.png';
import './App.css';
import Header from './header/header';
import Cards from './cards/cards';
import HomepageImage from './homepage-image/homepage-image';
import Button from './common/button';

function App() {
  return (
    <div className="App">
      <img className='mobile-background' src="./mobile_background.jpg" alt="" />
        <p className='app-call-to-action-text'>Psicologia clínica de abordagem Junguiana, Terapia Floral e Integrativa.</p>
        <Button></Button>
      <Cards></Cards>
    </div>
  );
}

export default App;
