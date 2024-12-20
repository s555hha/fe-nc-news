import React, { useState, useEffect } from "react";
import { articleVotes, getArticleById } from "../api"; 
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { Typography } from "@mui/material";

function Vote({ articleId, currentVotes, setArticle }) {
  const [votes, setVotes] = useState(currentVotes);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setVotes(currentVotes); 
  }, [currentVotes]);

  function updateVotes(inc_votes) {
    articleVotes(articleId, inc_votes)
      .then(() => {
        getArticleById(articleId)
          .then((article) => {
            setArticle(article);  
            setVotes(article.votes); 
          })
          .catch(() => {
            setIsError(true); 
          });
      })
      .catch(() => {
        setVotes(votes); 
        setIsError(true);  
      });
  };

  function handleIncrement() {
    updateVotes(1)
  }   
  function handleDecrement() {
    updateVotes(-1)
  }; 

  if (isError) {
    return <p>Sorry, vote update failed.</p>; 
  }

  return (
    <div>
      <Typography variant="h6">Votes: {votes}</Typography>
      <div>
        <ThumbUpIcon
          onClick={handleIncrement}
          sx={{ cursor: "pointer", marginRight: 2 }}
        />
        <ThumbDownIcon
          onClick={handleDecrement}
          sx={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
}

export default Vote;
