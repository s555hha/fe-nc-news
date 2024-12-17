function CommentCard({ comment }) {
  return (
    <section>
      <p>Author: {comment.author}</p>
      <p>comments: {comment.body}</p>
      <p>Created on: {comment.created_at.slice(0, 10)}</p>
      <p>Votes: {comment.votes}</p>
    </section>
  )
}

export default CommentCard
