import './Header.css';
import setting from '../../assets/settings.svg'

export default function Header() {
  return (
    <header className="header">
      <div className="container header__container">
        <a href="#" className="header__logo">
          <h3>Todo App</h3>
        </a>
        <button className="header__settings btn">
            <img src={setting} alt="" />
        </button>
      </div>
    </header>
  );
}
