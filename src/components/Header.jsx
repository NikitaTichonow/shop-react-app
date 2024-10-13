function Header() {
    return (
      <nav className="#00796b teal darken-2">
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">
            Game Fortnite Shop
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="/">Login</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
  
  export { Header };