import { useState } from "react";
import "./App.css";
import fetchArticlesWithTopic from "../FetchArticlesWithTopic/fetchArticlesWithTopic";
import ArticlesList from "../ArticleList/ArticleList";
import Loader from "../Loader/Loader";
import "react-toastify/dist/ReactToastify.css";
import Error from "../Error/Error";

import SearchForm from "../SearchForm/SearchForm";
function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const handleSearch = async (topic) => {
    try {
      setArticles([]);
      setLoading(true);
      setError(false);
      const data = await fetchArticlesWithTopic(topic);
      console.log(data)
      setArticles(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SearchForm onSearch={handleSearch} />
      {articles.length > 0 && <ArticlesList items={articles} />}
      {loading && <Loader />}
      {error && <Error />}
    </>
  );
}

export default App;
