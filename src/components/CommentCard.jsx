import React, { useState, useContext } from "react"
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CircularProgress,
  Snackbar,
  Alert,
} from "@mui/material"

import { deleteComment } from "../api"
import { UserContext } from "../contexts/UserContexts"

function CommentCard({ comment, setComments }) {
  const [isDeleting, setIsDeleting] = useState(false)
  const [deleteSuccess, setDeleteSuccess] = useState(false)
  const { user } = useContext(UserContext)

  function handleDelete() {
    setIsDeleting(true)

    const commentId = comment.comment_id

    deleteComment(commentId)
      .then(() => {
        setIsDeleting(false)
        setDeleteSuccess(true)
      })
      .catch((error) => {
        setIsDeleting(false)
        setDeleteSuccess(false)
      })
  }

  return (
    <Card
      sx={{
        width: 345,
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        marginTop: 2,
        marginBottom: 2,
        backgroundColor: "#f9f9f9",
        "@media (max-width:600px)": {
          maxWidth: "100%",
        },
      }}
    >
      <CardHeader
        title={comment.author}
        subheader={`Commented on: ${comment.created_at.slice(0, 10)}`}
        sx={{
          backgroundColor: "#e1e1e1",
          textAlign: "center",
        }}
      />

      <Typography
        variant="body2"
        color="textSecondary"
        sx={{
          padding: 2,
          backgroundColor: "#ffffff",
          fontStyle: "italic",
        }}
      >
        {comment.body}
      </Typography>

      {comment.author === user.username && (
        <Button
          variant="contained"
          color="secondary"
          onClick={handleDelete}
          disabled={isDeleting}
          sx={{ marginTop: 2 }}
        >
          {isDeleting ? (
            <CircularProgress size={24} color="inherit" />
          ) : (
            "Delete"
          )}
        </Button>
      )}

      <Snackbar
        open={deleteSuccess}
        autoHideDuration={3000}
        onClose={() => setDeleteSuccess(false)}
      >
        <Alert
          onClose={() => setDeleteSuccess(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Comment deleted successfully!
        </Alert>
      </Snackbar>
    </Card>
  )
}

export default CommentCard
