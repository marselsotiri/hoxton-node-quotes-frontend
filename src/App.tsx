import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css'
import AddQuote from './pages/AddQuote';
import Quotes from './pages/Quotes';
import RandomQuote from './pages/RandomQuote';
import SingleQuote from './pages/SingleQuote';


function App() {


  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Navigate to="/quotes" />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/quotes/:id" element={<SingleQuote />} />
        <Route path="/randomQuote" element={<RandomQuote />} />
        <Route path="/addQuote" element={<AddQuote />} />
      </Routes>

    </div>
  )
}

export default App
