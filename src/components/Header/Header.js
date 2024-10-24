function Header() {
  return (
    <header className="header">
      <div className="header__container container">
        <img
          src="./images/logo.png"
          alt="Spring Logo"
          className="header__logo"
        />
        <nav className="mobile-menu">
          <ul className="mobile-menu__list" id="mobile-menu"></ul>
        </nav>
        <div className="hamburger" role="button" tabindex="0">
          <div className="hamburger__line"></div>
          <div className="hamburger__line"></div>
          <div className="hamburger__line"></div>
        </div>
        <div className="header__right-section">
          <nav className="header__nav">
            <ul className="header__menu" id="menu"></ul>
          </nav>
          <img
            src="./images/toggle.png"
            alt="Toggle"
            className="header__toggle"
            draggable="false"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
