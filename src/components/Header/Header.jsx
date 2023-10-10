import logo from "../../assets/investment-calculator-logo.png";

const Header = ({title}) => {
  return (
    <header className="header">
      <img src={logo} alt="logo" />
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
