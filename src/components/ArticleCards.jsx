import { Link } from "react-router-dom"
import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import CardActions from "@mui/material/CardActions"
import ThumbUpIcon from "@mui/icons-material/ThumbUp"
import CommentIcon from "@mui/icons-material/Comment"

function ArticleCards({ article }) {
  return (
    <Card
      sx={{
        width: 345,
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        marginTop: 2,
        marginBottom: 2,
        "@media (max-width:600px)": {
          maxWidth: "100%",
        },
      }}
    >
      <Link to={`/articles/${article.article_id}`}>
        <CardHeader title={article.title} subheader={`By ${article.author}`} />
        <CardMedia
          component="img"
          height="194"
          width="100%"
          image={article.article_img_url}
          alt={article.title}
        />
      </Link>
      <CardActions
        disableSpacing
        sx={{ display: "flex", alignItems: "center" }}
      >
          <ThumbUpIcon sx={{ marginRight: 1 }}/>
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{ marginRight: 2 }}
        >
          {article.votes}
        </Typography>
          <CommentIcon sx={{ marginRight: 1 }} />
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{ marginRight: 2 }}
        >
          {article.comment_count}
        </Typography>
      </CardActions>
      <Typography>Topic: {article.topic}</Typography>
      <Typography>Created on: {article.created_at.slice(0, 10)}</Typography>
    </Card>
  )
}

export default ArticleCards
