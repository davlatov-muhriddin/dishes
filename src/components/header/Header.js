import Styles from "./header.module.css";

function Header() {
  return (
    <header className={Styles.header}>
      <div className="container">
        <div className="wrapper">
          <div className={Styles.headerInfo}>
            <h1>Jaegar Resto</h1>
            <p>Tuesday, 2 Feb 2021</p>
          </div>

          <input type="text" />
        </div>
      </div>
    </header>
  );
}

export default Header;
