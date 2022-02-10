import { QuoteType } from "../types"

type Props = {
    quote: QuoteType
}

function Quote({ quote }: Props) {
    return <li className="quotes-item" key={quote.id}>
        <div className="quote">
            <p>{quote.content}</p>
            <h3> - {quote.author}</h3>
        </div>
    </li>
}

export default Quote