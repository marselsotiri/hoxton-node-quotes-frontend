import { useEffect, useState } from "react";
import LiQuote from "../component/LiQuotes"
import { QuoteType } from "../types"



function Quotes() {

    const [quotes, setQuotes] = useState<QuoteType[]>([]);
    useEffect(() => {
        fetch("http://localhost:4000/quotes")
            .then((resp) => resp.json())
            .then((quotes) => setQuotes(quotes));
    }, []);

    return <div className="quotes">
        <ul className="quotes_list">
            {quotes.map((quote) => (
                <LiQuote quote={quote} />
            ))}
        </ul>
    </div>
}
export default Quotes