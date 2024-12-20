import React from "react"
import { Link } from "react-router-dom"
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material"

function Header() {
  return (
    <AppBar position="sticky">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h3" sx={{ color: "#fff" }}>
          NC NEWS
        </Typography>

        <Box>
          <Button
            component={Link}
            to="/"
            sx={{
              color: "white",
              marginRight: 2,
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.08)",
              },
            }}
          >
            Home
          </Button>

          <Button
            component={Link}
            to="/articles"
            sx={{
              color: "white",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.08)",
              },
            }}
          >
            Articles
          </Button>
          <Button
            component={Link}
            to="/topics"
            sx={{
              color: "white",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.08)",
              },
            }}
          >
            Topics
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
