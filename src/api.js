import axios from "axios"

const api = axios.create({
  baseURL: "https://my-nc-news-2dfw.onrender.com/api",
})

export const getArticles = () => {
  return api.get("/articles").then(({ data }) => {
    return data.articles
  })
}
export const getArticleById = (articleId) => {
  return api.get(`/articles/${articleId}`).then(({ data }) => {
    return data.article
  })
}
export const getComments = (articleId) => {
  return api.get(`/articles/${articleId}/comments`).then(({ data }) => {
    return data.comments
  })
}
export const articleVotes = (articleId, changeVote) => {
  return api.patch(`/articles/${articleId}`, {
    inc_votes: changeVote,
  })
}
export const addComment = (articleId, username, commentBody) => {
  return api.post(`/articles/${articleId}/comments`, {
    username: username,
    body: commentBody,
  })
}
export const deleteComment = (commentId) => {
  return api.delete(`/comments/${commentId}`);
};

