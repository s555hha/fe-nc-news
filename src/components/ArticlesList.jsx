
import { useEffect, useState } from "react";
import getArticles from "../api";
import ArticleCards from "./ArticleCards";

function ArticlesList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then((articles) => {
      setArticles(articles);
    });
  }, []);

  return (
    <>
      <h2>Most Recent Articles</h2>
      <ul className="article-list">
        {articles.map((article) => {
          return <ArticleCards key={article.article_id} article={article} />;
        })}
      </ul>
    </>
  );
}

export default ArticlesList;
