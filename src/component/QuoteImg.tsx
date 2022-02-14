import { QuoteType } from "../types";

type Props = {
  quote: QuoteType;
};

function Quote({ quote }: Props) {
  return (
    <div className="quote">
      <div className="quote-image">
        <img src={quote.image} alt="profile" />
      </div>
      <div className="quote-content">
        <q>{quote.content}</q>
        <p>
          - {quote.firstName} {quote.lastName} {`· Age`} ({quote.age})
        </p>
      </div>
    </div>
  );
}

export default Quote;