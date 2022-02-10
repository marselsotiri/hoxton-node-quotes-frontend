import { useEffect, useState } from 'react'
import './App.css'
import Quote from './component/Quote';
import { QuoteType } from './types';

function App() {

  const [quotes, setQuotes] = useState<QuoteType[]>([]);
  useEffect(() => {
    fetch("http://localhost:4000/quotes")
      .then((resp) => resp.json())
      .then((quotes) => setQuotes(quotes));
  }, []);


  return (
    <div className="App">

      <div className="quotes">
        <ul className="quotes_list">
          {quotes.map((quote) => (
            <Quote quote={quote}  />
          ))}
        </ul>
      </div>

    </div>
  )
}

export default App
