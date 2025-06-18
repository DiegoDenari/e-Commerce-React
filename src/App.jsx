
import './App.css';
import NavBar from './components/NavBar';

function App() {
  const saludo = 'Bienvenido a NeonLed!';

  return (
    <div className='app-container'>
      <NavBar />
      <h2>{saludo}</h2>
      <img src="" alt="" />
    </div>
 )
}

export default App
