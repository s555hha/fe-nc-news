import { useEffect, useState } from "react"
import { getComments } from "../api"
import CommentCard from "./CommentCard"

function CommentList({ articleId }) {
  const [comments, setComments] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    getComments(articleId)
      .then((comments) => {
        setComments(comments)
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
    return <p>Sorry no comments available</p>
  }

  return (
    <section>
      <h2>Comments</h2>
      <ul>
        {comments.map((comment) => {
          return <CommentCard key={comment.comment_id} comment={comment} />
        })}
      </ul>
    </section>
  )
}

export default CommentList
