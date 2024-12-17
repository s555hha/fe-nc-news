import axios from "axios";

const Api = axios.create({
  baseURL: "https://my-nc-news-2dfw.onrender.com/api",
});

const getArticles = () => {
  return Api.get('/articles').then(({ data }) => {
    return data.articles;
  });
};

export default getArticles

  