import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Author from './components/Author/Author';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/:authorId" element={<Author/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
