import Logo from "../assets/logo.png";

export const Header = () => {
    return (
        <Header>
            <a href="/" className="logo">
                <img src={Logo} alt="Router1 Logo" />
                <span>Router1</span>
            </a>
            <nav className="navigation">
                <a href="/" className="link">Home</a>
                <a href="/products" className="link">Products</a>
                <a href="/contact" className="link">Contact</a>
            </nav>
        </Header>
    )
}
