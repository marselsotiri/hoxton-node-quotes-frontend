import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import QuoteImg from "../component/QuoteImg";
import { QuoteType } from "../types";

function SingleQuote() {
    const params = useParams();
    const [quote, setQuote] = useState<QuoteType | null>(null);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
      fetch(`http://localhost:4000/quotes/${params.id}`)
        .then((resp) => resp.json())
        .then((parsedResp) => {
          if (parsedResp.error) setError(parsedResp.error);
          else setQuote(parsedResp);
        });
    }, []);
    if (error) return <p>{error}</p>;
    if (quote === null) return <p>Loading</p>;
  
    return <QuoteImg quote={quote} />;
  }
  
  export default SingleQuote;