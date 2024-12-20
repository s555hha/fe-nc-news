import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { getTopics } from "../api"
import { List, ListItem, Typography, Paper, Box } from "@mui/material"

function TopicsList() {
  const [topics, setTopics] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    setLoading(true)
    getTopics()
      .then((topics) => {
        setTopics(topics)
        setLoading(false)
      })
      .catch((error) => {
        setLoading(false)
        setError(true)
      })
  }, [])

  if (loading) {
    return <h2>Loading...</h2>
  }

  if (error) {
    return <p>Sorry unable to return the data.</p>
  }

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        Topics
      </Typography>

      <Paper elevation={3} sx={{ padding: 2 }}>
        <List>
          {topics.map((topic) => (
            <ListItem key={topic.slug} sx={{ padding: 1 }}>
              <Link
                to={`/articles?topic=${topic.slug}`}
                style={{ textDecoration: "none", width: "100%" }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    color: "primary.main",
                    "&:hover": { color: "primary.dark" },
                  }}
                >
                  {topic.slug}
                </Typography>
              </Link>
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  )
}
export default TopicsList
