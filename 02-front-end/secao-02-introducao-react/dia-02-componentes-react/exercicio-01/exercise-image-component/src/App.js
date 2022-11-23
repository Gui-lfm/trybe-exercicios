import './App.css';
import Image from './Image';
import cat from './img/cat-img.jpg'

function App() {
  return (
    <div className="App">
      <Image source={cat} alternativeText={'Cute cat staring'}/>
    </div>
  );
}

export default App;
