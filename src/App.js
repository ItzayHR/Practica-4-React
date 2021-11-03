import './App.css';
import Header from './Components/Header';
import Libros from './Components/Libros';
import Lista from './Components/Lista';
import LibrosProvider from './Context/LibrosContext';

export default function App() {
  return (
    <div className="App">
      <LibrosProvider>
        <Header/>
        <div className="Container">
          <Libros/>
          <Lista/> 
        </div>
      </LibrosProvider>
    </div>
  );
}
