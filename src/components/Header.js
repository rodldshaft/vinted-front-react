const Header = () => {
  return (
    <div className="banner-top">
      <header>
        <img src="./assets/img/logo.png" alt="logo" />
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
