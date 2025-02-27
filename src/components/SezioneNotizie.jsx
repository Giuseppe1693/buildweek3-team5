import { useEffect, useState } from "react";

const SezioneNotizie = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("https://striveschool-api.herokuapp.com/api/posts", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JjNGNkM2U3MDMzNzAwMTUzMTZkYWUiLCJpYXQiOjE3NDAzOTM2ODMsImV4cCI6MTc0MTYwMzI4M30.tM6t2Rh-7iEQNFJu8UFjJn4h9cGKrxIPWJj-y-sV3rc",
          },
        });
        if (!response.ok) {
          throw new Error("Errore nel recupero Notizie e post");
        }
        const data = await response.json();
        setNews(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <p>Caricamento notizie...</p>;
  if (error) return <p className="text-danger">⚠️ Errore: {error}</p>;

  return (
    <section>
      {news.map((article) => (
        <div key={article._id} className="border p-3 my-2 bg-white rounded">
          <h5>{article.username}</h5>
          <p>{article.text}</p>
          <small className="text-muted">{new Date(article.createdAt).toLocaleString()}</small>
        </div>
      ))}
    </section>
  );
};

export default SezioneNotizie;
