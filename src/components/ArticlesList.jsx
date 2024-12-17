import { useEffect, useState } from "react"
import { getArticles } from "../api"
import ArticleCards from "./ArticleCards"

function ArticlesList() {
  const [articles, setArticles] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    getArticles()
      .then((articles) => {
        setArticles(articles)
        setIsLoading(false)
      })
      .catch((error) => {
        setIsLoading(false)
        setIsError(true)
      })
  }, [])

  if (isLoading) {
    return <h2>Loading...</h2>
  }
  if (isError) {
    return <p>Sorry unable to return the data</p>
  }

  return (
    <section>
      <h2>Most Recent Articles</h2>
      <ul className="article-list">
        {articles.map((article) => {
          return <ArticleCards key={article.article_id} article={article} />
        })}
      </ul>
    </section>
  )
}

export default ArticlesList
