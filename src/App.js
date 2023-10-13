import "./App.css";
import { useState, useEffect } from "react";

function getRandomQuote(quotes) {
  return quotes[Math.floor(Math.random() * quotes.length)];
}
function App() {
  const [quotesArr, setQuotesArr] = useState([]);
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) => {
        setQuotesArr(data);
        setQuote(data[0]);
      });
  }, []);

  function getQuote() {
    setQuote(getRandomQuote(quotesArr));
  }
 
  return (
    <>
      <div className="container">
        <h1>Quote Generator</h1>
        <section>
          <button className="button-78" onClick={getQuote}>
            Get Quote
          </button>
          <h3>
            <p>{quote?.text}</p>
          </h3>
          <i>- {quote?.author}</i>
        </section>
      </div>
    </>
  );
}

export default App;
