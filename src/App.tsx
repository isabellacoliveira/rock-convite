import './App.css';
import Slash from '../src/assets/5d53577b7a8e533bff80a26fefdaa1ec-removebg-preview.png'
import PinkFloyd from '../src/assets/200w.gif'
import RollingStones from '../src/assets/rolling-stones-the-rolling-stones.gif'
import Queen from '../src/assets/giphy.gif'
import { useRef, useState } from 'react';
import sweetChild from '../src/assets/sweet.mp3';

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
      <nav className='nav'>
      <button className='actions' onClick={() => scrollToSection('quando')}>Quando?</button>
        <button className='actions' onClick={() => scrollToSection('onde')}>Onde?</button>
        <button className='actions' onClick={() => scrollToSection('horario')}>Horário</button>
        <button className='actions' onClick={() => scrollToSection('comprar')}>Comprar</button>
        <button className='actions' onClick={() => scrollToSection('tema')}>Tema</button>
        <button onClick={playMusic}>
          {isPlaying ? 'Parar' : 'ROCK!!'}
        </button>
        <audio ref={audioRef} src={sweetChild} />
      </nav>
      <header className="App-header">
      <div className='corpo'>
        <img src={Slash} alt="" />
        <p className='par'>Festa da SR <br/>Baixada Santista</p>
      </div>
      <div className='detalhes' id='onde'>
        <p>Onde será?</p>
        <div className='local'>
          <img className="pinkfloyd" src={PinkFloyd} alt="" />
          <p>
          Clube dos Ingleses<br/>
          Rua Santa Catarina, 127<br/>
          Bairro José Menino<br/>
          Santos/SP<br/>
          </p>
        </div>
      </div>
        <div id='quando'>
          <div>
            <p>Dia 06/12/2024</p>
            <img src={RollingStones} alt="" className='rollingStones'/>
          </div>
          <div id='horario'>
            <img src={Queen} alt="" className='queen' />
            <p>A partir das 19h</p>
          </div>
        </div>
        <div id='tema'>
          <p>Tema Rock'n Roll</p>
        </div>
      </header>
    </div>
  );
}

export default App;
