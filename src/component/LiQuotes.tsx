import { Link } from "react-router-dom"
import { QuoteType } from "../types"

type Props = {
    quote: QuoteType
}

function LiQuotes({ quote }: Props) {
    return <li className="quotes-item" key={quote.id}>
        <div className="quote">
            <q>{quote.content}</q>
            <Link to={`/quotes/${quote.id}`}>
                <h3> - {quote.firstName} {quote.lastName}  {`· Age`} ({quote.age})</h3>
            </Link>
        </div>
    </li>

}

export default LiQuotes