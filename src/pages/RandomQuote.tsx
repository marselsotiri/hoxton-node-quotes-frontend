import { useEffect, useState } from "react";
import QuoteImg from "../component/QuoteImg";
import { QuoteType } from "../types";


function RandomQuote() {
  const [quote, setQuote] = useState<QuoteType | null>(null);
  useEffect(() => {
    fetch("http://localhost:4000/randomQuote")
      .then((resp) => resp.json())
      .then((quote) => setQuote(quote));
  }, []);
  if (quote === null) return <p>Loading</p>;
  return <QuoteImg quote={quote}></QuoteImg>;
}

export default RandomQuote;