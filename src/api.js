import axios from "axios"

const Api = axios.create({
  baseURL: "https://my-nc-news-2dfw.onrender.com/api",
})

export const getArticles = () => {
  return Api.get("/articles").then(({ data }) => {
    return data.articles
  })
}
export const getArticleById = (articleId) => {
  return Api.get(`/articles/${articleId}`).then(({ data }) => {
    return data.article
  })
}
