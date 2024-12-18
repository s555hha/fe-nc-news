// function CommentCard({ comment }) {
//   return (
//     <section>
//       <p>Author: {comment.author}</p>
//       <p>comments: {comment.body}</p>
//       <p>Created on: {comment.created_at.slice(0, 10)}</p>
//       <p>Votes: {comment.votes}</p>
//     </section>
//   )
// }

// export default CommentCard
import React from 'react';
import { Card, CardHeader, Typography } from '@mui/material';


function CommentCard({ comment }) {
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
          textAlign: 'center', 
        }}
      />
      
      <Typography
        variant="body2"
        color="textSecondary"
        sx={{
          padding: 2,
          backgroundColor: '#ffffff', 
          fontStyle: 'italic',  
        }}
      >
        {comment.body}
      </Typography>
    </Card>
  );
}

export default CommentCard;

