export default function Navbar() {
    return (
        <header className="header" data-header>
            <div className="container">

                <div className="overlay" data-overlay></div>

                <a href="./index.html" className="logo">
                    {/*<img src="./assets/images/logo.svg" alt="Filmlane logo"/>*/}
                </a>

                <div className="header-actions">

                    <button className="search-btn">
                        <ion-icon name="search-outline"></ion-icon>
                    </button>

                    <div className="lang-wrapper">
                        <label htmlFor="language">
                            <ion-icon name="globe-outline"></ion-icon>
                        </label>

                        <select name="language" id="language">
                            <option value="en">EN</option>
                            <option value="fr">FR</option>
                        </select>
                    </div>
                </div>

                <button className="menu-open-btn" data-menu-open-btn>
                    <ion-icon name="reorder-two"></ion-icon>
                </button>

                <nav className="navbar">

                    <div className="navbar-top">

                        <a href="./index.html" className="logo">
                            <h1 className={"logo"}>.logi</h1>
                        </a>

                        <button className="menu-close-btn">
                            <ion-icon name="close-outline"></ion-icon>
                        </button>

                    </div>

                    <ul className="navbar-list">
                        <li>
                            <a href="./index.html" className="navbar-link">Home</a>
                        </li>

                        <li>
                            <a href="#" className="navbar-link">Movie</a>
                        </li>

                        <li>
                            <a href="#" className="navbar-link">Tv Show</a>
                        </li>
                    </ul>

                    <ul className="navbar-social-list">

                        <li>
                            <a href="#" className="navbar-social-link">
                                <ion-icon name="logo-twitter"></ion-icon>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}