function Header() {
    return (
        <header className="header">
            <h1 className="header-left">Vegetables</h1>
            <div className="header-right">
                <img src="/img/FB.png" alt="Facebook icon" />
                <img src="/img/insta.png" alt="Instagram icon" className="instagram" />
                <hr className="line" />
                <p className="login">LOGIN</p>
                <p className="join">JOIN</p>
            </div>
        </header>
    );
}

export default Header;