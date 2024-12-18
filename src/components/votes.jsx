import React, { useState, useEffect } from "react"
import { articleVotes } from "../api"
import { Button, Typography } from "@mui/material"
import ThumbUpIcon from "@mui/icons-material/ThumbUp"
import ThumbDownIcon from "@mui/icons-material/ThumbDown"

function Vote({ articleId, currentVotes, setArticle }) {
  const [votes, setVotes] = useState(currentVotes)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    setVotes(currentVotes)
  }, [currentVotes])

  function handleIncrement() {
    articleVotes(articleId, 1)
    .catch(() => {
        setVotes((currentVotes) => {
            return currentVotes - 1;
        })
    })
    setVotes((currentVotes) => currentVotes + 1);
  }

  function handleDecrement() {
    articleVotes(articleId, -1)
    .catch(() => {
        setVotes((currentVotes) => {
            return currentVotes + 1
        })
    })
    setVotes((currentVotes) => currentVotes - 1);
  }


  if (isError) {
    return <p>Sorry vote update failed</p>
  }

  return (
    <div>
      <Typography variant="h6">Votes: {votes}</Typography>
      <Button
        color="success"
        onClick={handleIncrement}
        variant="contained"
        startIcon={<ThumbUpIcon />}
      >
        Like
      </Button>
      <Button
        color="error"
        onClick={handleDecrement}
        variant="contained"
        startIcon={<ThumbDownIcon />}
      >
        Dislike
      </Button>
    </div>
  )
}

export default Vote
