import './App.css';
import Slash from '../src/assets/5d53577b7a8e533bff80a26fefdaa1ec-removebg-preview.png'
import PinkFloyd from '../src/assets/200w.gif'
import RollingStones from '../src/assets/rolling-stones-the-rolling-stones.gif'
import Queen from '../src/assets/giphy.gif'
import SlashTocando from '../src/assets/821l.gif'
import { useRef, useState } from 'react';
import sweetChild from '../src/assets/sweet.mp3';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';

function App() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" onClick={playMusic}>{isPlaying ? 'Parar' : 'ROCK!!'}
            <audio ref={audioRef} src={sweetChild} />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#quando" onClick={() => scrollToSection('quando')}>Quando?</Nav.Link>
            <Nav.Link href="#one" onClick={() => scrollToSection('onde')}>Onde?</Nav.Link>
            <Nav.Link href="#comprar"  onClick={() => scrollToSection('comprar')}>Comprar</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <header className="App-header">
        <div className='corpo'>
          <img src={Slash} alt="" />
          <div className='container'>
            <p className='par'>Festa da SR <br />Baixada Santista</p>
          </div>
        </div>
        <img className="tocando" src={SlashTocando} alt="" />
        <div className='detalhes' id='onde'>
          <p className='titulo'>Onde será?</p>
          <div className='local'>
            <img className="pinkfloyd" src={PinkFloyd} alt="" />
            <p className='place'>
              Clube dos Ingleses<br />
              Rua Santa Catarina, 127<br />
              Bairro José Menino<br />
              Santos/SP<br />
              19h<br />

              <span>Tema: Rock N Roll</span>
            </p>
          </div>
        </div>

        <div id='quando'>
          <div>
            <img src={RollingStones} alt="" className='rollingStones' />
            <p className='data'>Dia 06/12/2024</p>
          </div>
          <div id='horario'>
            <img src={Queen} alt="" className='queen' />
          </div>
        </div>

        <Button variant="danger" className='comprar' id="comprar">comprar</Button>
      </header>
    </div>
  );
}

export default App;
