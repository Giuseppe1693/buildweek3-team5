import { useEffect, useState } from "react";

const SezioneNotizie = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newText, setNewText] = useState("");
  const [editingPostId, setEditingPostId] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("https://striveschool-api.herokuapp.com/api/posts", {
          //   method: "GET",
          headers: {
            // "Content-Type": "application/json",
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

  const handleEdit = (postId, currentText) => {
    setEditingPostId(postId); // per le modifiche\aggiornamenti
    setNewText(currentText); //Test nella sezione modifica
  };

  const handleSave = async (postId) => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/posts/${postId}`, {
        method: "PATCH", //Add post
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JjNGNkM2U3MDMzNzAwMTUzMTZkYWUiLCJpYXQiOjE3NDAzOTM2ODMsImV4cCI6MTc0MTYwMzI4M30.tM6t2Rh-7iEQNFJu8UFjJn4h9cGKrxIPWJj-y-sV3rc`,
        },
        body: JSON.stringify({
          text: newText, //Questo è per il nuovo test del nuovo post
        }),
      });

      if (!response.ok) {
        throw new Error("Spiacente non è stato possibile salvare le modifiche");
      }

      //per aggiornare la lista post
      const updatedPost = await response.json();
      setNews(news.map((post) => (post._id === postId ? updatedPost : post)));

      setEditingPostId(null);
      setNewText("");
    } catch (error) {
      setError("Errore durante la modifica del post");
    }
  };

  if (loading) return <p>Caricamento notizie...</p>;
  if (error) return <p className="text-danger">⚠️ Errore: {error}</p>;

  return (
    <section>
      {news.slice(0, 10).map((article) => (
        <div key={article._id} className="border p-3 my-2 bg-white rounded">
          <h5>{article.username}</h5>

          {editingPostId === article._id ? (
            <div>
              <textarea value={newText} onChange={(e) => setNewText(e.target.value)} className="form-control mb-2" />
              <button onClick={() => handleSave(article._id)} className="btn btn-success">
                Salva
              </button>
            </div>
          ) : (
            <p>{article.text}</p>
          )}

          {/* <p>{article.text}</p> */}
          <small className="text-muted">{new Date(article.createdAt).toLocaleString()}</small>
          <button onClick={() => handleEdit(article._id, article.text)} className="btn btn-warning mt-2">
            Modifica
          </button>
        </div>
      ))}
    </section>
  );
};

export default SezioneNotizie;
