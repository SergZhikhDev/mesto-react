import logo from "../images/logo.svg";

function Header() {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="логотип проекта Mesto" />
      <hr className="header__line" />
    </header>
  );
}

export default Header;
