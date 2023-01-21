import './App.css';
import freeCodeCampLog from './imagenes/freecodecamp-logo.png'
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img 
          src={freeCodeCampLog}
          className='freecodecamp-logo' />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
