import { Link } from "react-router-dom"

function Header() {
  return (
    <header>
      <h2>NC News</h2>
      <nav>
        <ul className="nav-link">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/articles">Articles</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
