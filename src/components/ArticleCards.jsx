function ArticleCards({ article }) {

    return (
      <>
        <h3>{article.title}</h3>
        <img className="article-image" src={article.article_img_url} alt={article.title} />
        <p>Author: {article.author}</p>
        <p>Topic: {article.topic}</p>
        <p>Created on: {article.created_at.slice(0, 10)}</p>
      </>
    );
  }
  
  export default ArticleCards;
  