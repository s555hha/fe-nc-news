import React, { useContext, useState } from "react"
import { UserContext } from "../contexts/UserContexts"
import { addComment } from "../api"
import { Button, TextField, CircularProgress, Snackbar } from "@mui/material"
import { useParams } from "react-router-dom"

function CommentForm({ setArticle }) {
  const { article_id } = useParams()
  const { user } = useContext(UserContext)
  const [comment, setComment] = useState("") 
  const [isLoading, setIsLoading] = useState(false) 
  const [error, setError] = useState("") 
  const [success, setSuccess] = useState(false) 

  const handleChange = (e) => {
    setComment(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    setIsLoading(true)

    addComment(article_id, user.username, comment)
      .then(() => {
        setArticle((article) => {
          const updatedComments = article.comments
          return {
            ...article,
            comments: updatedComments, 
          }
        })

        setComment("") 
        setSuccess(true) 
      })
      .catch(() => {
        setError("Failed to post comment. Please try again.")
      })
        setIsLoading(false) 
  }

  return (
    <div>
        
      <Snackbar
        open={Boolean(error)}
        message={error}
        autoHideDuration={6000}
      />

      <Snackbar
        open={success}
        message="Comment posted"
        autoHideDuration={3000}
      />

      <form onSubmit={handleSubmit} id="comment-form">
        <TextField
          label="Your Comment"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          value={comment}
          onChange={handleChange}
          disabled={isLoading} 
          error={Boolean(error)} 
          helperText={error} 
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={isLoading} 
        >
          {isLoading ? (
            <CircularProgress size={30} color="inherit" />
          ) : (
            "Post Comment"
          )}
        </Button>
      </form>
    </div>
  )
}

export default CommentForm





