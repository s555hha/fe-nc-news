import { Link } from 'react-router-dom';

function Header() {
    return (
      <>
      <h2>NC News</h2>
      <nav>
       <ul >
          <li><Link to="/">Home</Link></li>
          <li><Link to="/articles">Articles</Link></li>
      </ul>
      </nav>
      </>
    );
  }
  
  export default Header;