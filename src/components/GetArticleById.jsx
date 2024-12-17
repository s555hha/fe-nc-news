import { getArticleById } from "../api"
import { useParams } from "react-router"
import { useState, useEffect } from "react"

function GetArticleById() {
  const params = useParams()
  const articleId = params.article_id
  const [article, setArticle] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    getArticleById(articleId)
      .then((article) => {
        setArticle(article)
        setIsLoading(false)
      })
      .catch((error) => {
        setIsLoading(false)
        setIsError(true)
      })
  }, [articleId])

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    return <p>Sorry unable to return the data</p>
  }

  return (
    <section className="full-article">
      <h3>{article.title}</h3>
      <p>Author: {article.author}</p>
      <p>Created on: {article.created_at.slice(0, 10)}</p>
      <img
        className="full-article-image"
        src={article.article_img_url}
        alt={article.title}
      />
      <p>{article.body}</p>
    </section>
  )
}

export default GetArticleById
