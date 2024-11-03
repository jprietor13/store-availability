import logo from "../assets/images/image.png";

export const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="logo" />
      <h1 className="head-title">InstaStore</h1>
    </header>
  );
};
