import logo from "../../public/banner-wide.jpeg";

const Header = () => {
  return (
    <div className="banner-top">
      <header>
        <img alt="logo" src={logo} />
        <div className="right">
          <button>s'inscrire</button>
          <button>se connecter</button>
          <button className="vends">vends tes articles</button>
        </div>
      </header>
    </div>
  );
};
export default Header;
