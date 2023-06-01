import { useState, useEffect } from 'react';
import './Quote.css';

const category = 'faith';
const baseUrl = `https://api.api-ninjas.com/v1/quotes?category=${category}`;

function Quote() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(baseUrl, {
      headers: {
        'X-Api-Key': '1HmvHreWzbNLtll3umNueqBT6r4YSZOiZvVw0y4c',
      },
    })
      .then((response) => {
        if (!response.ok) { throw Error('Failed to fetch quote. Please try again later'); }
        return response.json();
      })
      .then((data) => {
        const body = `${data[0].quote} by ${data[0].author}`;
        setQuote(body);
        setLoading(false);
        setError(null);
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message);
      });
  }, []);
  return (
    <div className="display-quote">
      {loading && <div>Loading...</div>}
      {quote && <div>{quote}</div>}
      {error && <div>{error}</div>}
    </div>
  );
}

export default Quote;
