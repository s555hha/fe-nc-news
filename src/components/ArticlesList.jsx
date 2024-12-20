import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { getArticles } from "../api"
import ArticleCards from "./ArticleCards"
import { FormControl } from "@mui/material"

function ArticlesList() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const [searchParams, setSearchParams] = useSearchParams()
  const topicName = searchParams.get("topic") || ""
  const sortBy = searchParams.get("sort_by") || "created_at"
  const orderBy = searchParams.get("order_by") || "DESC"

  useEffect(() => {
    setLoading(true)
    getArticles(topicName, sortBy, orderBy)
      .then((articles) => {
        setArticles(articles)
        setLoading(false)
      })
      .catch((error) => {
        setLoading(false)
        setError(true)
      })
  }, [searchParams])

  function handleTopicChange(e) {
    const selectedTopic = e.target.value
    setSearchParams({
      topic: selectedTopic,
      sort_by: sortBy,
      order_by: orderBy,
    })
  }

  function handleSortChange(e) {
    const selectedSortBy = e.target.value
    setSearchParams({
      topic: topicName,
      sort_by: selectedSortBy,
      order_by: orderBy,
    })
  }

  function handleOrderChange() {
    const selectedOrderBy = orderBy === "ASC" ? "DESC" : "ASC"
    setSearchParams({ 
      topic: topicName, 
      sort_by: sortBy, 
      order_by: selectedOrderBy 
    })
  }

  if (loading) {
    return <h2>Loading...</h2>
  }

  if (error) {
    return <p>Sorry, unable to fetch data. Please try again later.</p>
  }

  return (
    <section>
      <h2>Articles</h2>

      <FormControl fullWidth sx={{ marginBottom: 2 }}>
        <select onChange={handleTopicChange} value={topicName}>
          <option value="">All Topics</option>
          <option value="football">Football</option>
          <option value="coding">Coding</option>
          <option value="cooking">Cooking</option>
        </select>
      </FormControl>

      <FormControl fullWidth sx={{ marginBottom: 2 }}>
        <select onChange={handleSortChange} value={sortBy}>
          <option value="created_at">Date</option>
          <option value="author">Author</option>
          <option value="votes">Votes</option>
          <option value="comment_count">Comment Count</option>
        </select>
      </FormControl>

      <button onClick={handleOrderChange}>
        {orderBy === "ASC" ? "Sort By Descending Order" : "Sort By Ascending Order"}
      </button>

      <ul className="article-list">
        {articles.map((article) => (
          <ArticleCards key={article.article_id} article={article} />
        ))}
      </ul>
    </section>
  )
}

export default ArticlesList
