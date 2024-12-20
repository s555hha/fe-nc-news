import { Route, Routes } from "react-router"
import Header from "./components/Header"
import ArticlesList from "./components/ArticlesList"
import Footer from "./components/Footer"
import Home from "./components/Home"
import GetArticleById from "./components/GetArticleById"
import "./App.css"
import TopicsList from "./components/TopicsList"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<ArticlesList />}></Route>
        <Route
          path="/articles/:article_id"
          element={<GetArticleById />}
        ></Route>
         <Route path="/topics" element={<TopicsList />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
