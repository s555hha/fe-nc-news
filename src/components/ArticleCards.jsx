import { Link } from "react-router-dom"
function ArticleCards({ article }) {
  return (
    <>
      <section className="article-card">
        <Link to={`/articles/${article.article_id}`}>
          <h3>{article.title}</h3>
          <img
            className="articles-images"
            src={article.article_img_url}
            alt={article.title}
          />
        </Link>
        <p>Author: {article.author}</p>
        <p>Topic: {article.topic}</p>
        <p>Created on: {article.created_at.slice(0, 10)}</p>
      </section>
    </>
  )
}

export default ArticleCards
