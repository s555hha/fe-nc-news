import { getArticleById } from "../api"
import { useParams } from "react-router"
import { useState, useEffect } from "react"
import CommentList from "./CommentList"
import Vote from "./Votes"
import CommentForm from "./CommentForm"

import {
  Card,
  CardHeader,
  CardMedia,
  Typography,
  CardActions,
} from "@mui/material"
import ThumbUpIcon from "@mui/icons-material/ThumbUp"

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
  function updateVotes(newVoteCount) {
    setArticle((article) => ({
      ...article,
      votes: newVoteCount,
    }))
  }

  return (
    <Card
      sx={{
        width: "100%",
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
        title={article.title}
        subheader={`By ${
          article.author
        } | Created on: ${article.created_at.slice(0, 10)}`}
        sx={{
          backgroundColor: "#e1e1e1",
          textAlign: "center",
        }}
      />

      <CardMedia
        component="img"
        height="194"
        width="100%"
        image={article.article_img_url}
        alt={article.title}
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
        {article.body}
      </Typography>

      <CardActions
        disableSpacing
        sx={{ display: "flex", alignItems: "center", padding: 2 }}
      >
          <ThumbUpIcon sx={{ marginRight: 1 }}/>

        <Typography
          variant="body2"
          color="textSecondary"
          sx={{ marginRight: 2 }}
        >
          {article.votes}
        </Typography>
      </CardActions>
      <Vote
        articleId={articleId}
        currentVotes={article.votes}
        setArticle={setArticle}
        setVotes={updateVotes}
      />

      <CommentForm setArticle={setArticle} />

      <section>
        <Typography
          variant="h6"
          sx={{ paddingLeft: 2, paddingTop: 2 }}
        ></Typography>
        <CommentList articleId={articleId} />
      </section>
    </Card>
  )
}

export default GetArticleById



